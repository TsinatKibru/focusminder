// 'use client';

// import { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Nabar';
// import Tasks from './components/Tasks';

// const Home: React.FC = () => {
//   const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);

//   const toggleSidebar = () => {
//     setIsSidebarHidden(!isSidebarHidden);
//   };
//   const sampleTasks = {
//     todo: [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }],
//     nextAction: [{ id: 3, name: 'Task 3' }],
//     doing: [{ id: 4, name: 'Task 4' }],
//     done: [{ id: 5, name: 'Task 5' }],
//   };
// return (
// <div className="min-h-screen bg-gray-200 p-8">
//   <Tasks completed="3/5" tasks={sampleTasks} />
// </div>

//   // return (
//   //   <div className="flex">
//   //     <Sidebar isHidden={isSidebarHidden} toggleSidebar={toggleSidebar} />
//   //     <div className="flex-1">
//   //       <Navbar toggleSidebar={toggleSidebar} />
//   //       <div className="p-10">
//   //         <h1 className="text-2xl">Main Content</h1>
//   //       </div>
//   //     </div>
//   //   </div>
//   );
// };

// export default Home;
// // import React, { useState } from 'react';
// // import Column from './components/Column';
// // import { DragDropContext, DropResult } from 'react-beautiful-dnd';
// // import { styled } from './stitches.config';

// // const StyledColumns = styled('div', {
// //   display: 'grid',
// //   gridTemplateColumns: '1fr 1fr 1fr 1fr',
// //   margin: '10vh auto',
// //   width: '80%',
// //   height: '80vh',
// //   gap: '8px'
// // });

// // const App = () => {
// //   const initialColumns = {
// //     todo: {
// //       id: 'todo',
// //       title: 'To Do',
// //       list: ['Task 1', 'Task 2', 'Task 3']
// //     },
// //     nextAction: {
// //       id: 'nextAction',
// //       title: 'Next Action',
// //       list: []
// //     },
// //     doing: {
// //       id: 'doing',
// //       title: 'Doing',
// //       list: []
// //     },
// //     done: {
// //       id: 'done',
// //       title: 'Done',
// //       list: []
// //     }
// //   };

// //   const [columns, setColumns] = useState(initialColumns);

// //   const onDragEnd = ({ source, destination }: DropResult) => {
// //     if (!destination) return;

// //     const sourceCol = columns[source.droppableId];
// //     const destCol = columns[destination.droppableId];

// //     if (sourceCol === destCol) {
// //       const updatedList = Array.from(sourceCol.list);
// //       const [movedTask] = updatedList.splice(source.index, 1);
// //       updatedList.splice(destination.index, 0, movedTask);

// //       const newCol = {
// //         ...sourceCol,
// //         list: updatedList
// //       };

// //       setColumns(prev => ({ ...prev, [newCol.id]: newCol }));
// //     } else {
// //       const sourceList = Array.from(sourceCol.list);
// //       const destList = Array.from(destCol.list);
// //       const [movedTask] = sourceList.splice(source.index, 1);
// //       destList.splice(destination.index, 0, movedTask);

// //       setColumns(prev => ({
// //         ...prev,
// //         [sourceCol.id]: { ...sourceCol, list: sourceList },
// //         [destCol.id]: { ...destCol, list: destList }
// //       }));
// //     }
// //   };

// //   return (
// //     <DragDropContext onDragEnd={onDragEnd}>
// //       <StyledColumns>
// //         {Object.values(columns).map(col => (
// //           <Column key={col.id} col={col} />
// //         ))}
// //       </StyledColumns>
// //     </DragDropContext>
// //   );
// // };

// // export default App;

// 'use client';

// import { useEffect, useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import Sidebar from './components/Sidebar';
// import Navbar from './components/Nabar';
// import Tasks from './components/Tasks';

// const fetchTasks = async () => {
//   const response = await fetch('/api/tasks');
//   const data = await response.json();
//   return data;
// };

