import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminLogin.css';

const AdminLogin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      onLoginSuccess();
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className="login-page-wrapper">
      {/* Decorative Blobs */}
      <div className="login-blob login-blob-1"></div>
      <div className="login-blob login-blob-2"></div>

      <div className="login-card">
        <div className="login-logo">
          <i className="fa-solid fa-leaf"></i> Zack <span>ADMIN</span>
        </div>
        <p className="login-subtitle">Sign in to access the administrator panel</p>

        {error && (
          <div className="login-error-box">
            <i className="fa-solid fa-circle-exclamation"></i>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form">
          <div className="login-input-group">
            <label htmlFor="username">Username</label>
            <div className="login-input-wrapper">
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError('');
                }}
                placeholder="Enter admin username"
                required
              />
              <i className="fa-solid fa-user"></i>
            </div>
          </div>

          <div className="login-input-group">
            <label htmlFor="password">Password</label>
            <div className="login-input-wrapper">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Enter password"
                required
              />
              <i className="fa-solid fa-lock"></i>
            </div>
          </div>

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

        <div className="login-demo-credentials">
          Demo Credentials: <br />
          Username: <span>admin</span> | Password: <span>admin</span>
        </div>

        <Link to="/" className="back-to-store-link">
          <i className="fa-solid fa-arrow-left-long"></i> Back to live store
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
