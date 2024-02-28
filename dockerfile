# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /petition

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install your application's dependencies
RUN npm install

# Copy the rest of your application's source code to the container
COPY . .

# Expose the port that your application will run on
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
