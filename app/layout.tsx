// "use client";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import { useState } from "react";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Nabar";
// import {
//   ClerkProvider,
//   SignInButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from "@clerk/nextjs";

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
//   const [isMinimized, setIsMinimized] = useState<boolean>(false);

//   const toggleSidebar = () => {
//     setIsSidebarHidden(!isSidebarHidden);
//   };
//   const toggleMinimize = () => {
//     setIsMinimized(!isMinimized);
//   };

//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={inter.className}>
//           {/* <div className="flex   h-screen ">
//           <div className=" h-screen  fixed  top-0">
//             {" "}
//             <Sidebar isHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />
//           </div>
//           <div className="flex-1">
//             <div className="  fixed z-20 h-20 w-full  top-0">
//               {" "}
//               <Navbar toggleSidebar={toggleSidebar} />
//             </div>
//             <div>{children}</div>
//           </div>
//         </div> */}
//           <div className="flex h-screen">
//             <div className="h-screen fixed z-30 top-0  transition-all duration-300">
//               <Sidebar
//                 isHidden={isSidebarHidden}
//                 toggleSidebar={toggleSidebar}
//                 isMinimized={isMinimized}
//                 toggleMinimize={toggleMinimize}
//               />
//             </div>
//             <div
//               className={`flex-1 sm:ml-0  ${
//                 isMinimized ? " ml-0 md:ml-[80px]" : "ml-0 md:ml-[220px]"
//               } transition-all duration-300`}
//             >
//               {" "}
//               {/* Adjust margin to account for sidebar width */}
//               <div className={`fixed z-20  h-20 w-full top-0`}>
//                 <Navbar toggleSidebar={toggleSidebar} />
//               </div>
//               <div className="pt-20">{children}</div>{" "}
//               {/* Add padding to account for fixed navbar */}
//             </div>
//           </div>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
"use client";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Nabar";
import { FilterProvider } from "./context/FilterContext";
import { CategoriesProvider } from "./context/CategoriesContext";
import { PomodoroProvider } from "./context/PomodoroContext";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);
  const [filter, setFilter] = useState<string>("all-time");


  const toggleSidebar = () => {
    setIsSidebarHidden(!isSidebarHidden);
  };
  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <ClerkProvider>
       <FilterProvider>
        <CategoriesProvider>
        <PomodoroProvider>

        <html lang="en">
        <body className={inter.className}>
          <SignedIn>
            <div className="flex h-screen">
              <div className="h-screen fixed z-30 top-0 transition-all duration-300">
                <Sidebar
                  isHidden={isSidebarHidden}
                  toggleSidebar={toggleSidebar}
                  isMinimized={isMinimized}
                  toggleMinimize={toggleMinimize}
                />
              </div>
              <div
                className={`flex-1 sm:ml-0 ${
                  isMinimized ? " ml-0 md:ml-[80px]" : "ml-0 md:ml-[220px]"
                } transition-all duration-300`}
              >
                <div className={`fixed z-20 h-20 w-full top-0`}>
                  <Navbar toggleSidebar={toggleSidebar}  isMinimized={isMinimized} />
                </div>
                <div className="pt-20" >{children}</div>
              </div>
            </div>
          </SignedIn>
          <SignedOut>
            <RedirectToSignIn />
          </SignedOut>
        </body>
      </html>
          
           </PomodoroProvider>
     

        </CategoriesProvider>

  
       </FilterProvider>
    </ClerkProvider>
  );
}
