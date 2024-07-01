import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App1.css';

const Registration = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: ''
  });

   const navigate = useNavigate();

  const { name, dob, email, password } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name,
      dob,
      email,
      password
    };

    try {
      const res = await axios.post('http://localhost:5000/user/register', newUser);
      sessionStorage.setItem('token', res.data.token);
      sessionStorage.setItem('user', JSON.stringify(res.data.user));
      navigate('/dashboard');
    } catch (err) {
      if (err.response && err.response.data) {
        alert(err.response.data.msg); 
      } else {
        alert('Registration failed. Please try again.');
      }
    }
  };

  return (
    <div className="registration-container">
      <h2>REGISTRATION FORM</h2>
      <form className="registration-form" onSubmit={onSubmit}>
        <div className="input-group">
          <i className="fas fa-user"></i>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={name}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-group">
          <i className="fas fa-calendar-alt"></i>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={onChange}
            required
          />
        </div>
        <div className="input-group">
          <i className="fas fa-envelope"></i>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
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
        <button type="submit" className="register-button">REGISTER</button>
      </form>
    </div>
  );
};

export default Registration;
