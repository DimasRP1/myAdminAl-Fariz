import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

const Sidebar = ({ isSidebarOpen }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login'); // Redirect ke halaman login setelah logout
    };

    return (
        <div className={`bg-gray-800 text-white w-auto p-4 transition-transform duration-200 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <nav className="mt-10">
                <Link to="/edit-profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                    Edit Profile
                </Link>
                <Link to="/user-table" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                    User Table
                </Link>
                <Link to="/property" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                    Property Table
                </Link>
                <button 
                    onClick={handleLogout} 
                    className="py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 w-full text-left flex items-center"
                >
                    <FiLogOut className="mr-2" />
                    Logout
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
