import express from "express"
import { protect } from "../middleware/authMiddleware.js";
import { createTask, deleteTask, getAllTasks, updateTask } from "../controllers/taskcontroller.js";

const router = express.Router();

router.post("/", protect , createTask)
router.get("/" , protect , getAllTasks)
router.put("/:id" , protect, updateTask)
router.delete("/:id", protect, deleteTask)

export default router;