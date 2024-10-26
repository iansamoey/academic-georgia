"use client"; // Mark this file as a client component

import React from 'react';

const UserDashboard: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
            <p className="text-gray-700 mb-6">Welcome to your dashboard. Here you can manage your requests and view your order history.</p>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Your Requests</h2>
                <ul className="space-y-4">
                    {/* Sample requests. Replace these with actual data. */}
                    <li className="p-4 bg-gray-100 rounded shadow">
                        <h3 className="font-semibold">Request Title 1</h3>
                        <p className="text-gray-600">Status: In Progress</p>
                    </li>
                    <li className="p-4 bg-gray-100 rounded shadow">
                        <h3 className="font-semibold">Request Title 2</h3>
                        <p className="text-gray-600">Status: Completed</p>
                    </li>
                    {/* More requests can be added here */}
                </ul>
            </div>

            <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Order History</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">Order ID</th>
                            <th className="py-2 px-4 border-b">Title</th>
                            <th className="py-2 px-4 border-b">Status</th>
                            <th className="py-2 px-4 border-b">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Sample orders. Replace these with actual data. */}
                        <tr>
                            <td className="py-2 px-4 border-b">123456</td>
                            <td className="py-2 px-4 border-b">Order Title 1</td>
                            <td className="py-2 px-4 border-b">Shipped</td>
                            <td className="py-2 px-4 border-b">2024-10-25</td>
                        </tr>
                        <tr>
                            <td className="py-2 px-4 border-b">123457</td>
                            <td className="py-2 px-4 border-b">Order Title 2</td>
                            <td className="py-2 px-4 border-b">Pending</td>
                            <td className="py-2 px-4 border-b">2024-10-24</td>
                        </tr>
                        {/* More orders can be added here */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDashboard;
