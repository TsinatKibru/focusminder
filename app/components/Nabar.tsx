// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
// import {
//   FaBars,
//   FaChartBar,
//   FaCog,
//   FaRocket,
//   FaTasks,
//   FaVolumeUp,
// } from "react-icons/fa";

// interface NavbarProps {
//   toggleSidebar: () => void;
// }

// const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
//   const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true);

//   const toggle = () => {
//     setIsMenuHidden(!isMenuHidden);
//     console.log("isMenuHidden:" ,isMenuHidden)
//   };

//   return (
//     <nav className="bg-gray-800  text-white flex justify-between items-center h-20 ">
//       {isMenuHidden &&
//       <div className="cursor-pointer block md:hidden top-20 fixed  w-10 right-0" onClick={toggle}>
//       <div className="flex flex-col items-center text-center justify-center py-3 px-5 hover:bg-gray-500 bg-gray-500 h-20 ">
//         <BiArrowToLeft/>
//       </div>
//       </div>}

//      {!isMenuHidden && 
//       <div
//       className={`flex  space-x-3 fixed md:relative left-0 md:left-auto top-20 mt-0.5 md:mt-0  md:top-auto bg-gray-800  ${
//         isMenuHidden ? " fixed md:relative " : ""
//       }`}
//     >
//       {/* <div className="text-xl">FocusMinder</div> */}
//       <div className="flex flex-col items-center py-3 px-5 hover:bg-gray-500 bg-gray-500 ">
//         <Link href={"tasks"}>
//           <FaTasks className="text-3xl mb-1" />
//           <span className="text-sm">Tasks</span>
//         </Link>
//       </div>
//       <div className="flex flex-col items-center py-3 px-5 hover:bg-gray-500">
//         <FaChartBar className="text-3xl mb-1" />
//         <span className="text-sm">Statistics</span>
//       </div>
//       <div className="flex flex-col items-center py-3 px-5 hover:bg-gray-500">
//         <FaCog className="text-3xl mb-1" />
//         <span className="text-sm">Settings</span>
//       </div>
//       <div className="flex flex-col items-center py-3 px-5 hover:bg-gray-500">
//         <FaVolumeUp className="text-3xl mb-1" />
//         <span className="text-sm">Sound</span>
//       </div>
//       <div className="flex flex-col items-center py-3 px-5 hover:bg-gray-500">
//         <FaRocket className="text-3xl mb-1" />
//         <span className="text-sm">Boost Productivity</span>
//       </div>
//     </div>
//      }

//       <button
//         className="text-white bg-blue-500 p-2 rounded-md md:hidden"
//         onClick={toggleSidebar}
//       >
//         <FaBars />
//       </button>
//     </nav>
//   );
// };

// export default Navbar;
'use client';

import { UserButton, useUser } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { BiArrowToLeft, BiArrowToRight } from "react-icons/bi";
import {
  FaBars,
  FaCaretLeft,
  FaChartBar,
  FaCog,
  FaRocket,
  FaTasks,
  FaVolumeUp,
} from "react-icons/fa";

interface NavbarProps {
  toggleSidebar: () => void;
  isMinimized: Boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar ,isMinimized}) => {
  const [isMenuHidden, setIsMenuHidden] = useState<boolean>(true);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isNotMobile, setIsNotMobile] = useState<boolean>(false);
  const {user ,isLoaded} = useUser();
  const [activeLink, setActiveLink] = useState<string>('');
  useEffect(() => {
    const handleResize = () => {
      setIsNotMobile(window.innerWidth > 760);
      setIsMenuHidden(!(window.innerWidth > 760))
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // useEffect(()=>{
  //   console.log("isNotMobile",isNotMobile)
  //   console.log("window.innerWidth",window.innerWidth )
  //   console.log("isNotMobile" , window.innerWidth > 760)
  // },[isNotMobile])

  const toggle = () => {
    setIsMenuHidden(!isMenuHidden);
    console.log("isMenuHidden:", isMenuHidden);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuHidden(true);
    }
  };



  useEffect(() => {
    if (!isMenuHidden) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuHidden]);

  useEffect(()=>{console.log("isMenuHidden",isMinimized)},[isMinimized])

  return (
    <nav className="bg-slate-300 text-slate-950 brightness-105 flex justify-between items-center h-20 border-b-2 border-slate-600">
      {isMenuHidden && (
        <div className="cursor-pointer block sm:w-0  md:hidden fixed top-20 right-0 w-10 bg-transparent " onClick={toggle}>
          <div className="flex flex-col items-center text-center text-6xl rounded-s-xl justify-center py-3 px-2  bg-gray-500 opacity-50 h-20">
          <FaCaretLeft />
          </div>
        </div>
      )}
       <button
        className="text-black bg-blue-500 p-2  m-2 rounded-md md:hidden"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button> 
     


      {(!isMenuHidden || isNotMobile ) && (
        <div
          ref={menuRef}
          className={`flex w-screen space-x-1 md:space-x-3 fixed md:relative left-0 md:left-auto top-20 mt-0.5 md:mt-0 md:top-auto opacity-75 bg-slate-300 overflow-x-auto `}
        >
          
            <Link  className={` flex flex-col items-center md:py-3 md:px-5 py-2 px-3 hover:bg-slate-400 ${activeLink === '/' ? 'bg-slate-400' : ''} `} onClick={() => setActiveLink('/')} href={"/"}>
              <FaTasks className="text-xl md:text-3xl  mb-0 md:mb-1" />
              <span className="text-sm">Tasks</span>
            </Link>
          
          <div className="flex flex-col items-center md:py-3 md:px-5 py-2 px-3 hover:bg-slate-400">
            <FaChartBar className="text-xl md:text-3xl  mb-0 md:mb-1" />
            <span className="text-sm">Statistics</span>
          </div>
          <Link onClick={() => setActiveLink('settings')} href={'/settings'} className={`flex flex-col items-center md:py-3 md:px-5 py-2 px-3 hover:bg-slate-400 cursor-pointer ${activeLink === 'settings' ? 'bg-slate-400' : ''}`}>
            <FaCog className="text-xl md:text-3xl  mb-0 md:mb-1" />
            <span className="text-sm">Settings</span>
          </Link>
          <div className="flex flex-col items-center md:py-3 md:px-5 py-2 px-3 hover:bg-slate-400">
            <FaVolumeUp className="text-xl md:text-3xl  mb-0 md:mb-1" />
            <span className="text-sm">Sound</span>
          </div>
          <div className="flex flex-col items-center md:py-3 md:px-5 py-2 px-3 hover:bg-slate-400">
            <FaRocket className="text-xl md:text-3xl mb-0 md:mb-1" />
            <span className="text-sm">Boost Productivity</span>
          </div>
         
        </div>
      )}
      {isLoaded && user && <div className={`text-black  fixed   mt-4 md:mt-0  justify-end  items-end ${isMinimized ? ' right-4 md:right-24'  : ' right-4 md:right-60' }   `}><UserButton afterSignOutUrl="/"/></div>}

     
    
    
    </nav>
  );
};

export default Navbar;
