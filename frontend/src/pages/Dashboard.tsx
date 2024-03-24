import React, { useState } from 'react';
import Tab1Content from '../components/Table1Content';
import Tab2Content from '../components/Table2Content';
import Tab3Content from '../components/Table3Content';
import { ListItemIcon } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HistoryIcon from '@mui/icons-material/History';
import FileCopyIcon from '@mui/icons-material/FileCopy';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Tab 1');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Side - Tabs */}
      <div className="flex-none w-80 bg-white h-100" style={{ height: '100%', position: 'sticky', top: 100 }}>
        {/* Logo */}
        <div className="p-4">
          <img src="/newlogo.png" alt="Logo" className="w-55 h-15 ml-5 mt-3" />
        </div>

        {/* Tabs */}
        <div className="p-0 mt-20">
          <ul className="space-y-0">
            <li
              className={`px-3 py-5 font-bold text-lg text-gray-800 border-l-4 border-transparent flex items-center justify-start ${selectedTab === 'Tab 1' ? 'bg-green-shade border-green-600 text-white font-bold text-lg' : 'hover:bg-gray-300'
                }`}
              onClick={() => handleTabClick('Tab 1')}
            >
              <ListItemIcon className="mr-3">
                <DashboardIcon />
              </ListItemIcon>
              Dashboard
            </li>
            <li
              className={`px-3 py-5 font-bold text-lg text-gray-800 border-l-4 border-transparent flex items-center justify-start ${selectedTab === 'Tab 2' ? 'bg-green-shade border-green-600 text-white font-bold text-lg' : 'hover:bg-gray-300'
                }`}
              onClick={() => handleTabClick('Tab 2')}
            >
              <ListItemIcon className="mr-3">
                <HistoryIcon />
              </ListItemIcon>
              Account History
            </li>
            <li
              className={`px-3 py-5 font-bold text-lg text-gray-800 border-l-4 border-transparent flex items-center justify-start ${selectedTab === 'Tab 3' ? 'bg-green-shade border-green-600 text-white font-bold text-lg' : 'hover:bg-gray-300'
                }`}
              onClick={() => handleTabClick('Tab 3')}
            >
              <ListItemIcon className="mr-3">
                <FileCopyIcon />
              </ListItemIcon>
              Tax Filing
            </li>
          </ul>
        </div>
      </div>


      {/* Right Side - Content */}
      <div className="flex-grow p-8" style={{ backgroundColor: '#F3F3F3' }}>
        {/* Content Based on Selected Tab */}
        {selectedTab === 'Tab 1' && <Tab1Content />}
        {selectedTab === 'Tab 2' && <Tab2Content />}
        {selectedTab === 'Tab 3' && <Tab3Content />}
      </div>
    </div>
  );
};

export default Dashboard;
