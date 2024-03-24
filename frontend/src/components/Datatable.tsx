import React from 'react';

const sampleData = [
  { date: 'March 22 2024', description: 'Textbook Purchase', total: '$49.99', category: 'Education' },
  { date: 'March 21 2024', description: 'Dining Hall Meal', total: '$8.75', category: 'Food' },
  { date: 'March 20 2024', description: 'Fitness Center Membership Renewal - Helen Newman Hall', total: '$30.00', category: 'Health & Wellness' },
  { date: 'March 19 2024', description: 'Parking Permit', total: '$50.00', category: 'Transportation' },
  { date: 'March 18 2024', description: 'Student Organization Dues', total: '$20.00', category: 'Extracurricular' },

];

const DataTable = ({ data }: { data: any[] }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th className="py-4 text-lg font-bold text-black">Date</th>
            <th className="py-4 text-lg font-bold text-black">Description</th>
            <th className="py-4 text-lg font-bold text-black">Total</th>
            <th className="py-4 text-lg font-bold text-black">Category</th>
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, index) => (
            <tr key={index}>
              <td className="py-4 text-lg text-gray-500">{rowData.date}</td>
              <td className="py-4 text-lg">{rowData.description}</td>
              <td className="py-4 text-lg">{rowData.total}</td>
              <td className="py-4 text-lg">
                <select className="border border-gray-300 rounded-lg px-2 py-1">
                  <option value="business">Business</option>
                  <option value="office-supplies">Office Supplies</option>
                  <option value="travel">Travel</option>
                  <option value="rent">Rent</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


const AccountHistory = () => {
  return (
    <div className="card bg-white overflow-hidden shadow-md rounded-4xl p-4 mt-5 mr-40">
      <h2 className="text-3xl mt-4 ml-4 font-bold mb-4">ACCOUNT HISTORY</h2>
      <DataTable data={sampleData} />
    </div>
  );
};

export default AccountHistory;
