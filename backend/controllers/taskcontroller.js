import Task from "../models/Task.js";


export const createTask = async (req, res) => {
    try {

        const { title, priority, dueDate, description } = req.body;

        if (!title) res.json({ message: "Title is required" })

        

        const task = await Task.create({
            user: req.user._id,
            title,
            priority,
            dueDate,
            description
        })

        res.status(200).json(task);

    } catch (error) {
        console.log("Cannot create task", error);
        res.status(500).json({ message: "Cannot create task" })
    }
}

export const getAllTasks = async (req, res) => {
    try {

        const { status, priority, search } = req.query;

        let query = { user: req.user._id };

        if (status) query.status = status
        if (priority) query.priority = priority;
        if (search) {
            query.title = { $regex: search, $options: "i" }
        }

        const tasks = await Task.find(query).sort({ createdAt: -1 });

        res.status(200).json(tasks)
    } catch (error) {
        console.log("Failed to get all tasks", error);
        res.status(500).json({ message: "Failed to get all tasks" });
    }
}

export const updateTask = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(401).json({ message: "Task not found" });
        }

        if (task.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        const updated = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )

        res.status(200).json(updated);

    } catch (error) {
        console.log("CAnnot update task", error);
        res.status(500).json({ message: "Cannot update task" })
    }
}

export const deleteTask = async (req, res) => {
    try {

        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(401).json({ message: "Task not found" })
        }

        if (task.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not Authorized" });
        }

        await task.deleteOne();

        return res.json({ message: "Task deleted " })

    } catch (error) {
        console.log("cannot delete task", error);
        res.status(500).json({ message: "Failed to delete task" })
    }
}