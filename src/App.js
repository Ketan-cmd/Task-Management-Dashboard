import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.tasks.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900 dark:text-white text-black transition-all duration-300 flex justify-center items-start">
        <div className="max-w-xl w-full mt-10 p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Task Management Dashboard
          </h1>

          <ThemeToggle />
          <AddTaskForm />
          <SearchBar />
          <FilterBar />
          <TaskList />
        </div>
      </div>
    </div>
  );
}

export default App;
