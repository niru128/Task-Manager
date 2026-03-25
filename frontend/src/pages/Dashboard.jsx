import React, { useEffect, useState } from 'react'
import API from '../services/api';
import TaskForm from '../components/TaskForm';
import TaskCard from '../components/TaskCard';

export default function Dashboard() {

  const [task, setTask] = useState([]);
  const [filters, setFilters] = useState({
    status: "",
    priority: "",
    search: ""
  })
  const [analytics, setAnalytics] = useState(null)

  const fetchTasks = async () => {
    try {
      const query = [];

      if (filters.status) query.push(`status=${filters.status}`);
      if (filters.priority) query.push(`priority=${filters.priority}`);
      if (filters.search) query.push(`search=${filters.search}`);

      const queryString = query.length ? `?${query.join("&")}` : "";

      const { data } = await API.get(`/tasks${queryString}`);
      setTask(data);

    } catch (error) {
      console.log("Fetching tasks failed", error);
    }
  };

  const fetchAnalytics = async () => {
    try {
      const { data } = await API.get("/analytics");
      setAnalytics(data);
    } catch (error) {
      console.log("Analytics error", error);
    }
  };

  useEffect(() => {
    fetchTasks();
    fetchAnalytics();
  }, [filters])

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-10 text-center">
        Task Manager Dashboard
      </h1>


      <div className="flex space-x-6">
        <div className="w-1/3 bg-white p-5 rounded-xl shadow min-h-screen">
          <h2 className="text-xl font-semibold mb-4">Add Task</h2>
          <TaskForm fetchTasks={fetchTasks} fetchAnalytics={fetchAnalytics} />
        </div>


        <div className="w-2/3 bg-white p-5 rounded-xl shadow">


          {analytics && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

              <div className="bg-blue-500 text-white p-4 rounded-xl shadow">
                <h2 className="text-sm">Total Tasks</h2>
                <p className="text-2xl font-bold">{analytics.totalTasks}</p>
              </div>

              <div className="bg-green-500 text-white p-4 rounded-xl shadow">
                <h2 className="text-sm">Completed</h2>
                <p className="text-2xl font-bold">{analytics.completedTasks}</p>
              </div>

              <div className="bg-yellow-500 text-white p-4 rounded-xl shadow">
                <h2 className="text-sm">Pending</h2>
                <p className="text-2xl font-bold">{analytics.pendingTasks}</p>
              </div>

              <div className="bg-purple-500 text-white p-4 rounded-xl shadow">
                <h2 className="text-sm">Completion %</h2>
                <p className="text-2xl font-bold">{analytics.completionRate}%</p>
              </div>

            </div>
          )}
          <div className="flex gap-4 mb-6">
            <select
              className="border p-2 rounded w-1/4"
              onChange={(e) =>
                setFilters({ ...filters, status: e.target.value })
              }
            >
              <option value="">All Status</option>
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>

            <select
              className="border p-2 rounded w-1/4"
              onChange={(e) =>
                setFilters({ ...filters, priority: e.target.value })
              }
            >
              <option value="">All Priority</option>
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>

            <input
              placeholder="Search..."
              className="border p-2 rounded w-1/2"
              onChange={(e) =>
                setFilters({ ...filters, search: e.target.value })
              }
            />
          </div>

          <div className="space-y-3">
            {task.length > 0 ? (
              task.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  fetchTasks={fetchTasks}
                  fetchAnalytics={fetchAnalytics}
                />
              ))
            ) : (
              <p className="text-gray-500">No tasks found</p>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}