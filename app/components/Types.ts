export interface Task {
  id: string; // Adjust based on your API response
  name: string;
  duedate: string;
  note: string;
  doitsomeday: boolean;
  project: string;
  category: string;
}

  export interface FormattedTasks {
    todo: Task[];
    nextAction: Task[];
    doing: Task[];
    done: Task[];
  }