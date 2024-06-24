// "use client";

// import React, { useState } from "react";
// import { Task } from "./Types";
// import { BsToggle2On } from "react-icons/bs";
// import { BsToggle2Off } from "react-icons/bs";

// import { BsToggleOff } from "react-icons/bs";
// import { BsToggleOn } from "react-icons/bs";
// import { CgToggleOn } from "react-icons/cg";
// import { CgToggleOff } from "react-icons/cg";

// interface CreateTaskProps {
//   title: "todo" | "next action" | "doing" | "done";
//   onSave: (task: Task) => void;
//   onCancel: () => void;
// }

// const CreateTask: React.FC<CreateTaskProps> = ({ title, onSave, onCancel }) => {
//   const [taskName, setTaskName] = useState<string>("");
//   const [dueDate, setDueDate] = useState<string>("");
//   const [note, setNote] = useState<string>("");
//   const [someday, setSomeday] = useState<boolean>(false);



//   const handleSave = () => {
//     const newTask: Task = { name: taskName, dueDate, note, someday };
//     onSave(newTask);
//   };

//   return (
//     <div className={`p-4 -mr-1 md:-mr-7 bg-slate-300  shadow-inner shadow-slate-400  h-148 rounded-md`}>
//       <h2 className="text-xl font-semibold mb-4">Add task - {title}</h2>
//       <form action={createTask}>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Task Name:</label>
//           <input
//             type="text"
//             value={taskName}
//             placeholder="Enter Task name"
//             onChange={(e) => setTaskName(e.target.value)}
//             className="w-full p-2 border border-slate-500 rounded-md  bg-slate-200"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700  mb-2">Due Date:</label>
//           <input
//             type="date"
//             value={dueDate}
//             onChange={(e) => setDueDate(e.target.value)}
//             className="w-full p-2 border border-slate-500 rounded-md  bg-slate-200"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Note:</label>
//           <textarea
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//             className="w-full p-2 border border-slate-500 rounded-md  bg-slate-200"
//           ></textarea>
//         </div>
//         <div className="mb-4 flex items-center">
//           <label className="text-gray-700 mr-2">Do it someday:</label>
//           <div onClick={(e) => setSomeday(!someday)}>
//             {someday ? (
//               <BsToggleOff className="text-2xl" />
//             ) : (
//               <BsToggleOn className="text-2xl" />
//             )}
//           </div>
//         </div>
//         <div className="flex justify-center space-x-4">
//           <button
//             type="button"
//             onClick={handleSave}
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
// app/components/CreateTask.tsx
// import React from "react";
// import { Task } from "./Types";
// import { BsToggleOn, BsToggleOff } from "react-icons/bs";
// import { createTask } from "../actions/taskActions"; // Import the server action

// interface CreateTaskProps {
//   title: "todo" | "next action" | "doing" | "done";
//   onCancel: () => void;
// }

// const CreateTask: React.FC<CreateTaskProps> = ({ title, onCancel }) => {
//   return (
//     <div className="p-4 -mr-1 md:-mr-7 bg-slate-300 shadow-inner shadow-slate-400 h-148 rounded-md">
//       <h2 className="text-xl font-semibold mb-4">Add task - {title}</h2>
//       <form action={createTask}>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Task Name:</label>
//           <input
//             type="text"
//             name="taskName"
//             placeholder="Enter Task name"
//             className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Due Date:</label>
//           <input
//              type="datetime-local"
//             name="dueDate"
//             className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Note:</label>
//           <textarea
//             name="note"
//             className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 mb-2">Project:</label>
//           <input
//             type="text"
//             name="project"
//             placeholder="Enter project name"
//             className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
//           />
//         </div>
//         <div className="mb-4 flex items-center">
//           <label className="text-gray-700 mr-2">Do it someday:</label>
//           <input type="hidden" name="someday" value="false" />
//           <input type="checkbox" name="someday" value="true" />
//         </div>
//         <div className="flex justify-center space-x-4">
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded-md"
//           >
//             Save
//           </button>
//           <button
//             type="button"
//             onClick={onCancel}
//             className="bg-gray-500 text-white px-4 py-2 rounded-md"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateTask;
// CreateTask.tsx
import React from "react";
import { createTask } from "../actions/taskActions"; // Import the server action
import { Task } from "./Types";
import formatTasks from "./formatTasks";

interface CreateTaskProps {
  title: "todo" | "nextAction" | "doing" | "done";
  onCancel: () => void;
  setTasks: React.Dispatch<React.SetStateAction<{
    todo: Task[];
    nextAction: Task[];
    doing: Task[];
    done: Task[];
  }>>;
  fetchTasks: () => Promise<any>;
}

const CreateTask: React.FC<CreateTaskProps> = ({ title, onCancel ,setTasks ,fetchTasks}) => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    const taskName = formData.get("taskName") as string;
    const dueDate = formData.get("dueDate") as string || null; // Ensure dueDate is a string
    const note = formData.get("note") as string || ""; // Default note to an empty string if not provided
    const doitsomeday = formData.get("someday") === "true";
    const project = formData.get("project") as string;

    console.log(doitsomeday)
    
    if (!taskName) {
      return;
    }
    const formattedDueDate = dueDate ? new Date(dueDate).toISOString() : new Date().toISOString();
    
  
    try {
      const response =  await createTask({
        taskName,
        dueDate: formattedDueDate, // Pass formattedDueDate instead of dueDate
        note,
        doitsomeday,
        project,
        category: title,
      });

       if (response?.success) {
        const newTask = response.task;
      // window.location.reload();
      await fetchTasks();
      const data = await fetchTasks();
        console.log("data",data);
        const formattedTasks = formatTasks(data);
        console.log("formattedTasks",formattedTasks);
        setTasks(formattedTasks);
      
      console.log('Task created:', newTask);

    } else {
      console.error('Failed to create task:');
    }
      onCancel()
      // Optionally handle success or navigate to another page
    } catch (error) {
      console.error("Failed to create task:", error);
      // Handle error (e.g., show error message)
    }
  };

  


  return (
    <div className="p-4 -mr-1 md:-mr-7 bg-slate-300 shadow-inner shadow-slate-400 h-148 rounded-md">
      <h2 className="text-xl font-semibold mb-4">Add task - {title}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Task Name:</label>
          <input
            type="text"
            name="taskName"
            placeholder="Enter Task name"
            className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Due Date:</label>
          <input
            type="datetime-local" // Use datetime-local input type for user input
            name="dueDate"
            className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Note:</label>
          <textarea
            name="note"
            className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Project:</label>
          <input
            type="text"
            name="project"
            placeholder="Enter project name"
            className="w-full p-2 border border-slate-500 rounded-md bg-slate-200"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="text-gray-700 mr-2">Do it someday:</label>
          {/* <input type="hidden" name="someday" value="false" /> */}
          <input type="checkbox" name="someday" value="true" />
        </div>
        <div className="flex justify-center space-x-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
