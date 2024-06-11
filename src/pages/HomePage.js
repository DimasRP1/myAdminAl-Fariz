import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import EditProfile from '../components/EditProfile';
import { FiMenu } from 'react-icons/fi';

const HomePage = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="flex h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            <div className="p-6">
                <button 
                    onClick={toggleSidebar} 
                    className="md:hidden text-gray-800 bg-gray-200 p-2 rounded mb-4"
                >
                    <FiMenu />
                </button>
                <EditProfile />
            </div>
        </div>
    );
};

export default HomePage;
