'use client';

import React, { useEffect, useState } from "react";
import { Task } from "./Types";
import DroppableColumn from "./DroppableColumn";
import Link from "next/link";
import { CgAdd } from "react-icons/cg";
import dynamic from 'next/dynamic';
import { updateTaskCategory } from "../actions/taskActions";
import { useFilter } from "../context/FilterContext";
import { useCategories } from "../context/CategoriesContext";
import formatTasks from "./formatTasks";

const CreateTask = dynamic(() => import("./CreateTask"), { ssr: true });

type Category = "todo" | "nextAction" | "doing" | "done";

interface TasksProps {
  completed?: string;
  tasks?: {
    todo: Task[];
    nextAction: Task[];
    doing: Task[];
    done: Task[];
  };
  setTasks: React.Dispatch<React.SetStateAction<{
    todo: Task[];
    nextAction: Task[];
    doing: Task[];
    done: Task[];
  }>>;
  fetchTasks: () => Promise<any>;
}

const Tasks: React.FC<TasksProps> = ({
  
  completed ,
  tasks = {
    todo: [],
    nextAction: [],
    doing: [],
    done: [],
  },
  setTasks,
  fetchTasks,
}) => {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [currentTasks, setCurrentTasks] = useState(tasks);
  const { filter } = useFilter();
  const {  selectedCategory } = useCategories();

  const handleSave = (task: Task) => {
    console.log("Task saved:", task);
    // Implement saving logic here
    // You can add the new task to the appropriate category
  };

  const handleCancel = () => {
    console.log("Task creation canceled");
    setShowCreateTask(false); // Close the CreateTask component
    setCurrentTasks(tasks)
  };

  const toggleCreateTask = () => {
    setShowCreateTask(!showCreateTask); // Toggle the visibility of CreateTask
  };

  const handleDrop =  (task: Task, newCategory: Category) => {
    console.log("task",task ,"newCategory",newCategory )
      updateTaskCategory(task.id , newCategory);
 
    setCurrentTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };

      // Remove the task from its previous category
      Object.keys(updatedTasks).forEach((category) => {
        updatedTasks[category as Category] = updatedTasks[
          category as Category
        ].filter((t) => t.id !== task.id);
      });
      

      // Add the task to the new category
      updatedTasks[newCategory].push(task);

     
      

      return updatedTasks;
    });
    setTasks((prevTasks) => {
        const updatedTasks = { ...prevTasks };

        // Remove the task from its previous category
        Object.keys(updatedTasks).forEach((category) => {
          updatedTasks[category as Category] = updatedTasks[
            category as Category
          ].filter((t) => t.id !== task.id);
        });
        

        // Add the task to the new category
        updatedTasks[newCategory].push(task);

      
        

        return updatedTasks;
      });
      
  };

  const handleTaskDone = (task: Task) => {
    handleDrop(task, 'done'); // Move the task to the "done" category
  };

  useEffect(()=>{console.log(tasks)},[tasks])

  useEffect(()=>{setCurrentTasks(tasks)},[filter,selectedCategory])
  

  return (
    <div className="text-slate-950 ">
      <div
        className={`flex justify-around items-center mb-4 bg-slate-300 p-4 rounded-md shadow-inner shadow-slate-400  ${
          showCreateTask && "-mr-0 md:-ml-5"
        }`}
      >
        <h1 className="text-2xl">{filter ? filter.toUpperCase() : "ALL TIME"}</h1>
        <span className="text-gray-600">Completed ({completed})</span>
      </div>
      <Link href={"#createtask"} className="block md:hidden">
        <button
          onClick={toggleCreateTask}
          className="text-black  p-2 bg-gray-300 mb-2 rounded-md w-full bg"
        >
          Create task
        </button>
      </Link>
     <div className={`p-5 rounded-xl shadow-inner shadow-slate-200 bg-slate-300 fixed  ${showCreateTask ? 'right-96' : 'right-10'}  bottom-9`}>
     <button
        onClick={toggleCreateTask}
        className={`text-blue-500 font-mono  text-start text-lg      hidden md:block `}
      >
     <div> <span className="inline-block  text-4xl  " title="New Task"> <CgAdd/></span> </div>
      </button>
     </div>
      <div className="flex flex-col md:flex-row ">
        <div 
          className={`grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 w-full h-full ${
            showCreateTask && "-mr-0 md:-ml-5"
          }`}
        >
          {(["todo", "nextAction", "doing", "done"] as Category[]).map(
            (category) => (
              <DroppableColumn
                key={category}
                category={category}
                tasks={currentTasks[category]}
                onDrop={handleDrop}
                onTaskDone={handleTaskDone} // Pass the onTaskDone callback
              />
            )
          )}
        </div>
        {showCreateTask && (
          <div
            id="createtask"
            className="ml-0 md:ml-2 mt-5 md:mt-0 rounded-md shadow-md w-full md:w-108"
          >
            <CreateTask
              title="todo"
              onCancel={handleCancel}
              setTasks={setTasks}
              fetchTasks={fetchTasks}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
