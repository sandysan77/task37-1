import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const { token } = useParams();
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/auth/update-password', { token, newPassword });
            alert('Password updated successfully');
        } catch (error) {
            alert('Error updating password');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>Reset Password</h3>
            <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
                required
            />
            <button type="submit">Reset Password</button>
        </form>
    );
};

export default ResetPassword;
