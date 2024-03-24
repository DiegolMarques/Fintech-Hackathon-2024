import React from 'react';

interface CardProps {
  title: string;
  amount: string;
  daysAgo: number;
  transactionsToReview: number;
}

const Card: React.FC<CardProps> = ({ title, amount, daysAgo, transactionsToReview }) => {
  return (
    <div className="card bg-white overflow-hidden flex items-center justify-between" style={{ width: '350px', boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.04)' }}>
      <div className='px-28 rounded-t-xl' style={{ backgroundColor: "#599158" }}>
        <h2 className="text-lg text-white mt-5 mr-6">{title}</h2>
        <p className="text-4xl text-white mt-3 mt-3 mr-6 mb-4">${amount}</p>
      </div>
      <div className='m-2'>
        <p className="text-sm text-gray-500 ">Updated {daysAgo} days ago</p>
        <p className="text-sm underline" style={{ color: '#0031DF' }}>{transactionsToReview} transactions to review</p>
      </div>
    </div>
  );
};

export default Card;
