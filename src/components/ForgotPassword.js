import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/forgot-password', { email });
            alert('Password reset link sent to your email');
        } catch (error) {
            alert('Error sending email');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Forgot Password</h3>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
            />
            <button type="submit">Send Reset Link</button>
        </form>
    );
};

export default ForgotPassword;
