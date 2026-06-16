import { useEffect, useState } from "react";
import { getTasks } from "../api/tasks";

export default function Home() {
  const [tasks, setTasks] = useState<any[]>([]);

  useEffect(() => {
    getTasks().then((res) => setTasks(res.data));
  }, []);

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
}
