import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/tasksSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.tasks.theme);

  return (
    <button
  onClick={() => dispatch(toggleTheme())}
  className="mb-4 px-4 py-2 border rounded bg-gray-200 dark:bg-gray-700 dark:text-white dark:border-gray-600 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
>
  Switch to {theme === "light" ? "Dark" : "Light"} Mode
</button>

  );
};

export default ThemeToggle;
