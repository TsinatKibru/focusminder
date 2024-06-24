import { auth } from "@clerk/nextjs/server";
import test from "../components/Tasks";
import Test from "../components/Test";

const page = () => {
 

 

    const sampleTasks = {
        todo: [{ id: 1, name: 'Task 1' }, { id: 2, name: 'Task 2' }],
        nextAction: [{ id: 3, name: 'Task 3' }],
        doing: [{ id: 4, name: 'Task 4' }],
        done: [{ id: 5, name: 'Task 5' }],
      };
  return (
    <div className="min-h-screen bg-gray-200 p-8">
      {/* <Tasks completed="3/5" tasks={sampleTasks} /> */}
      {/* <Test/> */}tasks
    </div>
  )
}

export default page
