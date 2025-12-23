import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/tasksSlice";

const SearchBar = () => {
  const dispatch = useDispatch();

  return (
    <input
  type="text"
  placeholder="Search tasks..."
  onChange={(e) => dispatch(setSearch(e.target.value))}
  className="border px-3 py-2 w-full rounded mb-4 bg-white dark:bg-gray-800 dark:text-white dark:border-gray-700"
/>

  );
};

export default SearchBar;
