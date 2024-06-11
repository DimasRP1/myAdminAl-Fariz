import React, { useState, useEffect } from 'react';
import { editUserProfile, getUserData, uploadProfilePhoto } from '../services/api/userApi';

const EditProfile = () => {
    const [formData, setFormData] = useState({
        avatar: '',
        first_name: '',
        last_name: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await getUserData();
                setFormData({
                    avatar: `data:image/jpeg;base64,${response.data.avatar}`,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                    phone: response.data.phone,
                    email: response.data.email,
                    password: '', // Password tidak diambil dari API
                    confirmPassword: ''
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        try {
            const response = await uploadProfilePhoto(file);
            setFormData({
                ...formData,
                avatar: `data:image/jpeg;base64,${response.data.avatar}`
            });
        } catch (error) {
            console.error('Error uploading photo:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        try {
            const token = localStorage.getItem('token'); // Asumsikan token disimpan di localStorage
            const response = await editUserProfile(formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            alert(response.data.message);
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('Failed to update profile');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>
            <div className="mb-4 items-center">
                {formData.avatar && <img src={formData.avatar} alt="Avatar" className="mb-4 w-32 h-32 rounded-full" />}
                <input
                    type="file"
                    name="avatar"
                    onChange={handleFileChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">First Name:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Last Name:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Phone:</label>
                <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700">Confirm Password:</label>
                <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded"
                />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Update Profile
            </button>
        </form>
    );
};

export default EditProfile;
