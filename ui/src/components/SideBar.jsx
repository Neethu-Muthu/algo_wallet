// src/components/SideBar.jsx
import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="w-1/4 bg-gray-800 p-6 flex flex-col justify-between min-h-screen">
      <div>
        <h2 className="text-3xl font-semibold mb-10">Pera</h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-2 text-purple-500 font-semibold">
            <Link to="/">🏠 Home</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link to="/send">📤 Send</Link>
          </li>
          <li className="flex items-center space-x-2">
            <Link to="/settings">⚙️ Settings</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>Get Help</li>
          <li>About Pera</li>
          <li>Pera Explorer</li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
