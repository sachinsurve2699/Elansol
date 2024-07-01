import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const { email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const user = {
      email,
      password
    };

    try {
      const res = await axios.post('http://localhost:5000/user/login', user);
      sessionStorage.setItem('token', res.data.token);
      sessionStorage.setItem('user', JSON.stringify(res.data.user));      
      console.log('dashboard inkoved');
      navigate('/dashboard');
    } catch (err) {
        if (err.response && err.response.data) {
          alert(err.response.data.msg);
        } else {
          alert('Network error. Please try again.');
        }
      }
  };

  return (
    <div className="App">
      <div className="login-container">
        <h2>SIGN IN</h2>
        <div className="avatar">
          <i className="fas fa-user-circle"></i>
        </div>
        <form className="login-form" onSubmit={onSubmit}>
          <div className="input-group">
            <i className="fas fa-user"></i>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={onChange}
              required
            />
          </div>
          <div className="input-group">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={onChange}
              required
            />
          </div>
          <div className="options">
            <label className="remember-me">
              <input type="checkbox" name="remember" />
              Remember me
            </label>
            <a href="/register" className="forgot-password">Register Here</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
