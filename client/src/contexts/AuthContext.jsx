import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [userData, setUserData] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const storeData = JSON.parse(localStorage.getItem('user_data'));

    useEffect(() => {
        if (storeData) {
            const { userToken, userData } = storeData;
            setToken(userToken);
            setUserData(userData);
            setIsAuthenticated(true);
        }
    }, []);

    const login = (newToken, newData) => {
        localStorage.setItem("user_data", JSON.stringify({ userToken: newToken, userData: newData }));
        setToken(newToken);
        setUserData(newData);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('user_data');
        setToken(null);
        setUserData(null);
        setIsAuthenticated(false);
    };


    return (
        <AuthContext.Provider value={{ token, isAuthenticated, login, logout, userData }}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
