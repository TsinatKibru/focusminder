// components/NetworkOffline.tsx
"use client";


import React from "react";
import { BiWifi } from "react-icons/bi";


const NetworkOffline: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-sm p-4 bg-red-600 text-white rounded-lg shadow-lg flex items-center space-x-4">
      <BiWifi className="h-6 w-6 text-white" />
      <div className="flex-1">
        <p className="font-semibold">No Internet Connection</p>
        <p className="text-sm">Please check your network settings.</p>
      </div>
    </div>
  );
};

export default NetworkOffline;