// const Home: React.FC = () => {
//   const [isSidebarHidden, setIsSidebarHidden] = useState<boolean>(false);
//   const [tasks, setTasks] = useState([]);

//   useEffect(() => {
//     const getTasks = async () => {
//       const data = await fetchTasks();
//       setTasks(data);
//     };

//     getTasks();
//   }, []);

//   useEffect(() => {
//     console.log("tasks",tasks);
   
//   }, [tasks]);

//   const toggleSidebar = () => {
//     setIsSidebarHidden(!isSidebarHidden);
//   };
//   const sampleTasks = {
//     todo: [
//       {
//         id: 1,
//         name: "Task 1",
//         duedate: "2024-07-01",
//         note: "This is task 1",
//         doitsomeday: false,
//         project: "Project A",
//         category: "todo",
//       },
//       {
//         id: 2,
//         name: "Task 2",
//         duedate: "2024-07-02",
//         note: "This is task 2",
//         doitsomeday: false,
//         project: "Project A",
//         category: "todo",
//       },
//     ],
//     nextAction: [
//       {
//         id: 3,
//         name: "Task 3",
//         duedate: "2024-07-03",
//         note: "This is task 3",
//         doitsomeday: false,
//         project: "Project B",
//         category: "nextAction",
//       },
//     ],
//     doing: [
//       {
//         id: 4,
//         name: "Task 4",
//         duedate: "2024-07-04",
//         note: "This is task 4",
//         doitsomeday: false,
//         project: "Project C",
//         category: "doing",
//       },
//     ],
//     done: [
//       {
//         id: 5,
//         name: "Task 5",
//         duedate: "2024-07-05",
//         note: "This is task 5",
//         doitsomeday: false,
//         project: "Project D",
//         category: "done",
//       },
//     ],
//   };
  

//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="min-h-screen bg-slate-200 p-8 ">
//         <Tasks completed="3/5" tasks={sampleTasks} />
//       </div>
// {/* 
//       <div className="relative min-h-screen p-8">
//         <Image
//           src={'/pomodoroappbg1.jpg'}
//           alt="Pomodoro Background"
//           layout="fill"
//           objectFit="cover"
//           className="z-0"
//         />
//         <div className="relative z-10 bg-white/80 rounded-lg shadow-lg p-8">
//           <Tasks completed="3/5" tasks={sampleTasks} />
//         </div>
//       </div> */}
//     </DndProvider>
//   );
// };

// export default Home;

// "use client";

// import React, { useState, useEffect } from "react";
// import { DndProvider } from "react-dnd";
// import { HTML5Backend } from "react-dnd-html5-backend";
// import { FormattedTasks, Task } from "./components/Types";
// import formatTasks from "./components/formatTasks";
// import Tasks from "./components/Tasks";
// import Loading from "./components/Loading";
// import { useFilter } from "./context/FilterContext";
// import { useCategories } from "./context/CategoriesContext";

// const Home: React.FC = () => {
//   const [tasks, setTasks] = useState<FormattedTasks>({
//     todo: [],
//     nextAction: [],
//     doing: [],
//     done: [],
//   });
//   const [loading, setLoading] = useState(true);
//   const { filter } = useFilter();
//   const { setCategories } = useCategories();
//   const { selectedCategory} = useCategories();


//   useEffect(() => {
//     const fetchAndFormatTasks = async () => {
//       try {
//         const data = await fetchTasks();
//         console.log("data",data);
//         const formattedTasks = formatTasks(data);
//         console.log("formattedTasks",formattedTasks);
//         setTasks(formattedTasks);
//         const allProjects: string[] = [];

//         // Helper function to add unique projects
//         const addUniqueProjects = (taskList: Task[]) => {
//           taskList.forEach(task => {
//             if (!allProjects.includes(task.project)) {
//               allProjects.push(task.project);
//             }
//           });
//         };
  
//         addUniqueProjects(formattedTasks.todo);
//         addUniqueProjects(formattedTasks.nextAction);
//         addUniqueProjects(formattedTasks.doing);
//         addUniqueProjects(formattedTasks.done);
  
