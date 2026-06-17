import api from "./axios";
import type { Task } from "../types/task";

export const getTasks = () => api.get<Task[]>("/tasks");

export const createTask = (data: Task) =>
  api.post("/tasks", data);

export const deleteTask = (id: number) =>
  api.delete(`/tasks/${id}`);
