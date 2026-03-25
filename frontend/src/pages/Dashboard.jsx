import React, { useEffect, useState } from 'react'
import API from '../services/api';

export default function Dashboard() {

  const [task , setTask] = useState([]);

  const fetchTasks = async ()=>{
    const {data} = await API.get("/tasks");
    setTask(data);
  }

  useEffect(()=>{
    fetchTasks();
  },[])

  return (
    <div className='p-10'>
      <h1 className='text-4xl font-bold' >Task Manager Dashboard</h1>
      <div className='mt-4'>
        {
          task.map((task)=>(
            <div key={task._id} className='p-4 border mb-2 rounded' >
              <h2>{task.title}</h2>
              <p>{task.status}</p>

            </div>
          ))
        }
      </div>
      
    </div>
  )
}
