# DevOps Task Manager

A production-oriented DevOps project built with Spring Boot, PostgreSQL, Docker, Kubernetes, and GitHub Actions.

This project demonstrates modern DevOps practices including CI/CD automation, containerization, Kubernetes deployment, secrets management, rolling updates, health checks, and infrastructure best practices.

---

## Architecture

```text
GitHub Actions
      │
      ▼
 Maven Build
      │
      ▼
 Docker Image Build
      │
      ▼
 Docker Hub
      │
      ▼
 Kubernetes (Kind)
      │
      ▼
 Spring Boot Backend
      │
      ▼
 PostgreSQL
```

---

## Tech Stack

### Backend
- Java 21
- Spring Boot
- Spring Data JPA
- Spring Security
- Maven

### Database
- PostgreSQL

### DevOps
- Docker
- Kubernetes (Kind)
- GitHub Actions
- Docker Hub

---

## Features

- REST API built with Spring Boot
- PostgreSQL persistence layer
- Dockerized application
- Kubernetes deployment
- Rolling updates
- Liveness probes
- Readiness probes
- Resource requests and limits
- Secrets management
- Automated CI pipeline
- Automated Docker image publishing

---

## CI/CD Pipeline

### Continuous Integration (CI)

Triggered on Pull Requests to `main`.

Pipeline steps:

1. Checkout source code
2. Setup Java 21
3. Build application
4. Run tests

### Continuous Delivery (CD)

Triggered on pushes to `main`.

Pipeline steps:

1. Build application
2. Build Docker image
3. Push image to Docker Hub

---

## Kubernetes Components

### Namespace

```text
taskmanager
```

### Deployments

- Backend Deployment
- PostgreSQL Deployment

### Services

- Backend Service
- PostgreSQL Service

### Secrets

- Database credentials
- Application secrets

---

## Health Checks

The application uses Kubernetes probes:

### Readiness Probe

```http
/actuator/health
```

### Liveness Probe

```http
/actuator/health
```

---

## Resource Management

Container resources are configured using:

```yaml
requests:
  cpu: 250m
  memory: 256Mi

limits:
  cpu: 500m
  memory: 512Mi
```

---

## Local Development

### Build

```bash
mvn clean package
```

### Run

```bash
java -jar target/*.jar
```

---

## Docker

Build image:

```bash
docker build -t taskmanager-backend .
```

Run container:

```bash
docker run -p 8081:8081 taskmanager-backend
```

---

## Kubernetes Deployment

Apply all manifests:

```bash
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods -n taskmanager
```

Check services:

```bash
kubectl get svc -n taskmanager
```

---

## Future Improvements

- Helm Charts
- Terraform Infrastructure Provisioning
- Prometheus Monitoring
- Grafana Dashboards
- ArgoCD GitOps
- Automated Kubernetes Deployment
- Multi-Environment Support (Dev / Stage / Prod)

---

## Project Goals

This project was created to practice and demonstrate:

- Containerization
- Kubernetes Administration
- CI/CD Automation
- Cloud-Native Development
- DevOps Engineering Best Practices

---

## Author

saros-dev

Computer Engineer | DevOps Engineer 
