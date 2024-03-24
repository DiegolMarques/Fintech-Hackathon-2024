import React, { useState } from 'react';

const Onboard = () => {
  const [selectedAccount, setSelectedAccount] = useState('Checking');
  const [searchQuery, setSearchQuery] = useState('');

  const handleAccountClick = (account: React.SetStateAction<string>) => {
    setSelectedAccount(account);
  };

  const handlePageChange = () => {

    // Add your sign-in logic here
    // For simplicity, let's just redirect to onboard route
    window.location.href = '/load';
  };

  const handleSearchInputChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchQuery(event.target.value);
  };

  const accounts = ['Checking', 'Savings', 'Investment']; // List of accounts

  // Dummy images data (replace with your actual images)
  const images = [
    { name: 'jpmorgan.png', alt: 'JP Morgan' },
    { name: 'bofa.png', alt: 'Bank Of America' },
    { name: 'chase.png', alt: 'Chase' },
    { name: 'capitalone.png', alt: 'Capital One' },
    { name: 'american.png', alt: 'American Express' },
    { name: 'wells.png', alt: 'Wells Fargo' },
  ];

  // Filter images based on search query
  const filteredImages = images.filter((image) =>
    image.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-scale" style={{ backgroundImage: "url('/back.png')" }}>
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg" style={{ boxShadow: '0px 0px 29.8px 0px rgba(0, 0, 0, 0.13)' }}>
        <div className="flex">
          <div className="flex-grow bg-green-400 rounded-l-lg p-8" style={{ backgroundColor: '#F4FBF4' }}>
            <div className="flex flex-col items-start"> {/* Wrapper div */}
              <h2 className="text-3xl text-gray-800 mb-20 mt-12 pl-7">Link your accounts.</h2>
            </div>
            <div className="flex flex-col items-start ml-7 mb-10"> {/* Wrapper div */}
              {accounts.map((account, index) => (
                <div key={index} className='mb-10 flex items-center'> {/* Updated to flex */}
                  <span className={`inline-block h-6 w-6 mr-14 border border-gray-700 rounded-full mr-2 ${selectedAccount === account ? 'bg-gray-700' : ''}`}></span> {/* Moved the circle outside the paragraph */}
                  <p className="text-lg text-gray-700 cursor-pointer" onClick={() => handleAccountClick(account)}>
                    <span className="text-xl">{account} Account</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-1/2 bg-white rounded-r-lg p-8">
            <div className="flex flex-col items-start ml-2">
              <p className="text-3xl text-gray-700 mb-10 mt-12">{selectedAccount}</p>
            </div>
            <div className="flex flex-col items-start ml-2 mb-2">
              <p className="text-lg text-gray-800">Link your bank account</p>
            </div>
            <div className="flex items-center mb-6">
              <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchInputChange} className="bg-gray-100 px-4 py-2 rounded-l-full focus:outline-none w-3/4" />
              <button className="bg-gray-100 px-4 py-2 rounded-r-full focus:outline-none w-1/4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a4 4 0 11-8 0 4 4 0 018 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {filteredImages.map((image, index) => (
                <div key={index} className={`bg-${selectedAccount === image.alt ? 'gray' : 'white'}-200 border p-4 rounded-lg flex items-center justify-center`} onClick={() => handleAccountClick(image.alt)}>
                  <img src={image.name} alt={image.alt} className="w-full h-auto" />
                </div>
              ))}
            </div>
            <div className="flex justify-end mt-10">
              <button className=" px-6 py-2 text-white rounded-full focus:outline-none" onClick={handlePageChange} style={{ backgroundColor: '#1F6B1D' }}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboard;
