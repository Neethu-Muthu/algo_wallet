// src/components/HomePage.jsx
import React from "react";
import SideBar from "./SideBar";

const HomePage = () => {
  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Pera Wallet</h1>
        <p className="text-lg text-gray-300 mb-8">
          Pera Wallet is the easiest and safest way to store, buy, and swap on
          the Algorand blockchain.
        </p>

        <div className="flex space-x-8">
          {/* Create Account Section */}
          <div className="bg-gray-800 p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              I want to create an account
            </h2>
            <p className="text-gray-400 mb-4">Create a new Algorand account</p>
            <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600">
              Create a new account
            </button>
          </div>

          {/* Existing Account Section */}
          <div className="bg-gray-800 p-6 rounded-lg w-1/2">
            <h2 className="text-xl font-semibold mb-4">
              I already have an account
            </h2>
            <p className="text-gray-400 mb-4">
              Import an existing Algorand account from another device or backup
            </p>
            <button className="bg-purple-500 px-4 py-2 rounded-lg hover:bg-purple-600">
              Import account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
