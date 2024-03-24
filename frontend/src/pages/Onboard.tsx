import React, { useState } from 'react';

const Onboard = () => {
  const [checkingAccount, setCheckingAccount] = useState('');
  const [savingsAccount, setSavingsAccount] = useState('');
  const [investmentAccount, setInvestmentAccount] = useState('');

  const handleLink = (e: { preventDefault: () => void; }) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Add your linking logic here
    // For simplicity, let's just redirect to the next page
    window.location.href = '/nextpage';
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full space-y-8">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Select Your Accounts
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLink}>
          <div>
            <div className="flex justify-between">
              <label htmlFor="checking" className="block pb-2 text-sm font-medium text-gray-700">
                Checking Account
              </label>
              <div className="flex-grow"></div>
            </div>
            <select
              id="checking"
              name="checking"
              className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={checkingAccount}
              onChange={(e) => setCheckingAccount(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="savings" className="block pb-2 text-sm font-medium text-gray-700">
                Savings Account
              </label>
              <div className="flex-grow"></div>
            </div>
            <select
              id="savings"
              name="savings"
              className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={savingsAccount}
              onChange={(e) => setSavingsAccount(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="investment" className="block pb-2 text-sm font-medium text-gray-700">
                Investment Account
              </label>
              <div className="flex-grow"></div>
            </div>
            <select
              id="investment"
              name="investment"
              className="block w-full py-3 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              value={investmentAccount}
              onChange={(e) => setInvestmentAccount(e.target.value)}
            >
              <option value="">Select...</option>
              <option value="bank1">Bank 1</option>
              <option value="bank2">Bank 2</option>
              <option value="bank3">Bank 3</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Onboard;
