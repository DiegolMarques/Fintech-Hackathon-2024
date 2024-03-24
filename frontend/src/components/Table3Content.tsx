import React from 'react';

import SendIcon from '@mui/icons-material/Send';

const Tab3Content = () => {
  return (
    <div className="ml-16 mt-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-left mb-10">Input your basic information</h1>
      {/* Personal Information */}
      <div className="card bg-white overflow-hidden shadow-md rounded-4xl p-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Personal Information</h2>
        <ul className="list-disc pl-6">
          <li>Your social security number or tax ID number</li>
          <li>Your spouse’s full name, social security number or tax ID number, and date of birth</li>
          <li>Identity Protection PIN, if one has been issued to you, your spouse, or your dependent by the IRS</li>
          <li>Routing and account numbers to receive your refund by direct deposit or pay your balance due if you choose</li>
        </ul>
      </div>
      {/* Information about your income */}
      <div className="card bg-white overflow-hidden shadow-md rounded-4xl p-4 mb-8">
        <h2 className="text-xl font-bold mb-4">Information about your income</h2>
        <ul className="list-disc pl-6">
          <li>W-2 forms for you and your spouse</li>
          <li>Tips received but not reported on W-2 forms</li>
          <li>Cancellation of debt information including amounts reported on 1099-C and 1099-A forms</li>
          <li>Unemployment income, or state or local tax refunds including amounts on 1099-G forms</li>
          <li>Self-employment (SE) and farming profit and loss statements including:</li>
          <ul className="list-disc pl-6">
            <li>All income including amounts reported on forms 1099-NEC (or 1099-K if you’re paid through a third-party such as PayPal)</li>
            <li>Business or farming expenses including:</li>
            <ul className="list-disc pl-6">
              <li>Payments to subcontractors</li>
              <li>Supplies</li>
              <li>Phone and internet</li>
              <li>Office rent or home office information</li>
              <li>Travel and meals</li>
              <li>Equipment</li>
            </ul>
            <li>Business, investment and other income reported on K-1 forms from S-corporations, partnerships, LLCs, trusts, and estates</li>
            <li>Form 1099-R (for IRA/401(k)/pension distributions)</li>
            <li>Escrow closing statements, 1099-S forms, and cost-basis information for income from sale of a property</li>
            <li>Interest, investment, and royalty income including amounts from 1099-INT, -DIV, -B, or K-1s forms</li>
            <li>SSA-1099 for Social Security benefits received</li>
            <li>Alimony received for divorce settlements executed prior to 2019</li>
            <li>Rental property income and expenses—profit/loss statement, suspended loss information, cost-basis and depreciation schedules</li>
            <li>Prior year installment sale information—Forms 6252, principal and interest collected during the year, SSN and address for payer</li>
          </ul>
        </ul>
      </div>
      {/* Additional Income */}
      <div className="card bg-white overflow-hidden shadow-md rounded-4xl p-4">
        <h2 className="text-xl font-bold mb-4">Additional Income</h2>
        <ul className="list-disc pl-6">
          <li>Stock options</li>
          <li>Gambling winnings separate from losses</li>
          <li>Payments for jury duty</li>
          <li>Scholarships</li>
          <li>Taxable Health Savings Account (HSA) and Medical Savings Account (MSA) distributions</li>
          <li>Prizes and awards</li>
          <li>Distributions from Educational Savings Accounts and 529 plans</li>
          <li>Hobby and personal property rental income</li>
          {/* Add more list items as needed */}
        </ul>
      </div>
      <div className="flex justify-center mb-10 mt-10">
        <a href="tax.pdf" download className="btn bg-green-700 w-1/2 text-white mb-10">
          Generate Taxes

        </a>
      </div>
    </div>
  );
};

export default Tab3Content;
