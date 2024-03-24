import React, { useState } from 'react';

const SignInCont = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Add your sign-in logic here
    // For simplicity, let's just redirect to onboard route
    window.location.href = '/onboard';
  };

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat bg-scale" style={{ backgroundImage: "url('/back.png')" }}>
      <div className="max-w-xl w-full">
        <div className="rounded-xl bg-green-400 p-20 shadow-xl" style={{ backgroundColor: '#F4FBF4', boxShadow: '0px 0px 29.8px 0px rgba(0, 0, 0, 0.13)' }}> {/* Green rounded box with specified shadow */}
          <div className="flex flex-col items-center justify-center space-y-8">
            <img src="RAPID.png" alt="Logo" className="mb-10 w-54 h-20" /> {/* Image instead of text */}
            <form className="space-y-6" onSubmit={handleSignIn}> {/* Increased vertical spacing */}
              <div>
                <div className="flex justify-between">
                  <label htmlFor="email" className="block pb-2 text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <div className="flex-grow"></div>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block custom-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="fullName" className="block pb-2 text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <div className="flex-grow"></div>
                </div>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  autoComplete="name"
                  required
                  className="block custom-input px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div>
                <div className="flex justify-between">
                  <label htmlFor="password" className="block pb-2 text-sm font-medium text-gray-700">
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
                  style={{ backgroundColor: '#1F6B1D' }} // Set background color to #1F6B1D
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInCont;
