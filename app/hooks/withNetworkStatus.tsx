// 'use client';
// import React, { ReactNode } from 'react';
// import useNetworkStatus from '../hooks/useNetworkStatus';
// import NetworkOffline from '../components/NetworkOffline';

// interface WithNetworkStatusProps {
//   children: ReactNode;
// }

// const withNetworkStatus = <P extends object>(
//   Component: React.ComponentType<P>
// ) => {
//   return (props: P & WithNetworkStatusProps) => {
//     const { isOnline } = useNetworkStatus();

//     if (!isOnline) {
//       return <NetworkOffline />;
//     }

//     return <Component {...props} />;
//   };
// };

// export default withNetworkStatus;
