package com.saros.taskmanager.service;

import com.saros.taskmanager.model.Task;
import com.saros.taskmanager.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository repo;

    public TaskService(TaskRepository repo) {
        this.repo = repo;
    }

    public List<Task> getAllTasks() {
        return repo.findAll();
    }

    public Task getTaskById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("Task not found: " + id));
    }

    public Task createTask(Task task) {
        return repo.save(task);
    }

    public Task updateTask(Long id, Task newTask) {
        return repo.findById(id).map(task -> {
            task.setTitle(newTask.getTitle());
            task.setDescription(newTask.getDescription());
            task.setStatus(newTask.getStatus());
            task.setDone(newTask.isDone());
            return repo.save(task);
        }).orElseThrow(() -> new RuntimeException("Task not found: " + id));
    }

    public void deleteTask(Long id) {
        repo.deleteById(id);
    }
}
