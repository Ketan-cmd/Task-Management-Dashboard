# Task Management Dashboard

A fully responsive Task Management Dashboard built using React.js, Redux Toolkit, Tailwind CSS, and JSON Server. This project allows users to manage daily tasks efficiently with CRUD operations, backend persistence, filtering, searching, and theme switching.

## 🚀 Features

### 🟢 Core Features
- **Add new tasks**
- **Edit tasks**
- **Delete tasks**
- **Mark tasks completed / pending**
- **Filter All / Completed / Pending**
- **Search tasks by title**
- **Dark / Light Theme toggle**

### 🔵 Backend Persistence
- JSON Server mock API
- Tasks are saved to backend file
- Data persists after refresh

### 🟣 UI Experience
- Responsive design
- Smooth theme switching
- Modern Tailwind styling
- Accessible UX/UI

## 🧠 Tech Stack

| Tech              | Role                |
|-------------------|---------------------|
| React.js          | Frontend framework  |
| Redux Toolkit     | State management    |
| Tailwind CSS      | Styling             |
| JSON Server       | Mock backend        |
| JavaScript (ES6+) | Language            |

## 📦 Installation & Setup

Follow these steps to run the project locally:

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd task-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start backend (JSON server)**
   ```bash
   npm run server
   ```
   Backend runs at:
   👉 [http://localhost:5000/tasks](http://localhost:5000/tasks)

4. **Start frontend**
   ```bash
   npm start
   ```
   Frontend runs at:
   👉 [http://localhost:3000](http://localhost:3000)

## 📂 Folder Structure

```
src/
  components/
    AddTaskForm.jsx
    FilterBar.jsx
    SearchBar.jsx
    TaskItem.jsx
    TaskList.jsx
    ThemeToggle.jsx
  redux/
    store.js
    tasksSlice.js
  App.js
  index.js
  index.css
```

## 🗂 API Routes

| Method | Endpoint       | Usage             |
|--------|----------------|-------------------|
| GET    | `/tasks`       | Fetch all tasks   |
| POST   | `/tasks`       | Create new task   |
| PUT    | `/tasks/:id`   | Update task       |
| DELETE | `/tasks/:id`   | Remove task       |

## 🧪 Bonus Features ⭐

These are optional enhancements included:
- Real backend simulation
- Full CRUD async thunks
- Loading states
- Error handling

## 🎥 Loom Walkthrough Script

Use this script for your project demo video:

1. Home page overview
2. Add task demo
3. Edit & save task
4. Delete task
5. Toggle status
6. Filter switching
7. Search feature
8. Dark / Light toggle
9. Refresh → data persists
10. Code explanation (Redux + backend)

**Total length:** 2–5 minutes

## 📸 Screenshots

Below is a screenshot of the Task Management Dashboard:

![Task Management Dashboard](https://raw.githubusercontent.com/Ketan-cmd/Task-Management-Dashboard/main/assets/screenshot.png)

## 🔮 Future Improvements

- Drag & drop tasks
- User accounts
- Categories
- Due dates
- Notifications
