import api from "./axios";

export const getTasks = () => api.get("/api/tasks");
export const createTask = (data: any) => api.post("/api/tasks", data);
export const deleteTask = (id: number) => api.delete(`/api/tasks/${id}`);
