# Use the official Node.js 18 image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json) to install dependencies first
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Set the environment variable for development
ENV NODE_ENV=development

# Expose port 3000 to the host
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "run", "dev"]
