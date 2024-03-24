import Card from '../components/Card';
import React, { useState } from 'react';
import DataTable from './Datatable';

const Tab1Content = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex: React.SetStateAction<number>) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="ml-16 mt-12"> {/* Added padding to align content with left edge */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left mb-10">Banking</h1> {/* Aligned text to the left */}
      <div role="tablist" className="tabs">
        <a
          role="tab"
          className={`tab text-lg ${activeTab === 1 ? 'active' : ''}`}
          onClick={() => handleTabClick(1)}
        >
          Banking
        </a>
        <a
          role="tab"
          className={`tab text-lg ${activeTab === 2 ? 'active' : ''}`}
          onClick={() => handleTabClick(2)}
        >
          Investments
        </a>
        <a
          role="tab"
          className={`tab text-lg ${activeTab === 3 ? 'active' : ''}`}
          onClick={() => handleTabClick(3)}
        >
          Additional Income
        </a>
      </div>
      {/* Add button for connecting accounts */}
      {/* Content for each tab */}
      <div className="mt-4 ">
        <div className="flex gap-4">
          <Card
            title="Checking Account"
            amount="2,000.15"
            daysAgo={3}
            transactionsToReview={5}
          />
          <Card
            title="Savings Account"
            amount="5,000.56"
            daysAgo={1}
            transactionsToReview={2}
          />
        </div>
        <div className="flex mr-40 justify-end">
          <button style={{ color: "#599158" }} className="border border-green-700 hover:border-green-700 text-green-700 hover:text-white font-bold py-2 px-4 rounded">
            Connect Accounts
          </button>
        </div>
      </div>
      <DataTable />
    </div>
  );
};

export default Tab1Content;
