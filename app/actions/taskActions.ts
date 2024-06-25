// // app/actions/taskActions.ts
// "use server";

// import { getXataClient } from "@/src/xata";
// import { Task } from "../components/Types";

// export async function createTask(formData: FormData) {
//     const taskName = formData.get("taskName") as string;
//     const dueDate = formData.get("dueDate") as string;
//     const note = formData.get("note") as string;
//     const doitsomeday = formData.get("someday") === "true";
//     const project = formData.get("project") as string;
//     const category = 'todo';
  
//     if (!taskName) {
//       return;
//     }
  

//   // Here you would implement your logic to save the task, e.g., to a database.
// //   const newTask: Task = { name: taskName, dueDate, note, doitsomeday ,project, category };
// //   console.log("Task created:", newTask);

// //   if(!taskName){
// //     return
// //   }
//   const xataClient = getXataClient();
//   const newTaskData = {
//     name: taskName,
//     duedate: dueDate,
//     note,
//     doitsomeday,
//     project,
//     category
//   };
//   const newTask = await xataClient.db.task.create(newTaskData);
//   console.log("Task created:", newTask);
//   // Simulating a save action, you should replace this with actual save logic
//   return newTask;
// }
// taskActions.ts

// "use server";

// import { getXataClient } from "@/src/xata";
// import { Task } from "../components/Types";

// export async function createTask(formData: FormData) {
//   const taskName = formData.get("taskName") as string;
//   const dueDate = formData.get("dueDate") as string; // Ensure dueDate is a string
//   const note = formData.get("note") as string || ""; // Default note to an empty string if not provided
//   const doitsomeday = formData.get("someday") === "true";
//   const project = formData.get("project") as string;
//   const category = "todo";

//   if (!taskName) {
//     return;
//   }

//   const xataClient = getXataClient();
//   const newTaskData = {
//     name: taskName,
//     duedate: dueDate,
//     note,
//     doitsomeday,
//     project,
//     category,
//   };

//   try {
//     const newTask = await xataClient.db.task.create(newTaskData);
//     console.log("Task created:", newTask);
//     return newTask;
//   } catch (error) {
//     console.error("Error creating task:", error);
//     throw error; // Throw the error to be handled by the caller
//   }
// }
// taskActions.ts

// "use server";

// import { getXataClient } from "@/src/xata";
// import { Task } from "../components/Types";

// interface TaskFormData {
//   taskName: string;
//   dueDate: string;
//   note: string;
//   doitsomeday: boolean;
//   project: string;
//   category: string;
// }

// export async function createTask(formData: TaskFormData) {
//   const {
//     taskName,
//     dueDate,
//     doitsomeday,
//     project,
//     category,
//   } = formData;

//   if (!taskName) {
//     return;
//   }

//   const xataClient = getXataClient();
//   const newTaskData = {
//     name: taskName,
//     duedate: dueDate, // Ensure dueDate is a string in RFC 3339 format
//     doitsomeday,
//     project,
//     category,
//   };

//   try {
//     const newTask = await xataClient.db.task.create(newTaskData);
//     console.log("Task created:", newTask);
//     return newTask;
//   } catch (error) {
//     console.error("Error creating task:", error);
//     throw error; // Throw the error to be handled by the caller
//   }
// }
// taskActions.ts
// taskActions.ts

"use server";

import { getXataClient } from "@/src/xata";
import { Task } from "../components/Types";
import { revalidatePath } from "next/cache";
import { auth } from "@clerk/nextjs/server";

interface TaskFormData {
  taskName: string;
  dueDate: string;
  note: string;
  doitsomeday: boolean;
  project: string;
  category: string;
}

interface SettingFormData {
  pomodoroTime: number;
}

export async function createTask(formData: TaskFormData) {
  const {
    taskName,
    dueDate,
    note,
    doitsomeday,
    project,
    category,
  } = formData;

  if (!taskName) {
    return;
  }

  const xataClient = getXataClient();
  const {userId} = auth()

  const userid = userId;

  if(!userid){
    return
  }

  const newTaskData = {
    name: taskName,
    duedate: dueDate, // Ensure dueDate is a string in RFC 3339 format
    doitsomeday,
    project,
    category,
    userid,
  };

  try {
    const newTask = await xataClient.db.task.create(newTaskData);
   
    console.log("Task created:", newTask);
    return { success: true, task: newTask };
  } catch (error) {
    console.error("Error creating task:", error);
    throw error; // Throw the error to be handled by the caller
  }
}

export async function updateTaskCategory(taskId: string, newCategory: string) {
  const {userId} = auth()
  console.log("userId")
  if(userId){
    console.log(userId)
  }
    const xataClient = getXataClient();
  
    try {
      const updatedTask = await xataClient.db.task.update(taskId, { category: newCategory });
      console.log("Task updated:", updatedTask);
  
      // Revalidate the path to ensure UI updates
      revalidatePath('/'); // Adjust the path based on your application's routing
  
      return { success: true, task: updatedTask };
    } catch (error) {
      console.error("Error updating task category:", error);
      throw error; // Throw the error to be handled by the caller
    }
  }

  export async function createOrUpdateSetting(formData: SettingFormData) {
    const { pomodoroTime } = formData;
  
    if (pomodoroTime <= 0) {
      return;
    }
  
    const xataClient = getXataClient();
    const { userId } = auth();
  
    const userid = userId;
  
    if (!userid) {
      return;
    }
  
    const settingData = {
      pomodorotime: pomodoroTime,
      userid,
    };
  
    try {
      // Check if the setting already exists for the user
      const existingSetting = await xataClient.db.setting.filter({ userid }).getFirst();
  
      if (existingSetting) {
        // Update the existing setting
        const updatedSetting = await xataClient.db.setting.update(existingSetting.id, settingData);
        console.log("Setting updated:", updatedSetting);
        return { success: true, setting: updatedSetting };
      } else {
        // Create a new setting
        const newSetting = await xataClient.db.setting.create(settingData);
        console.log("Setting created:", newSetting);
        return { success: true, setting: newSetting };
      }
    } catch (error) {
      console.error("Error managing setting:", error);
      throw error; // Throw the error to be handled by the caller
    }
  }

  export async function fetchPomodoroTime() {
    const xataClient = getXataClient();
    const { userId } = auth();
  
    const userid = userId;
  
    if (!userid) {
      return 25; // Default Pomodoro time if no user is authenticated
    }
  
    try {
      // Fetch the setting for the authenticated user
      const setting = await xataClient.db.setting.filter({ userid }).getFirst();
  
      if (setting) {
        return setting.pomodorotime;
      } else {
        return 25; // Default Pomodoro time if setting is not found
      }
    } catch (error) {
      console.error("Error fetching Pomodoro time:", error);
      throw error; // Throw the error to be handled by the caller
    }
  }
  
