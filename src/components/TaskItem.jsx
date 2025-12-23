import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTask, updateTask } from "../redux/tasksSlice";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  const handleEdit = () => {
    if (editMode && newTitle.trim()) {
      dispatch(updateTask({ ...task, title: newTitle }));
    }
    setEditMode(!editMode);
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleToggle = () => {
    dispatch(updateTask({
      ...task,
      status: task.status === "pending" ? "completed" : "pending"
    }));
  };

  return (
    <div className="flex items-center gap-3 border p-3 rounded bg-white dark:bg-gray-800 dark:border-gray-700 transition">
      <input
        type="checkbox"
        checked={task.status === "completed"}
        onChange={handleToggle}
      />

      {editMode ? (
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="border px-2 py-1 flex-1 rounded bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600"
        />
      ) : (
        <p
          className={`flex-1 ${
            task.status === "completed"
              ? "line-through text-green-500"
              : ""
          }`}
        >
          {task.title}
        </p>
      )}

      <button
        onClick={handleEdit}
        className="text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
      >
        {editMode ? "Save" : "Edit"}
      </button>

      <button
        onClick={handleDelete}
        className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
      >
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
