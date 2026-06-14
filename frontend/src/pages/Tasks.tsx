import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    api.get("/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      {tasks.map((t) => (
        <div key={t.id}>
          <h3>{t.title}</h3>
          <p>{t.description}</p>
          <span>{t.status}</span>
        </div>
      ))}
    </div>
  );
}
