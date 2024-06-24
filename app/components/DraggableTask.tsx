// // import React, { useRef } from 'react';
// // import { useDrag } from 'react-dnd';
// // import { Task } from './Types';
// // import { ItemTypes } from './Constants';

// // interface DraggableTaskProps {
// //   task: Task;
// // }

// // const DraggableTask: React.FC<DraggableTaskProps> = ({ task }) => {
// //   const ref = useRef<HTMLDivElement>(null);

// //   const [{ isDragging }, drag] = useDrag(() => ({
// //     type: ItemTypes.TASK,
// //     item: task,
// //     collect: (monitor) => ({
// //       isDragging: monitor.isDragging(),
// //     }),
// //   }));

// //   drag(ref);

// //   return (
// //     <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 bg-gray-200 rounded-md shadow-sm">
// //       {task.name}
// //     </div>
// //   );
// // };

// // export default DraggableTask;
// // import React, { useRef } from 'react';
// // import { useDrag } from 'react-dnd';
// // import { Task } from './Types';
// // import { ItemTypes } from './Constants';

// // interface DraggableTaskProps {
// //   task: Task;
// // }

// // const DraggableTask: React.FC<DraggableTaskProps> = ({ task }) => {
// //   const ref = useRef<HTMLDivElement>(null);

// //   const [{ isDragging }, drag] = useDrag(() => ({
// //     type: ItemTypes.TASK,
// //     item: task,
// //     collect: (monitor) => ({
// //       isDragging: monitor.isDragging(),
// //     }),
// //   }));

// //   drag(ref);

// //   return (
// //     <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 bg-gray-200 rounded-md shadow-sm cursor-pointer">
// //       {task.name}
// //     </div>
// //   );
// // };

// // export default DraggableTask;
// import React, { useRef, useState } from 'react';
// import { useDrag } from 'react-dnd';
// import { Task } from './Types';
// import { ItemTypes } from './Constants';
// import { BsPlay } from 'react-icons/bs';
// import CountdownTimer from './CountdownTimer';

// interface DraggableTaskProps {
//   task: Task;
//   category: string;
// }

// const DraggableTask: React.FC<DraggableTaskProps> = ({ task, category }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [showTimer, setShowTimer] = useState(false);

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.TASK,
//     item: task,
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   drag(ref);

//   const handlePlayClick = () => {
//     setShowTimer(true);
//   };

//   return (
//     <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 bg-gray-200 rounded-md shadow-sm flex justify-between items-center">
//       {task.name}
//       {category === 'doing' && (
//         <button onClick={handlePlayClick} className="text-blue-500 hover:text-blue-700">
//           <BsPlay size={20} />
//         </button>
//       )}
//       {showTimer && <div className='fixed'><CountdownTimer startMinutes={5} /></div>}
//     </div>
//   );
// };

// export default DraggableTask;
// import React, { useRef, useState } from 'react';
// import { useDrag } from 'react-dnd';
// import { Task } from './Types';
// import { ItemTypes } from './Constants';
// import { BsPlay } from 'react-icons/bs';
// import CountdownTimer from './CountdownTimer';

// interface DraggableTaskProps {
//   task: Task;
//   category: string;
// }

// const DraggableTask: React.FC<DraggableTaskProps> = ({ task, category }) => {
//   const ref = useRef<HTMLDivElement>(null);
//   const [showTimer, setShowTimer] = useState(false);

//   const [{ isDragging }, drag] = useDrag(() => ({
//     type: ItemTypes.TASK,
//     item: task,
//     collect: (monitor) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   }));

//   drag(ref);

//   const handlePlayClick = () => {
//     setShowTimer(true);
//   };

//   const handleCloseTimer = () => {
//     setShowTimer(false);
//   };

//   return (
//     <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 bg-gray-200 rounded-md shadow-sm flex justify-between items-center">
//       {task.name}
//       {category === 'doing' && (
//         <button onClick={handlePlayClick} className="text-blue-500 hover:text-blue-700">
//           <BsPlay size={20} />
//         </button>
//       )}
//       {showTimer && (
//         <div className='fixed'>
//           <CountdownTimer startMinutes={5} onClose={handleCloseTimer} />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DraggableTask;
import React, { useRef, useState } from 'react';
import { useDrag } from 'react-dnd';
import { Task } from './Types';
import { ItemTypes } from './Constants';
import { BsPlay } from 'react-icons/bs';
import CountdownTimer from './CountdownTimer';
import { FiArrowUpRight, FiCheckCircle, FiCheckSquare } from 'react-icons/fi';

interface DraggableTaskProps {
  task: Task;
  category: string;
  onTaskDone: (task: Task) => void; // Add a prop to handle task completion
}

const DraggableTask: React.FC<DraggableTaskProps> = ({ task, category, onTaskDone }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [showTimer, setShowTimer] = useState(false);

  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.TASK,
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  drag(ref);

  const handlePlayClick = () => {
    setShowTimer(true);
  };

  const handleCloseTimer = () => {
    setShowTimer(false);
  };

  const handleTimerEnd = () => {
    onTaskDone(task); // Trigger task completion callback
    handleCloseTimer(); // Close the timer
    console.log(task)
  };

  return (
    <div ref={ref} style={{ opacity: isDragging ? 0.5 : 1 }} className="p-2 bg-slate-200 rounded-md shadow-gray-800 flex justify-between items-center">
      {task.name}
      {category === 'doing' && (
        <button onClick={handlePlayClick} className="text-blue-500 hover:text-blue-700">
          <BsPlay size={20} />
        </button>
      )}
      {category === 'todo' && (
        <button  className="text-blue-500 hover:text-blue-700">
          <FiCheckSquare size={20} />
        </button>
      )}
       {category === 'nextAction' && (
        <button  className="text-blue-500 hover:text-blue-700">
          <FiArrowUpRight size={20} />
        </button>
      )}
      {category === 'done' && (
        <button  className="text-blue-500 hover:text-blue-700">
          <FiCheckCircle size={20} />
        </button>
      )}
      {showTimer && (
        <div className='fixed'>
          <CountdownTimer startMinutes={0.5} onClose={handleCloseTimer} onTimerEnd={handleTimerEnd} />
        </div>
      )}
    </div>
  );
};

export default DraggableTask;
