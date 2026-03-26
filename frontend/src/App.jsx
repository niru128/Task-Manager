import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import { Navigate } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
      
        <Route 
          path='/' 
          element={user ? <Navigate to="/dashboard" /> : <Register />} 
        />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

 
        <Route 
          path='/dashboard' 
          element={user ? <Dashboard /> : <Navigate to="/login" />} 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
