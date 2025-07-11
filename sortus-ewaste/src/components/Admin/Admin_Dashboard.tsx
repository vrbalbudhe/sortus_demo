import React from 'react';
import NavbarAdmin from '../NavbarAdmin';

const AdminDashboard: React.FC = () => {
  const handleClick = (label: string) => {
    alert(`${label} button clicked`);
  };

  return (
    <div className="min-h-screen bg-[#e6f4ea] pb-16 font-sans overflow-x-hidden">
      <NavbarAdmin />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 pt-10">
        <h1 className="text-4xl font-extrabold text-black mb-8 text-center md:text-left">
          Welcome Admin
        </h1>

        {/* Top Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {[
            { title: 'Pickup Requested', value: 24 },
            { title: 'Pickups Assigned', value: 18 },
            { title: 'Certificates Pending', value: 5 },
            { title: 'Total Revenue', value: '₹xx,xxx' }
          ].map(({ title, value }) => (
            <div key={title} className="bg-white shadow-md rounded-lg p-4 sm:p-6 text-center">
              <p className="text-[15px] font-bold text-gray-600">{title}</p>
              <p className="text-2xl font-bold text-green-800 mt-2">{value}</p>
            </div>
          ))}
        </div>

        {/* Assign Pickups */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Assign Pickups</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-left text-sm font-bold">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {['Request ID', 'User', 'Location', 'Status', 'Assign To', 'Action'].map((heading) => (
                    <th key={heading} className="px-4 py-3 whitespace-nowrap">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">{i === 2 ? 'Assigned' : 'In Progress'}</td>
                    <td className="px-4 py-3">
                      <select
                        title="Assign to vendor"
                        aria-label="Assign to vendor"
                        className="border rounded px-2 py-1 text-sm font-bold"
                      >
                        <option value="">Select Vendor</option>
                        <option value="abc">abc</option>
                        <option value="xyz">xyz</option>
                      </select>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 font-bold"
                        onClick={() => handleClick('Assign')}
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Approve Certificates */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Approve Certificates</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-left text-sm font-bold">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  {['Request ID', 'Institute/Industry', 'File', 'Approve'].map((heading) => (
                    <th key={heading} className="px-4 py-3 whitespace-nowrap">{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleClick('Preview')}
                        className="border border-green-600 px-3 py-1 text-green-700 rounded hover:bg-green-100 font-bold"
                      >
                        Preview
                      </button>
                    </td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleClick('Approve')}
                        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700 font-bold"
                      >
                        Approve
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Manage Inventory */}
        <section className="mb-10">
          <h2 className="text-xl font-bold mb-4">Manage Inventory</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-left text-sm font-bold">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">Item No.</th>
                  <th className="px-4 py-3 whitespace-nowrap">Quantity</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[1, 2, 3].map((_, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">XXXX</td>
                    <td className="px-4 py-3">XXXX</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Onboard Vendors */}
        <section>
          <h2 className="text-xl font-bold mb-4">Onboard Vendors</h2>
          <div className="bg-white rounded-lg shadow overflow-x-auto">
            <table className="min-w-full text-left text-sm font-bold">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 whitespace-nowrap">Vendor Name</th>
                  <th className="px-4 py-3 whitespace-nowrap">Vendor Details</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {[1, 2].map((_, i) => (
                  <tr key={i}>
                    <td className="px-4 py-3">Name {i + 1}</td>
                    <td className="px-4 py-3">
                      <button
                        onClick={() => handleClick('View Details')}
                        className="border border-green-600 px-3 py-1 text-green-700 rounded hover:bg-green-100 font-bold"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
