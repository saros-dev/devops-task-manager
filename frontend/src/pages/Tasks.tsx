import { useEffect, useState } from "react";
import { getTasks, createTask, deleteTask } from "../api/tasks";
import type { Task } from "../types/task";
import "../App.css";

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await getTasks();
      setTasks(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleCreate = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    try {
      setLoading(true);

      await createTask({
        title,
        description,
        status: "TODO",
        done: false,
      });

      setTitle("");
      setDescription("");

      await fetchTasks();
    } catch (error) {
      console.error(error);
      alert("Failed to create task");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteTask(id);

      setTasks((prev) =>
        prev.filter((task) => task.id !== id)
      );
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>🚀 Task Manager</h1>
        <p>React + Spring Boot + Kubernetes + ArgoCD</p>
      </div>

      <div className="card">
        <h2 style={{ marginBottom: "20px" }}>
          Create New Task
        </h2>

        <div className="form-group">
          <input
            className="input"
            placeholder="Task title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            className="textarea"
            placeholder="Task description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button
            className="btn"
            onClick={handleCreate}
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Add Task"}
          </button>
        </div>
      </div>

      {tasks.length === 0 ? (
        <div className="card empty">
          No tasks found
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="task-card"
            >
              <div className="task-title">
                {task.title}
              </div>

              <div className="task-desc">
                {task.description}
              </div>

              <div className="task-footer">
                <span className="status">
                  {task.status ?? "TODO"}
                </span>

                <button
                  className="delete-btn"
                  onClick={() =>
                    task.id &&
                    handleDelete(task.id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
