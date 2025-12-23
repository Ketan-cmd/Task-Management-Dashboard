import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createTask } from "../redux/tasksSlice";  // ⬅️ NEW import

const AddTaskForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    dispatch(createTask(title));   // ⬅️ NEW backend action
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border px-3 py-2 flex-1 rounded bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-400 dark:text-gray-900 dark:hover:bg-blue-300 transition"
      >
        Add
      </button>
    </form>
  );
};

export default AddTaskForm;
