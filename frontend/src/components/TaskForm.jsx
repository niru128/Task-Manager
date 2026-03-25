import React, { useState } from 'react'
import API from '../services/api'

export default function TaskForm({fetchTasks, fetchAnalytics}) {

    const [form , setForm] = useState({
        title :"",
        description : "",
        priority : "medium"
    })

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await API.post("/tasks", form);
        
        setForm({title : "" , description :"" , priority : "medium"})
        fetchTasks();
    }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-6 border-red-50 shadow-2xl p-10">
        <h1 className='text-xl font-semibold'>Add Task</h1>
        <input placeholder='Title task' onChange={(e)=>setForm({...form , title : e.target.value})} className='p-3 rounded-full outline-none ' />
        <input placeholder='Enter detailed description of the task' onChange={(e)=> setForm({...form,description : e.target.value})}  className='p-3 rounded-full outline-none '/>
        <select value={form.priority} className='w-50' onChange={(e)=>setForm({...form , priority : e.target.value})}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high" >High</option>
        </select>
        <button className='bg-green-500 w-30 py-3 px-5 font-semibold text-white hover:bg-green-700 cursor-pointer rounded-2xl' >Add task</button>
        
    </form>
  )
}
