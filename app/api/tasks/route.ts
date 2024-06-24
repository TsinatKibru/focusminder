// app/api/tasks/route.ts
import { getXataClient, XataClient } from '@/src/xata';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/dist/server/api-utils';
import { NextRequest, NextResponse } from 'next/server';


export async function GET(req: NextRequest) {

    const xataClient = getXataClient();
    const {userId} = auth()
  try {

    if(!userId){
     return
    }
    // Fetch tasks from the 'tasks' table
    const tasks = await xataClient.db.task.getAll();
    const filteredTasks = tasks.filter(task => task.userid === userId);

    return NextResponse.json(filteredTasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
