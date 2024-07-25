/* eslint-disable no-unused-vars */
import { useState } from 'react';
import useSignUp from '../hooks/useSignUp';
import './css/registration.css'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const { loading, error, registerUser, clearInput } = useSignUp();
    const [frontImage, setFrontImage] = useState(null);
    const [backImage, setBackImage] = useState(null);
    const [frontInputValue, setFrontInputValue] = useState('');
    const [backInputValue, setBackInputValue] = useState('');

    const handleFrontFileChange = (e) => {
        setFrontImage(e.target.files[0]);
        setFrontInputValue(e.target.value);
    };

    const handleBackFileChange = (e) => {
        setBackImage(e.target.files[0]);
        setBackInputValue(e.target.value);
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', name);
    //     formData.append('email', email);
    //     formData.append('password', password);
    //     formData.append('frontImage', frontImage);
    //     formData.append('backImage', backImage);

    //     // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;

    //     // if (!passwordRegex.test(password)) {
    //     //     alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
    //     //     return;
    //     // } else if (password !== passwordConfirm) {
    //     //     alert('Passwords are not the same');
    //     //     return;
    //     // }


    //     await registerUser(formData)

    //     if (clearInput) {
    //         setEmail('')
    //         setPassword('')
    //         setName('')
    //         setPasswordConfirm('')
    //         navigate('/payment');
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('frontImage', frontImage);
        formData.append('backImage', backImage);

        // const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;

        // if (!passwordRegex.test(password)) {
        //     alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
        //     return;
        // } else if (password !== passwordConfirm) {
        //     alert('Passwords are not the same');
        //     return;
        // }

        await registerUser(formData);

        if (clearInput) {
            setEmail('');
            setPassword('');
            setName('');
            setPasswordConfirm('');
            navigate('/payment');
        }
    };


    return (
        <div className='reg-pages'>
            <div className='reg-page'>

                <div className='reg-head'>
                    <h2>Signup</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Full Name:</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    </div>
                    <div>
                        <label>Password Confirmation:</label>
                        <input type="password" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                    </div>
                    <div>
                        <label>Driver License Front Image</label>
                        <input type='file' accept="image/*" onChange={handleFrontFileChange} />
                        <br /><br />
                        {frontImage && (
                            <div>
                                <h3>Selected Driver License Front Image:</h3>
                                <img src={URL.createObjectURL(frontImage)} alt="Front" style={{ width: '200px' }} />
                            </div>
                        )}
                    </div>
                    <div>
                        <label>Driver License Back Image</label>
                        <input type='file' accept="image/*" onChange={handleBackFileChange} />
                        <br /><br />
                        {backImage && (
                            <div>
                                <h3>Selected Driver License Back Image:</h3>
                                <img src={URL.createObjectURL(backImage)} alt="Back" style={{ width: '200px' }} />
                            </div>
                        )}
                    </div>
                    <button type="submit">Signup</button>
                    <br /><br />
                    {loading ? 'is loading' : <Link className="reg-info" to="/auth/login">Already have an account, <strong>Login</strong></Link>}
                    <p>{error}</p>
                </form>
            </div>
        </div>
    )

};

export default Signup;
