import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async () => {
    const res = await fetch("http://localhost:5000/tasks");
    return await res.json();
  }
);

export const createTask = createAsyncThunk(
  "tasks/createTask",
  async (title) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        status: "pending"
      })
    });
    return await res.json();
  }
);

export const removeTask = createAsyncThunk(
  "tasks/removeTask",
  async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE"
    });
    return id;
  }
);

export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (task) => {
    const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task)
    });
    return await res.json();
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    list: [],
    filter: "all",
    search: "",
    theme: "light",
    loading: false,
    error: null
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load tasks";
      })
      .addCase(createTask.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(removeTask.fulfilled, (state, action) => {
        state.list = state.list.filter(t => t.id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.list.findIndex(t => t.id === action.payload.id);
        if (index !== -1) {
          state.list[index] = action.payload;
        }
      });
  }
});

export const {
  setFilter,
  setSearch,
  toggleTheme
} = tasksSlice.actions;

export default tasksSlice.reducer;
