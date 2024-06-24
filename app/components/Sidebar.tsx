"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaBook,
  FaCalendarAlt,
  FaCalendarDay,
  FaClock,
  FaGraduationCap,
  FaList,
  FaPlus,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import { useFilter } from "../context/FilterContext";
import { useCategories } from "../context/CategoriesContext";

interface SidebarProps {
  isHidden: boolean;
  toggleSidebar: () => void;
  isMinimized: boolean;
  toggleMinimize: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  isHidden,
  toggleSidebar,
  isMinimized,
  toggleMinimize,
}) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { filter, setFilter } = useFilter();
  const { categories } = useCategories();
  const {selectedCategory, setSelectedCategory } = useCategories();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    console.log(isHidden, "ishidden");
  }, [isHidden]);

  useEffect(() => {
    if (!isHidden) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isHidden]);

  return (
    <div
      ref={menuRef}
      className={`fixed md:relative top-0 left-0 h-screen ease-in-out  transition-all duration-1000 md:duration-300 border-r-2 border-gray-400 md:border-none  ${
        isHidden && isMobile
          ? "w-0"
          : !isMobile && isMinimized
          ? "w-20  "
          : "w-56"
      } bg-gray-800 text-white ${isHidden && isMobile ? "hidden" : ""}`}
    >
      <div className="p-4 flex justify-between">
        {!isMobile && (
          <button
            className="text-white bg-gray-700 p-2 rounded-md"
            onClick={toggleMinimize}
          >
            {isMinimized ? <FaBars /> : <FaTimes />}
          </button>
        )}
        {isMobile && (
          <button
            className="text-white  bg-red-500 p-2 rounded-md mt-2"
            onClick={toggleSidebar}
          >
            {isHidden ? <FaBars /> : <FaTimes />}
          </button>
        )}
        {!isMobile && !isMinimized && (
          <span className="text-sm mt-2">FocusMinder</span>
          // <Image
          //   src="/focusminder-removebg-preview.png"
          //   width={30}
          //   height={30}
          //   alt="Picture of the App icon"
          // />
        )}
      </div>
      {
        <div className="block">
          <ul
            className={`space-y-2 flex flex-col ${
              isMinimized && !isMobile ? "items-center" : "items-stretch "
            }`}
          >
            {/* <li className="px-4 py-2 h-15 h-15 flex items-center  hover:bg-gray-700 cursor-text">
              <FaSearch className="mr-2" /> {(isMobile || !isMinimized) && "Search"}
            </li> */}
            <li className="flex items-center hover:bg-gray-700 cursor-text">
              <div className="px-4 py-2 h-15 flex items-center flex-1">
                <FaSearch className="mr-2 text-white" />
                <input
                  type="text"
                  placeholder={isMobile || !isMinimized ? "Search" : ""}
                  className="bg-transparent focus:outline-none flex-1 text-white placeholder-gray-400"
                />
              </div>
            </li>
            <hr />
            {/* <li className="px-4 py-2 h-15 flex items-center hover:bg-gray-700 bg-gray-700" >
              <FaCalendarDay className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "Today"}
            </li> */}
            <li
              className={`px-4 py-2 h-15 flex items-center hover:bg-gray-700 ${
                filter === "today" ? "bg-gray-700" : ""
              }`}
              onClick={() => setFilter("today")}
            >
              <FaCalendarDay className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "Today"}
            </li>
            <li
              className={`px-4 cursor-pointer py-2 h-15 flex items-center hover:bg-gray-700 ${
                filter === "upcoming" ? "bg-gray-700" : ""
              }`}
              onClick={() => setFilter("upcoming")}
            >
              <FaCalendarAlt className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "Upcoming"}
            </li>
            <li
              className={`px-4 cursor-pointer py-2 h-15 flex items-center hover:bg-gray-700 ${
                filter === "all-time" ? "bg-gray-700" : ""
              }`}
              onClick={() => setFilter("all-time")}
            >
              <FaList className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "All Time"}
            </li>
            <li
              className={`px-4 cursor-pointer py-2 h-15 flex items-center hover:bg-gray-700 ${
                filter === "someday" ? "bg-gray-700" : ""
              }`}
              onClick={() => setFilter("someday")}
            >
              <FaClock className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "Someday"}
            </li>
            <li className="px-4 py-2 h-15 flex items-center hover:bg-gray-700">
              <FaBook className="mr-2" />{" "}
              {(isMobile || !isMinimized) && "Logbook"}
            </li>
          </ul>
          <hr />
          {/* <ul className="space-y-4 ">
            <li
              className={`py-4   flex flex-col justify-center ${
                isMinimized && !isMobile ? "items-center" : "items-stretch "
              } `}
            >
              <div className="inline-block h-15 bg-gray-700 px-4 py-2 hover:bg-gray-700">
                <FaGraduationCap className="mr-2 inline-block" />{" "}
                <span className="inline-block">
                  {" "}
                  {(isMobile || !isMinimized) && "YT Channel"}
                </span>
              </div>
              <div className="inline-block h-15 px-4 py-2 hover:bg-gray-700">
                <FaGraduationCap className="mr-2 inline-block" />{" "}
                {(isMobile || !isMinimized) && "University"}
              </div>
              <div className="inline-block  h-15 px-4 py-2 hover:bg-gray-700">
                <FaGraduationCap className="mr-2 inline-block" />{" "}
                {(isMobile || !isMinimized) && "Main"}
              </div>
            </li>
          </ul> */}

          <ul className=" ">
            {categories.map((category, index) => (
              <li
                key={index}
                className={`py-0 mt-3 flex flex-col justify-center ${
                  isMinimized && !isMobile ? "items-center" : "items-stretch "
                } `}  onClick={() => setSelectedCategory(category)}
              >
                <div className={`inline-block h-10 px-4 py-2 hover:bg-gray-700 ${category === selectedCategory && 'bg-gray-700' } `}>
                  <FaGraduationCap className="mr-2 inline-block" />{" "}
                  {(isMobile || !isMinimized) && category}
                </div>
                

              </li>

            ))}
            <div onClick={() => setSelectedCategory('')} className={`inline-block h-10 ${isMobile || isMinimized && 'flex justify-center items-center '} w-full px-4 py-2 mt-2 hover:bg-gray-700 ${'' === selectedCategory && 'bg-gray-700' } `}>
                  <FaGraduationCap className="mr-2 inline-block" />{" "}
                  {(isMobile || !isMinimized) && 'All Projects'}
                </div>
          </ul>
        </div>
      }
      <div className="absolute bottom-4 h-15 left-4 right-4">
        <button className="text-white  p-2 rounded-md flex items-center justify-center w-full">
          <FaPlus className="mr-2" /> {!isMinimized && "Add a project"}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
