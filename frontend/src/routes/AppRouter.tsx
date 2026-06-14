import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from "../pages/Tasks";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Tasks />} />
      </Routes>
    </BrowserRouter>
  );
}
