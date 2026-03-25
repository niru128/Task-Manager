import Task from "../models/Task.js";

export const getAnalytics = async (req, res) => {
  try {
    const userId = req.user._id;

    const totalTasks = await Task.countDocuments({ user: userId });

    const completedTasks = await Task.countDocuments({
      user: userId,
      status: "done",
    });

    const pendingTasks = await Task.countDocuments({
      user: userId,
      status: { $ne: "done" },
    });

    const completionRate =
      totalTasks === 0
        ? 0
        : ((completedTasks / totalTasks) * 100).toFixed(2);

    const stats = await Task.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: null,
          total: { $sum: 1 },
          completed: {
            $sum: {
              $cond: [{ $eq: ["$status", "done"] }, 1, 0],
            },
          },
        },
      },
    ]);

    res.status(200).json({
      totalTasks,
      completedTasks,
      pendingTasks,
      completionRate,
      stats,
    });

  } catch (error) {
    console.log("Failed to get analytics", error);
    res.status(500).json({ message: "Failed to get analytics" });
  }
};