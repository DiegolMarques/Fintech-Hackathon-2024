import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - Tabs */}
      <div className="flex-none w-64" style={{ backgroundColor: '#F3F3F3' }}>
        {/* Logo */}
        <div className="p-4">
          <img src="/newlogo.png" alt="Logo" className="w-30 h-40 ml-12" />
        </div>

        {/* Tabs */}
        <div className="p-4">
          <ul className="space-y-2">
            <li className="px-3 py-2 text-gray-800 border-l-4 border-transparent hover:bg-gray-300 hover:border-gray-400">
              <a href="#">Tab 1</a>
            </li>
            <li className="px-3 py-2 text-gray-800 border-l-4 border-transparent hover:bg-gray-300 hover:border-gray-400">
              <a href="#">Tab 2</a>
            </li>
            <li className="px-3 py-2 text-gray-800 border-l-4 border-transparent hover:bg-gray-300 hover:border-gray-400">
              <a href="#">Tab 3</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex-grow p-8 bg-white">
        {/* Content Here */}
        <h1 className="text-2xl font-bold text-gray-800">Dashboard Content</h1>
        <p className="text-gray-600">This is where the dashboard content goes.</p>
      </div>
    </div >
  );
};

export default Dashboard;
