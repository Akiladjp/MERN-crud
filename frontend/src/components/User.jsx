import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

const User = () => {

  const URL = import.meta.env.VITE_API_URL;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${URL}/api/users`);
        setUsers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-10 relative">
      <div className="w-full max-w-4xl bg-[#222222] shadow-lg rounded-lg mt-24">
        <div className="absolute top-12">
          <Link
            to="/addnew"
            className=" px-4 py-2 mb-4 border-2 border-white text-white rounded-lg shadow-md transition duration-300 hover:bg-white hover:text-[#2f2f2f]"
          >
            Add New
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  S.No
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Address
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {users.map((data, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{index + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">{data.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {data.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {data.address}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 flex space-x-2">
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
                      Edit
                    </button>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition duration-300">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
