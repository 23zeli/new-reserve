import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function Login() {
  const [accountType, setAccountType] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', loginEmail, loginPassword);
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    console.log('Create Account:', name, surname, dateOfBirth, email);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '100px',
        height: '100vh',
      }}
    >
      <div>
        <Link to="/">
          <img
            src="./images/Logo.png"
            alt="logo"
            style={{ width: '199px', height: '50px' }}
          />
        </Link>
      </div>
      <div>
        {accountType === 'login' ? (
          <form
            className="login-form"
            onSubmit={handleLogin}
            style={{
              display: 'grid',
              maxWidth: '300px',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px #495E57',
            }}
          >
            <input
              type="email"
              placeholder="Email Address"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <button className="btn-login" type="submit">
              Login
            </button>
            <>
              <span
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                }}
                onClick={() => console.log('Forgot Password clicked')}
              >
                Reset Password
              </span>
            </>
            <>
              <span
                style={{ cursor: 'pointer', color: 'blue' }}
                onClick={() => setAccountType('create')}
              >
                Create Account
              </span>
            </>
          </form>
        ) : (
          <form
            onSubmit={handleCreateAccount}
            style={{
              display: 'grid',
              maxWidth: '200px',
              gap: '20px',
              padding: '20px',
              border: '1px solid #ccc',
              borderRadius: '10px',
              boxShadow: '0 0 10px #495E57',
            }}
            className="login-form"
          >
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
            <DatePicker
              selected={dateOfBirth}
              onChange={(date) => setDateOfBirth(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Date of Birth"
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="btn-create_account" type="submit">
              Create Account
            </button>
            <>
              Already have an account?{' '}
              <span
                style={{
                  cursor: 'pointer',
                  color: 'blue',
                }}
                onClick={() => setAccountType('login')}
              >
                Login
              </span>
            </>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;