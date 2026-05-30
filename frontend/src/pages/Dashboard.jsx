import { useEffect, useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";
import { LogOut, Trash2 } from "lucide-react";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const { data } = await API.get("/tasks");
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Create task
  const handleCreate = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    setLoading(true);

    try {
      await API.post("/tasks", {
        title,
        description,
      });

      setTitle("");
      setDescription("");
      fetchTasks();
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // Update stage
  const updateStage = async (id, stage) => {
    try {
      await API.put(`/tasks/${id}`, { stage });
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Group tasks
  const todo = tasks.filter((t) => t.stage === "Todo");
  const inProgress = tasks.filter(
    (t) => t.stage === "In Progress"
  );
  const done = tasks.filter((t) => t.stage === "Done");

  const columns = [
    { title: "Todo", tasks: todo },
    {
      title: "In Progress",
      tasks: inProgress,
    },
    { title: "Done", tasks: done },
  ];

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-800">
            Task Manager
          </h1>
          <p className="text-slate-500">
            Manage your tasks efficiently
          </p>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>

      {/* Add Task */}
      <form
        onSubmit={handleCreate}
        className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 mb-8"
      >
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Task title"
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            type="text"
            placeholder="Description"
            className="border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-400"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-3 font-medium transition"
          >
            {loading
              ? "Adding..."
              : "Add Task"}
          </button>
        </div>
      </form>

      {/* Task Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {columns.map((column) => (
          <div
            key={column.title}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-5"
          >
            <div className="flex justify-between items-center mb-5">
              <h2 className="font-semibold text-lg text-slate-800">
                {column.title}
              </h2>

              <span className="bg-slate-100 text-slate-600 text-sm px-3 py-1 rounded-full">
                {column.tasks.length}
              </span>
            </div>

            <div className="space-y-4">
              {column.tasks.length > 0 ? (
                column.tasks.map((task) => (
                  <div
                    key={task._id}
                    className="border border-slate-200 rounded-xl p-4 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-slate-800">
                      {task.title}
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      {task.description ||
                        "No description"}
                    </p>

                    <select
                      value={task.stage}
                      onChange={(e) =>
                        updateStage(
                          task._id,
                          e.target.value
                        )
                      }
                      className="mt-3 w-full border border-slate-300 rounded-lg px-3 py-2"
                    >
                      <option>Todo</option>
                      <option>
                        In Progress
                      </option>
                      <option>Done</option>
                    </select>

                    <button
                      onClick={() =>
                        deleteTask(task._id)
                      }
                      className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm mt-3"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-sm text-center py-6">
                  No tasks
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;