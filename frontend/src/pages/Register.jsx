import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import API from '../services/api';

export default function Register() {

    const [form , setForm] = useState({name : "" , email :"" , password : ""});
    const navigate = useNavigate();

    const handleSubmit = async  (e)=>{
        e.preventDefault();
        const {data} = await API.post("/auth/register" , form);
        localStorage.setItem("user" , JSON.stringify(data));
        navigate("/")
    }

    
  return (
    <div className='h-screen flex flex-col items-center justify-center'>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-6 w-160 justify-center items-center  p-10 rounded-4xl shadow-2xl'>
            <div className='flex flex-col space-x-1 items-center justify-center'>

            <h1 className='text-[25px] font-bold'>Welcome to Task Manager</h1>
            <h2 className='text-[20px] font-bold text-gray-700 '>Register</h2>
            </div>
            <input placeholder='Enter your name' className='border p-2 w-full rounded py-1 px-4' onChange={(e)=>setForm({...form, name : e.target.value})} />
            <input placeholder='Enter your Email' className='border p-2 w-full rounded py-1 px-4' onChange={(e)=>setForm({...form, email : e.target.value})} />
            <input placeholder='Enter your Passoword' className='border p-2 w-full rounded py-1 px-4' onChange={(e)=>setForm({...form, password : e.target.value})} />

            <button className=' bg-blue-600 text-white p-2 rounded cursor-pointer w-full hover:bg-blue-800  transition duration-200 font-bold'>Register</button>
        </form>
      
    </div>
  )
}
