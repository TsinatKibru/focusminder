// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(startMinutes * 60);
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 justify-center  flex flex-col items-center bg-gray-800 text-white p-6 rounded-md shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
//       <div className="text-6xl font-mono mb-4">
//         {formatTime(time)}
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//       <div className="mt-4">
//         <svg className="w-24 h-24 animate-spin-slow text-teal-500" viewBox="0 0 24 24">
//           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.963 7.963 0 014 12H0c0 4.418 3.134 8.066 7.209 8.917l-1.209-3.626z"></path>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateStrokeDashoffset = () => {
//     const progress = time / totalSeconds;
//     const circumference = 2 * Math.PI * 45; // 45 is the radius
//     return circumference - progress * circumference;
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800  shadow-transparent text-white p-6 rounded-md shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
//       <div className=" flex items-center justify-center text-4xl font-mono">
//           {formatTime(time)}
//         </div>
//       <div className="relative mb-4">
//         <svg width="120" height="120" viewBox="0 0 120 120" className="rotate-90">
//           <circle cx="60" cy="60" r="50" stroke="#2d3748" strokeWidth="10" fill="none" />
//           <circle
//             cx="60" cy="60" r="45"
//             stroke="#38b2ac"
//             strokeWidth="10"
//             fill="none"
//             strokeDasharray="282.743" // 2 * Math.PI * 45
//             strokeDashoffset={calculateStrokeDashoffset()}
//             strokeLinecap="round"
//           />
//         </svg>
//         {/* <div className="absolute inset-0 flex items-center justify-center text-4xl font-mono">
//           {formatTime(time)}
//         </div> */}
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateClockHandAngle = () => {
//     const currentSeconds = totalSeconds - time;
//     const secondsPerMinute = 60;
//     const secondsPerHour = 3600;
//     const secondHandAngle = (currentSeconds % secondsPerMinute) / secondsPerMinute * 360;
//     const minuteHandAngle = ((currentSeconds % secondsPerHour) / secondsPerHour) * 360;
//     return { secondHandAngle, minuteHandAngle };
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800  shadow-transparent text-white p-6 rounded-md shadow-lg">
//       <h2 className="text-2xl font-bold mb-4">Countdown Timer</h2>
//       <div className=" flex items-center justify-center text-4xl font-mono">
//         {formatTime(time)}
//       </div>
//       <div className="relative mb-4">
//         <svg width="120" height="120" viewBox="0 0 120 120" className="rotate-90">
//           <circle cx="60" cy="60" r="50" stroke="#2d3748" strokeWidth="10" fill="none" />
//           <g transform={`rotate(${calculateClockHandAngle().secondHandAngle}, 60, 60)`}>
//             <line x1="60" y1="60" x2="60" y2="20" stroke="#38b2ac" strokeWidth="4" />
//           </g>
//           <g transform={`rotate(${calculateClockHandAngle().minuteHandAngle}, 60, 60)`}>
//             <line x1="60" y1="60" x2="60" y2="30" stroke="#38b2ac" strokeWidth="6" />
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-2 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-2 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateClockHandAngle = () => {
//     const currentSeconds = totalSeconds - time;
//     const secondsPerMinute = 60;
//     const secondsPerHour = 3600;
//     const secondHandAngle = (currentSeconds % secondsPerMinute) / secondsPerMinute * 360;
//     const minuteHandAngle = ((currentSeconds % secondsPerHour) / secondsPerHour) * 360;
//     return { secondHandAngle, minuteHandAngle };
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl text-white p-6 rounded-md">
//       <h2 className="text-3xl font-bold mb-4">Countdown Timer</h2>
//       <div className="flex items-center justify-center text-5xl font-mono mb-4">
//         {formatTime(time)}
//       </div>
//       <div className="relative mb-8">
//         <svg width="140" height="140" viewBox="0 0 140 140" className="transform rotate-90">
//           <circle cx="70" cy="70" r="60" stroke="#4a5568" strokeWidth="10" fill="none" />
//           <g transform={`rotate(${calculateClockHandAngle().secondHandAngle}, 70, 70)`} className="transition-transform duration-1000 ease-out">
//             <line x1="70" y1="70" x2="70" y2="20" stroke="#38b2ac" strokeWidth="4" />
//           </g>
//           <g transform={`rotate(${calculateClockHandAngle().minuteHandAngle}, 70, 70)`} className="transition-transform duration-1000 ease-out">
//             <line x1="70" y1="70" x2="70" y2="30" stroke="#38b2ac" strokeWidth="6" />
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';
// import Image from 'next/image';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateClockHandAngle = () => {
//     const currentSeconds = totalSeconds - time;
//     const secondsPerMinute = 60;
//     const secondHandAngle = (currentSeconds % secondsPerMinute) / secondsPerMinute * 360;
//     const minuteHandAngle = ((currentSeconds % totalSeconds) / totalSeconds) * 360;
//     return { secondHandAngle, minuteHandAngle };
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800 shadow-xl text-white p-6 rounded-md">
//       <h2 className="text-3xl font-bold mb-4">Countdown Timer</h2>
//       <div className="text-5xl font-mono ">
//           {formatTime(time)}
//         </div>
//       <div className="relative flex items-center justify-center mb-8">
//         <Image src="/clockbg.png" alt="Timer Background" width={200} height={200} className="absolute" />
//         {/* <div className="text-5xl font-mono absolute">
//           {formatTime(time)}
//         </div> */}
//         <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
//           <g transform={`rotate(${calculateClockHandAngle().minuteHandAngle}, 100, 100)`} className="transition-transform duration-1000 ease-out">
//             <line x1="100" y1="100" x2="100" y2="20" stroke="#38b2ac" strokeWidth="6" />
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';
// import Image from 'next/image';

// interface CountdownTimerProps {
//   startMinutes: number;
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateClockHandAngle = () => {
//     const currentSeconds = totalSeconds - time;
//     const secondHandAngle = (currentSeconds % 60) / 60 * 360;
//     return secondHandAngle;
//   };

//   return (
//     <div className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800 shadow-xl text-white p-6 rounded-md">
//       <h2 className="text-3xl font-bold mb-4">Countdown Timer</h2>
//       <div className="text-5xl font-mono">
//         {formatTime(time)}
//       </div>
//       <div className="relative flex items-center justify-center mb-8">
//         <Image src="/clockbg.jpeg"  alt="Timer Background" width={250} height={250} className="absolute rounded-full pt-2 pb-1 pr-2 pl-2 bg-gradient-to-tr from-red-50 to-red-500"/>
//         <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
//           <g transform={`rotate(${calculateClockHandAngle()}, 100, 100)`} className="transition-transform duration-1000 ease-out">
//             <line x1="100" y1="100" x2="100" y2="20" stroke="#000000" strokeWidth="4" />
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
// import React, { useState, useEffect, useRef } from 'react';
// import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';
// import Image from 'next/image';

// interface CountdownTimerProps {
//   startMinutes: number;
//   onClose: () => void; // Add a prop to handle closing the timer
// }

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes, onClose }) => {
//   const [time, setTime] = useState(startMinutes * 60);
//   const [isRunning, setIsRunning] = useState(true);
//   const totalSeconds = startMinutes * 60;
//   const timerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     let timer: NodeJS.Timeout;
//     if (isRunning && time > 0) {
//       timer = setInterval(() => {
//         setTime((prevTime) => prevTime - 1);
//       }, 1000);
//     }
//     return () => clearInterval(timer);
//   }, [isRunning, time]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (timerRef.current && !timerRef.current.contains(event.target as Node)) {
//         onClose();
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [onClose]);

//   const formatTime = (seconds: number) => {
//     const mins = Math.floor(seconds / 60);
//     const secs = seconds % 60;
//     return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
//   };

//   const handlePause = () => {
//     setIsRunning(false);
//   };

//   const handleResume = () => {
//     setIsRunning(true);
//   };

//   const handleReset = () => {
//     setIsRunning(false);
//     setTime(totalSeconds);
//   };

//   const calculateClockHandAngle = () => {
//     const currentSeconds = totalSeconds - time;
//     const secondHandAngle = (currentSeconds % 60) / 60 * 360;
//     return secondHandAngle;
//   };

//   return (
//     <div ref={timerRef} className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800 shadow-xl text-white p-6 rounded-md">
//       <h2 className="text-3xl font-bold mb-4">Countdown Timer</h2>
//       <div className="text-5xl font-mono">
//         {formatTime(time)}
//       </div>
//       <div className="relative flex items-center justify-center mb-8">
//         <Image src="/clockbg.jpeg" alt="Timer Background" width={250} height={250} className="absolute rounded-full pt-2 pb-1 pr-2 pl-2 bg-gradient-to-tr from-red-50 to-red-500"/>
//         <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
//           <g transform={`rotate(${calculateClockHandAngle()}, 100, 100)`} className="transition-transform duration-1000 ease-out">
//             <line x1="100" y1="100" x2="100" y2="20" stroke="#000000" strokeWidth="4" />
//           </g>
//         </svg>
//       </div>
//       <div className="flex space-x-4">
//         {isRunning ? (
//           <button onClick={handlePause} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
//             <BsPauseFill size={24} />
//           </button>
//         ) : (
//           <button onClick={handleResume} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700">
//             <BsPlayFill size={24} />
//           </button>
//         )}
//         <button onClick={handleReset} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700">
//           <BsStopFill size={24} />
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
import React, { useState, useEffect, useRef } from 'react';
import { BsPauseFill, BsPlayFill, BsStopFill } from 'react-icons/bs';
import Image from 'next/image';

interface CountdownTimerProps {
  startMinutes: number;
  onClose: () => void;
  onTimerEnd: () => void; // Add a prop to handle the end of the timer
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ startMinutes, onClose, onTimerEnd }) => {
  const [time, setTime] = useState(startMinutes * 60);
  const [isRunning, setIsRunning] = useState(true);
  const totalSeconds = startMinutes * 60;
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }
    if (time === 0) {
      onTimerEnd(); // Trigger the callback when the timer ends
    }
    return () => clearInterval(timer);
  }, [isRunning, time, onTimerEnd]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (timerRef.current && !timerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleResume = () => {
    setIsRunning(true);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(totalSeconds);
  };

  const calculateClockHandAngle = () => {
    const currentSeconds = totalSeconds - time;
    const secondHandAngle = (currentSeconds % 60) / 60 * 360;
    return secondHandAngle;
  };

  return (
    <div ref={timerRef} className="fixed top-24 right-0.5 md:right-1/4 left-0.5 md:left-1/4 bottom-10 flex flex-col items-center justify-center bg-gray-800 shadow-xl text-white p-6 rounded-md">
      <h2 className="text-3xl font-bold mb-4">Countdown Timer</h2>
      <div className="text-5xl font-mono">
        {formatTime(time)}
      </div>
      <div className="relative flex items-center justify-center mb-8 ">
        <Image src="/clockbg.jpeg" alt="Timer Background" width={250} height={250} className="absolute rounded-full pt-2 pb-1 pr-2 pl-2 bg-gradient-to-tr from-red-50 to-red-500"/>
        <svg width="200" height="200" viewBox="0 0 200 200" className="relative">
          <g transform={`rotate(${calculateClockHandAngle()}, 100, 100)`} className="transition-transform duration-1000 ease-out">
            <line x1="100" y1="100" x2="100" y2="20" stroke="#000000" strokeWidth="4" />
          </g>
        </svg>
      </div>
      <div className="flex space-x-4">
        {isRunning ? (
          <button onClick={handlePause} className="bg-red-500 text-white p-3 rounded-full hover:bg-red-700">
            <BsPauseFill size={24} />
          </button>
        ) : (
          <button onClick={handleResume} className="bg-green-500 text-white p-3 rounded-full hover:bg-green-700">
            <BsPlayFill size={24} />
          </button>
        )}
        <button onClick={handleReset} className="bg-blue-500 text-white p-3 rounded-full hover:bg-blue-700">
          <BsStopFill size={24} />
        </button>
      </div>
    </div>
  );
};

export default CountdownTimer;
