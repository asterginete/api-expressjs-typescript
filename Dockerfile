# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

# Copy the rest of the application's files to the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]
