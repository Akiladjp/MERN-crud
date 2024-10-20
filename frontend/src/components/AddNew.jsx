import React, { useState } from 'react'

export const AddNew = () => {
    
      return (
        <div className="min-h-screen flex flex-col items-center justify-center py-10">
          <form
            onSubmit={()=>{}}
            className="w-full max-w-lg bg-[#222222] p-8 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold text-gray-400 mb-6">Add New User</h2>
            
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={()=>{}}
                className="w-full px-4 py-2 border rounded-lg focus:text-[#2f2f2f] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-white  font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={()=>{}}
                className="w-full px-4 py-2 border rounded-lg focus:text-[#2f2f2f] text-[#2f2f2f] focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
    
            <div className="mb-4">
              <label className="block text-white font-medium mb-2" htmlFor="address">
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                onChange={()=>{}}
                className="w-full px-4 py-2 focus:text-[#2f2f2f] text-[#2f2f2f] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
    
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Add User
              </button>
            </div>
          </form>
        </div>
      );
    };
    
