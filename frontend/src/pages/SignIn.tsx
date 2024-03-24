import React, { useState } from 'react';

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Add your sign-in logic here
    // For simplicity, let's just redirect to onboard route
    window.location.href = '/signincont';
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="mt-8 pb-6 text-center text-3xl text-gray-900">
            Sign up for Rapidax
          </h2>
          <form className="space-y-4" onSubmit={handleSignIn}>
            <div>
              <div className="flex justify-between">
                <label htmlFor="investment" className="block pb-2 text-sm font-medium text-gray-700">
                  Username
                </label>
                <div className="flex-grow"></div>
              </div>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="block custom-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="investment" className="block pb-2 text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="flex-grow"></div>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block custom-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='pt-8'>
              <button
                type="submit"
                className="group custom-input relative w-full flex justify-center py-3 px-6 border border-transparent text-sm font-medium rounded-lg text-white bg-green-400 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                style={{ backgroundColor: '#1F6B1D' }} // Set background color to #F4FBF4
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