//         setCategories(allProjects);
//       } catch (error) {
//         console.error("Error fetching tasks:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAndFormatTasks();
//   }, [setCategories]);

//   const fetchTasks = async () => {
//     setLoading(true)
//     const response = await fetch("/api/tasks");
//     const data = await response.json();
//     setLoading(false)
//     return data;
//   };

//   const filterTasks = (tasks: FormattedTasks, filter: string): FormattedTasks => {
//     const today = new Date().toISOString();

//     console.log("today",today)
//     switch (filter) {
//       case "today":
//         return {
//           todo: tasks.todo.filter((task) => {selectedCategory === '' ? task.duedate === today : (task.duedate === today && task.project === selectedCategory )}),
//           nextAction: tasks.nextAction.filter((task) => task.duedate === today),
//           doing: tasks.doing.filter((task) => task.duedate === today),
//           done: tasks.done.filter((task) => task.duedate === today),
//         };
//       case "upcoming":
//         return {
//           todo: tasks.todo.filter((task) => new Date(task.duedate) > new Date(today)),
//           nextAction: tasks.nextAction.filter((task) => new Date(task.duedate) > new Date(today)),
//           doing: tasks.doing.filter((task) => new Date(task.duedate) > new Date(today)),
//           done: tasks.done.filter((task) => new Date(task.duedate) > new Date(today)),
//         };
//       case "all-time":
//         return tasks;
//       case "someday":
//         return {
//           todo: tasks.todo.filter((task) => task.doitsomeday === true),
//           nextAction: tasks.nextAction.filter((task) =>  task.doitsomeday === true),
//           doing: tasks.doing.filter((task) =>  task.doitsomeday === true),
//           done: tasks.done.filter((task) =>  task.doitsomeday === true),
//         };
//         return tasks;
//       case "logbook":
//         // Implement the logic for "logbook" filter
//         return tasks;
//       default:
//         return tasks;
//     }
//   };

//   const filteredTasks = filterTasks(tasks, filter);

//   useEffect(()=>{console.log("filter",filter , filteredTasks)},[filter])

//   const completedCount = tasks.done.length;
//   const totalCount = Object.values(tasks).reduce((acc, category) => acc + category.length, 0);


//   return (
//     <DndProvider backend={HTML5Backend}>
//       <div className="min-h-screen bg-slate-200 p-8">
//         {loading ? (
//           <Loading/> // You can replace this with a more sophisticated loading spinner if needed
//         ) : (
//           <Tasks tasks={filteredTasks} setTasks={setTasks} fetchTasks={fetchTasks} completed={`${completedCount}/${totalCount}`} />
//         )}
//       </div>
//     </DndProvider>
//   );
// };

// export default Home;
"use client";

