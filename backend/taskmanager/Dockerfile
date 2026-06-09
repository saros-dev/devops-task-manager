FROM maven:3.9-eclipse-temurin-21 AS build

WORKDIR /app

COPY backend/taskmanager/pom.xml ./pom.xml
COPY backend/taskmanager/src ./src

RUN mvn -f pom.xml clean package -DskipTests

FROM eclipse-temurin:21-jdk

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]
