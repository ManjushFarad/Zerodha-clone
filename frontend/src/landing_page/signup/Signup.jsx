import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import '../Auth.css';
import API_URL, { DASHBOARD_URL } from "../../config";

function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
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
            await axios.post(`${API_URL}/signup`, formData, {
                withCredentials: true,
            });
            window.location.href = DASHBOARD_URL;
        } catch (error) {
            console.error('Signup error:', error.response?.data || error.message);
            setError(error.response?.data?.error || 'Signup failed. Please try again.');
        }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h1 className="auth-title">Create Account</h1>
                <p className="auth-subtitle">Join us to start investing today.</p>

                {error && <div className="auth-error-message">{error}</div>}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Full Name</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="John Doe"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
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
                            minLength="6"
                        />
                    </div>
                    <button type="submit" className="auth-button">Sign Up</button>
                </form>

                <div className="auth-link">
                    Already have an account? <Link to="/login">Log in here</Link>
                </div>
            </div>
        </div>
    );
}

export default Signup;