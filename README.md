# 📌 Task Manager App (MERN Stack)

A full-stack Task Manager application built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to register, login, and manage tasks across three stages: Todo, In Progress, and Done.

---

# 🚀 Live Demo

- Frontend: (https://task-manager-n8cr.vercel.app/)
- Backend API: (https://task-manager-3-47iv.onrender.com/)

---

# ✨ Features

## 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Protected routes

## 📋 Task Management
- Create tasks
- Update tasks
- Delete tasks
- Change task stage (Todo / In Progress / Done)
- User-specific tasks

## 🎨 UI/UX
- Clean and responsive design
- 3-column task board layout
- Loading and error handling

---

# 🛠️ Tech Stack

## Frontend
- React (Vite)
- Axios
- React Router DOM
- Tailwind CSS

## Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs

## Deployment
- Frontend: Vercel / Netlify
- Backend: Render
- Database: MongoDB Atlas

---

# 📁 Project Structure

## Backend
```
backend/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── server.js
└── .env
```

## Frontend
```
frontend/
├── src/
│   ├── api/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
```

---

# ⚙️ Setup Instructions

## Backend

```bash
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🔌 API Endpoints

## Auth

- POST /api/auth/register → Register user
- POST /api/auth/login → Login user

## Tasks (Protected)

- GET /api/tasks → Get tasks
- POST /api/tasks → Create task
- PUT /api/tasks/:id → Update task
- DELETE /api/tasks/:id → Delete task

---

# 🧠 Assumptions

- Each user manages only their own tasks
- Task stages are fixed: Todo, In Progress, Done
- JWT token stored in localStorage

---

# ⚖️ Tradeoffs

- No drag-and-drop to keep implementation simple
- Minimal state management (no Redux)
- Basic validation for faster development
- Lightweight UI instead of heavy UI libraries

---

# 🚀 Future Improvements

- Drag & drop task movement
- Task search & filters
- Due dates & reminders
- Dark mode
- Role-based access control

---

# 🧪 How to Test

1. Register a user
2. Login
3. Create tasks
4. Move tasks between stages
5. Delete tasks
6. Refresh page to verify persistence

---

# 👨‍💻 Author

Full-stack MERN Task Manager built as an internship assignment demonstrating authentication, REST APIs, and clean UI architecture.
