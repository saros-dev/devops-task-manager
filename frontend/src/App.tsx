import { useEffect } from "react";
import { getTasks } from "./api/tasks";

function App() {
  useEffect(() => {
    getTasks()
      .then((res) => console.log(res.data))
      .catch((err) => console.error(err));
  }, []);

  return <h1>Frontend is working 🚀</h1>;
}

export default App;