import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { FormattedTasks, Task } from "./components/Types";
import formatTasks from "./components/formatTasks";
import Tasks from "./components/Tasks";
import Loading from "./components/Loading";
import { useFilter } from "./context/FilterContext";
import { useCategories } from "./context/CategoriesContext";
import { TouchBackend } from "react-dnd-touch-backend";
import { usePomodoro } from "./context/PomodoroContext";
import { fetchPomodoroTime } from "./actions/taskActions";

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<FormattedTasks>({
    todo: [],
    nextAction: [],
    doing: [],
    done: [],
  });
  const [loading, setLoading] = useState(true);
  const { filter } = useFilter();
  const { setCategories, selectedCategory } = useCategories();
  const { setPomodoroTime } = usePomodoro();

  useEffect(() => {
    const fetchAndFormatTasks = async () => {
      try {
        const data = await fetchTasks();
        console.log("data", data);
        const formattedTasks = formatTasks(data);
        console.log("formattedTasks", formattedTasks);
        setTasks(formattedTasks);

        const allProjects: string[] = [];

        // Helper function to add unique projects
        const addUniqueProjects = (taskList: Task[]) => {
          taskList.forEach(task => {
            if (!allProjects.includes(task.project)) {
              allProjects.push(task.project);
            }
          });
        };

        addUniqueProjects(formattedTasks.todo);
        addUniqueProjects(formattedTasks.nextAction);
        addUniqueProjects(formattedTasks.doing);
        addUniqueProjects(formattedTasks.done);

        setCategories(allProjects);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndFormatTasks();
  }, [setCategories]);

  const fetchTasks = async () => {
    setLoading(true);
    const response = await fetch("/api/tasks");
    const data = await response.json();
    setLoading(false);
    return data;
  };

  useEffect(() => {
    const getPomodoroTime = async () => {
      try {
        const pomodoroTime = await fetchPomodoroTime();
        setPomodoroTime(pomodoroTime);
      } catch (error) {
        console.error("Error fetching Pomodoro time in Home:", error);
      }
    };

    getPomodoroTime();
  }, [setPomodoroTime]);

  const filterTasks = (tasks: FormattedTasks, filter: string): FormattedTasks => {
    const today = new Date().toISOString().split("T")[0];
    console.log("todaydate",today)
    console.log("todo",tasks.todo)

    const filterByCategory = (task: Task) => {
      return selectedCategory === '' || task.project === selectedCategory;
    };

    switch (filter) {
      case "today":
        return {
          todo: tasks.todo.filter(task => task.doitsomeday === false && task.duedate?.split("T")[0] === today && filterByCategory(task)),
          nextAction: tasks.nextAction.filter(task => task.doitsomeday === false && task.duedate?.split("T")[0] === today && filterByCategory(task)),
          doing: tasks.doing.filter(task => task.doitsomeday === false && task.duedate?.split("T")[0] === today && filterByCategory(task)),
          done: tasks.done.filter(task => task.doitsomeday === false && task.duedate?.split("T")[0] === today && filterByCategory(task)),
        };
      case "upcoming":
        return {
          todo: tasks.todo.filter(task => new Date(task.duedate) > new Date(today) && filterByCategory(task)),
          nextAction: tasks.nextAction.filter(task => new Date(task.duedate) > new Date(today) && filterByCategory(task)),
          doing: tasks.doing.filter(task => new Date(task.duedate) > new Date(today) && filterByCategory(task)),
          done: tasks.done.filter(task => new Date(task.duedate) > new Date(today) && filterByCategory(task)),
        };
      case "all-time":
        return {
          todo: tasks.todo.filter(filterByCategory),
          nextAction: tasks.nextAction.filter(filterByCategory),
          doing: tasks.doing.filter(filterByCategory),
          done: tasks.done.filter(filterByCategory),
        };
      case "someday":
        return {
          todo: tasks.todo.filter(task => task.doitsomeday === true && filterByCategory(task)),
          nextAction: tasks.nextAction.filter(task => task.doitsomeday === true && filterByCategory(task)),
          doing: tasks.doing.filter(task => task.doitsomeday === true && filterByCategory(task)),
          done: tasks.done.filter(task => task.doitsomeday === true && filterByCategory(task)),
        };
      case "logbook":
        // Implement the logic for "logbook" filter
        return tasks;
      default:
        return tasks;
    }
  };

  const filteredTasks = filterTasks(tasks, filter);

  // useEffect(() => {
  //   console.log("filter", filter, filteredTasks);
  // }, [filter, filteredTasks]);

  const completedCount = filteredTasks.done.length;
  const totalCount = Object.values(filteredTasks).reduce((acc, category) => acc + category.length, 0);
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  return (
    <DndProvider backend={isTouchDevice ? TouchBackend : HTML5Backend}>
      <div className="min-h-screen bg-slate-200 p-8">
        {loading ? (
          <Loading />
        ) : (
          <Tasks
            tasks={filteredTasks}
            setTasks={setTasks}
            fetchTasks={fetchTasks}
            completed={`${completedCount}/${totalCount}`}
          />
        )}
      </div>
    </DndProvider>
  );
};

export default Home;
