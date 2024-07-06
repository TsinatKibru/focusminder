'use client'
import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { Task } from './Types';
import { ItemTypes } from './Constants';
import DraggableTask from './DraggableTask';

type Category = 'todo' | 'nextAction' | 'doing' | 'done';

interface DroppableColumnProps {
  category: Category;
  tasks: Task[];
  onDrop: (task: Task, category: Category) => void;
  onTaskDone: (task: Task) => void; // Add the onTaskDone prop
}

const DroppableColumn: React.FC<DroppableColumnProps> = ({ category, tasks, onDrop, onTaskDone }) => {
  const ref = useRef<HTMLDivElement>(null);

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item: Task) => {
      onDrop(item, category);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  drop(ref);
  

  return (
    <div ref={ref} className={`bg-slate-300 py-4 px-2 rounded-md  shadow-inner shadow-slate-400   ${isOver ? 'bg-green-100' : ''}`}>
      <h2 className="text-md font-light mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
      <div className="space-y-2 mb-4">
        {tasks.map((task) => (
           <DraggableTask key={task.id} task={task} category={category} onTaskDone={onTaskDone} />
        ))}
      </div>
    </div>
  );
};

export default DroppableColumn;
