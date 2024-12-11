# Base image for Node.js build stage
FROM node:20 as node_modules_builder

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json for dependencies
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Base image for Deno
FROM denoland/deno:latest

# Set working directory
WORKDIR /app

# Copy Node.js modules from the previous stage
COPY --from=node_modules_builder /app/node_modules ./node_modules

# Copy Deno project files
COPY . .

# Build the Deno app (Deno's compatibility mode for Node.js dependencies)
RUN deno task build

# Run the app in production mode
CMD ["deno", "task", "preview"]

# you imported with both deno and npm, so you need to use deno's compatibility mode.
# did you do `deno run --node-modules-dir dev.ts` before you Dockerised?