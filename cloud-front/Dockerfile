# Step 1: Use the official Node.js image
FROM node AS build

# Step 2: Set the working directory
WORKDIR /app

# Step 3: Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Step 4: Copy the source code and build the application
COPY . ./
RUN npm run build

# Step 5: Set up the production environment
FROM nginx:alpine

# Step 6: Copy the built React application to Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for the React frontend
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
