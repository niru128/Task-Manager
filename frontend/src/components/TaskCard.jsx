import React from 'react'
import API from '../services/api'

export default function TaskCard({ task, fetchTasks, fetchAnalytics }) {

    const deleteTask = async () => {
        await API.delete(`/tasks/${task._id}`);
        fetchTasks();
    }

    const toggleStatus = async () => {
        const newStatus = task.status === "done" ? "todo" : "done"
        await API.put(`/tasks/${task._id}`, { status: newStatus });
        fetchTasks();
    }
    return (
        <div className="p-4 border rounded mb-2 flex justify-between items-center space-x-4">
            <div>
                <h2 className="font-bold">{task.title}</h2>
                <p className="text-sm">{task.description}</p>
                <p className="text-xs">Priority: {task.priority}</p>
            </div>

            <div className="flex gap-2">
                <button onClick={toggleStatus} className="px-4 py-1 rounded-xl text-white font-bold hover:bg-green-700 bg-green-500 cursor-pointer">
                    {task.status === "done" ? "Undo" : "Done"}
                </button>

                <button onClick={deleteTask} className="px-4 py-1 rounded-xl text-white font-bold hover:bg-red-700 cursor-pointer bg-red-500">
                    Delete
                </button>
            </div>
        </div>
    )
}
