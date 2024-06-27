// // components/Settings.tsx
// "use client";

// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaArrowLeft } from 'react-icons/fa';
// import { usePomodoro } from '../context/PomodoroContext';

// const Settings: React.FC = () => {
//   const { pomodoroTime, setPomodoroTime } = usePomodoro();
//   const [inputValue, setInputValue] = useState<number>(pomodoroTime);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(parseInt(e.target.value, 10));
//   };

//   const handleSave = () => {
//     setPomodoroTime(inputValue);
//   };

//   return (
//     <div className="flex flex-col p-4 bg-white shadow-md rounded-md w-full">
//       <div className="mb-4 flex items-center">
//         <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center">
//           <FaArrowLeft className="mr-2" /> Back
//         </Link>
//       </div>
//       <h2 className="text-2xl font-bold mb-4">Settings</h2>
//       <div className="mb-4 flex justify-between">
//         <label className="block text-lg font-medium text-gray-700 mb-2">Pomodoro Time (minutes)</label>
//         <input
//           type="number"
//           value={inputValue}
//           onChange={handleInputChange}
//           className="w-20 px-3 py-2 border border-gray-300 rounded-md"
//         />
//       </div>
//       <button
//         onClick={handleSave}
//         className="px-4 py-2 bg-blue-500 text-white w-full md:w-1/6 rounded-md hover:bg-blue-700"
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default Settings;
'use client';
import React, { useEffect, useState } from 'react';
import { usePomodoro } from '../context/PomodoroContext';
import { FaArrowLeft } from 'react-icons/fa';
import Link from 'next/link';
import { createOrUpdateSetting, fetchPomodoroTime } from '../actions/taskActions';

const Settings: React.FC = () => {
  const { pomodoroTime, setPomodoroTime } = usePomodoro();
  const [inputValue, setInputValue] = useState<number>(pomodoroTime);
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(parseInt(e.target.value, 10));
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      await createOrUpdateSetting({ pomodoroTime: inputValue });
      setPomodoroTime(inputValue);
    } catch (error) {
      console.error("Failed to save settings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getPomodoroTime = async () => {
      try {
        const pomodoroTime = await fetchPomodoroTime();
        setPomodoroTime(pomodoroTime);
        setInputValue(pomodoroTime);
      } catch (error) {
        console.error("Error fetching Pomodoro time in Settings:", error);
      }
    };

    getPomodoroTime();
  }, [setPomodoroTime]);

  return (
    <div className="flex flex-col p-4 bg-slate-200 shadow-md rounded-md w-full text-slate-800">
      <Link href="/" className="flex items-center text-blue-500 mb-4">
        <FaArrowLeft className="mr-2" />
        <span>Back</span>
      </Link>
      <h2 className="text-2xl font-bold mb-4">Settings</h2>
      <div className="mb-4 flex justify-between border-2 p-4 border-slate-300 border-">
        <label className="block text-lg font-medium text-gray-700 mb-2">Pomodoro Time (minutes)</label>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          className="w-20 px-3 py-2 border border-slate-600 rounded-md appearance-auto"
        />
      </div>
      <button
        disabled={loading}
        onClick={handleSave}
        className={`px-4 py-2 bg-slate-500 text-white w-full md:w-1/6 rounded-md hover:bg-slate-700 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {loading ? 'Saving...' : 'Save'}
      </button>
    </div>
  );
};

export default Settings;
