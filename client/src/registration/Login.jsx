import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import './css/registration.css'
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars
  const { loading, error, loginUser, clearInput } = useLogin();


  const values = {
    email: email, password: password
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{8,}$/;

    if (!passwordRegex.test(values.password)) {
      alert('Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.');
      return;
    }

    await loginUser(values);
    if (clearInput) {
      setEmail('')
      setPassword('')
    }
  };

  return (
    <div className='reg-pages'>
      <div className='reg-page'>
        <div className='reg-head'>
        <h2>Login</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='registration'>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>

          <button type="submit">Login</button>
          <br/>
          <br/>
          {loading ? 'is loading' :  <Link className='reg-info' to="/auth/signup">Do not have and account yet, <strong>Create Account</strong></Link>}
          <p>{error}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
