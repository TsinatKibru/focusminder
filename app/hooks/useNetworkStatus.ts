// 'use client';
// import { useEffect, useState } from 'react';

// const useNetworkStatus = () => {
//   const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

//   useEffect(() => {
//     const updateNetworkStatus = () => {
//       console.log('Network status changed:', navigator.onLine ? 'online' : 'offline');
//       setIsOnline(navigator.onLine);
//     };

//     window.addEventListener('online', updateNetworkStatus);
//     window.addEventListener('offline', updateNetworkStatus);

//     // Initial log to confirm the current status
//     console.log('Initial network status:', navigator.onLine ? 'online' : 'offline');

//     return () => {
//       window.removeEventListener('online', updateNetworkStatus);
//       window.removeEventListener('offline', updateNetworkStatus);
//     };
//   }, []);

//   return { isOnline };
// };

// export default useNetworkStatus;