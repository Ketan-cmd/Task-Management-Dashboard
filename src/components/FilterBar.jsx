import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../redux/tasksSlice";

const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.tasksFilter);

  return (
    <div className="flex gap-3 mb-4">
     <button
  onClick={() => dispatch(setFilter("all"))}
  className={`px-4 py-2 rounded-lg font-medium transition 
    ${currentFilter === "all"
      ? "bg-blue-600 text-white shadow dark:bg-blue-500 dark:text-white"
      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}
    hover:brightness-110`}
>
  All
</button>

<button
  onClick={() => dispatch(setFilter("completed"))}
  className={`px-4 py-2 rounded-lg font-medium transition
    ${currentFilter === "completed"
      ? "bg-blue-600 text-white shadow dark:bg-blue-500 dark:text-white"
      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}
    hover:brightness-110`}
>
  Completed
</button>

<button
  onClick={() => dispatch(setFilter("pending"))}
  className={`px-4 py-2 rounded-lg font-medium transition
    ${currentFilter === "pending"
      ? "bg-blue-600 text-white shadow dark:bg-blue-500 dark:text-white"
      : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300"}
    hover:brightness-110`}
>
  Pending
</button>
    </div>
  );
};

export default FilterBar;
