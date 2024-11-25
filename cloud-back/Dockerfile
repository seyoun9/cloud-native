# Step 1: Use the official OpenJDK image
FROM openjdk:17-jdk-slim AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Copy build.gradle and install dependencies
COPY build.gradle settings.gradle ./
COPY gradle gradle
COPY gradlew ./
RUN chmod +x gradlew
RUN ./gradlew --no-daemon build

# Step 4: Copy the source code and build the application
COPY src ./src
RUN ./gradlew clean build -x test

# Step 5: Run the application
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/build/libs/cloud-back-0.0.1-SNAPSHOT.jar cloud-back-0.0.1-SNAPSHOT.jar

# Expose port 8080 for the Spring Boot application
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "cloud-back-0.0.1-SNAPSHOT.jar"]
