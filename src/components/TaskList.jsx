import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { fetchTasks } from "../redux/tasksSlice";

const TaskList = () => {
  const dispatch = useDispatch();
  const { list, filter, search, loading, error } = useSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (loading) {
    return <p className="text-gray-500">Loading tasks...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  const filteredTasks = list
    .filter((task) =>
      filter === "all"
        ? true
        : filter === "completed"
        ? task.status === "completed"
        : task.status === "pending"
    )
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div className="space-y-2">
      {filteredTasks.length === 0 && (
        <p className="text-gray-500">No tasks found.</p>
      )}

      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
