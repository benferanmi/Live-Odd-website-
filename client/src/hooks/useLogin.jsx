import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../contexts/useAuth";
import { message } from "antd";

const useLogin = () => {
    const { login } = useAuth();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [dataMessage, setDataMessage] = useState('');
    const [signUpSuccess, setSignUpSuccess] = useState(false);
    const [clearInput, setClearInput] = useState(false)

    useEffect(() => {
        if (signUpSuccess) {
            message.success(dataMessage);
        } else if (error) {
            message.error(dataMessage);
        }
    }, [dataMessage, error, signUpSuccess]);

    const loginUser = async (values) => {
        setLoading(true);
        setError(null);
        setSignUpSuccess(null);
        setDataMessage('');
        try {
            const res = await axios.post('http://localhost:3000/api/auth/login', values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (res.status === 200) {
                setSignUpSuccess(true);
                setDataMessage(res.data.message);
                login(res.data.token, res.data.user);
            } else {
                setError(true);
                setDataMessage(res.data.message || 'Logging in failed');
            }
        } catch (error) {
            setError(true);
            setDataMessage(error.response?.data?.message || error.message || 'An unexpected error occurred');
        } finally {
            setLoading(false);
            setClearInput(true)

        }
    };

    return { loading, error, loginUser, clearInput };
};

export default useLogin;
