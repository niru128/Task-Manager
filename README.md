# 🚀 Task Manager App (MERN Stack)

A full-stack Task Management application built using the **MERN stack** (MongoDB, Express, React, Node.js) with authentication, filtering, and analytics dashboard.

---

## 🌟 Features

### 🔐 Authentication

* User Registration & Login
* JWT-based authentication
* Protected routes

### 📋 Task Management

* Create, update, delete tasks
* Mark tasks as completed / in-progress
* Priority levels (Low, Medium, High)
* Due dates support

### 🔍 Search & Filters

* Filter by status (Todo, In Progress, Done)
* Filter by priority
* Search tasks by title

### 📊 Analytics Dashboard

* Total tasks
* Completed tasks
* Pending tasks
* Completion percentage
* Real-time updates

### 🎨 UI/UX

* Clean and responsive design
* Split layout (Add Task + Task List)
* Scrollable task panel

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* Axios
* React Router DOM

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Bcrypt

---

## 📂 Project Structure

```
task-manager/
│
├── client/        # Frontend (React)
├── server/        # Backend (Node + Express)
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/task-manager.git
cd task-manager
```

---

### 2️⃣ Setup Backend

```bash
cd server
npm install
```

Create a `.env` file:

```env
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```

Run backend:

```bash
npm start
```

---

### 3️⃣ Setup Frontend

```bash
cd client
npm install
npm run dev
```

---

## 🌐 Deployment

### Backend (Render)

* Hosted on Render
* Uses environment variables for MongoDB and JWT

### Frontend (Vercel / Netlify)

* Deployed as static React app
* Connected to live backend API

---

## 🔗 API Endpoints

### Auth

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tasks

* GET `/api/tasks`
* POST `/api/tasks`
* PUT `/api/tasks/:id`
* DELETE `/api/tasks/:id`

### Analytics

* GET `/api/analytics`

---

## 🧠 Learning Highlights

* Built full-stack MERN application
* Implemented JWT authentication
* Designed RESTful APIs
* Used MongoDB aggregation for analytics
* Created responsive UI with Tailwind
* Handled real-time UI updates

---

## 🚀 Future Improvements

* 📊 Charts for analytics (Chart.js)
* 🌙 Dark mode
* 📱 Mobile optimization
* 🔔 Notifications
* ⚡ Debounced search
* 🐳 Docker support

---

## 👨‍💻 Author

**Niranjan C B**
Aspiring Software Developer | MERN

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!

---
