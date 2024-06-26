// app/settings/page.tsx
"use client";
import React from 'react';
import Settings from '../components/Settings';
import { PomodoroProvider } from '../context/PomodoroContext';

const SettingsPage: React.FC = () => {
  return (
    <PomodoroProvider>
      <div className=" flex  w-full h-[calc(100vh-80px)]  bg-slate-300">
        <Settings />
      </div>
    </PomodoroProvider>
  );
};

export default SettingsPage;
