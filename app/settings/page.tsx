// app/settings/page.tsx
"use client";
import React from 'react';
import Settings from '../components/Settings';
import { PomodoroProvider } from '../context/PomodoroContext';

const SettingsPage: React.FC = () => {
  return (
    <PomodoroProvider>
      <div className=" flex  w-full  bg-gray-100">
        <Settings />
      </div>
    </PomodoroProvider>
  );
};

export default SettingsPage;
