import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Auth.css';
import API_URL from "../../config";

function Login() {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await axios.post(`${API_URL}/login`, formData, {
                withCredentials: true,
            });
            console.log('Login Response:', response.data);
            window.location.href = "http://localhost:5174";
        } catch (error) {
            console.error('Login error:', error.response?.data || error.message);
            setError(error.response?.data?.message || error.response?.data?.error || 'Invalid username or password');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Welcome Back</h1>
                <p className="auth-subtitle">Log in to your account to continue.</p>

                {error && <div className="auth-error-message">{error}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Your username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="auth-button">Log In</button>
                </form>

                <div className="auth-link">
                    Don't have an account? <Link to="/signup">Sign up here</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
