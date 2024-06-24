// formatTasks.ts

import { Task, FormattedTasks } from "./Types";

const formatTasks = (data: any[]): FormattedTasks => {
  const formatted: FormattedTasks = {
    todo: [],
    nextAction: [],
    doing: [],
    done: [],
  };

  data.forEach((taskData) => {
    console.log("taskData",taskData)
    const task: Task = {
      id: taskData.id,
      name: taskData.name || "",
      duedate: taskData.duedate || "",
      note: taskData.note || "",
      doitsomeday: taskData.doitsomeday || false,
      project: taskData.project || "",
      category: taskData.category.toLowerCase() || "",
    };

    switch (task.category) {
      case "todo":
        formatted.todo.push(task);
        break;
      case "nextaction":
        formatted.nextAction.push(task);
        break;
      case "doing":
        formatted.doing.push(task);
        break;
      case "done":
        formatted.done.push(task);
        break;
      default:
        break;
    }
  });

  return formatted;
};

export default formatTasks;
