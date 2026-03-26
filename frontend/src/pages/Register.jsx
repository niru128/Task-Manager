import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import API from '../services/api';

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await API.post("/auth/register", form);
      navigate("/login");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Registration failed");
      } else {
        setError("Server not reachable");
      }
    }
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col space-y-6 w-130 justify-center items-center p-10 rounded-4xl shadow-2xl'
      >
        <div className='flex flex-col items-center'>
          <h1 className='text-[25px] font-bold'>Create Account</h1>
          <h2 className='text-[20px] font-bold text-gray-700'>Register</h2>
        </div>

        {/* ERROR MESSAGE */}
        {error && (
          <p className="text-red-500 font-semibold text-sm">{error}</p>
        )}

        <input
          type="text"
          placeholder='Enter your Name'
          className='border w-full rounded py-2 px-4'
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          type="email"
          placeholder='Enter your Email'
          className='border w-full rounded py-2 px-4'
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder='Enter your Password'
          className='border w-full rounded py-2 px-4'
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button className='bg-green-600 text-white p-2 rounded w-full hover:bg-green-800 transition duration-200 font-bold'>
          Register
        </button>

        {/* NAVIGATION */}
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Login
          </Link>
        </p>
      </form>
    </div>
  )
}