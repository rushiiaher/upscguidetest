# Use Node.js as the base image
FROM node:18-alpine as builder

# Set working directory
WORKDIR /app

# Copy package.json files
COPY package.json ./
COPY Frontend/package.json ./Frontend/
COPY Backend/package.json ./Backend/

# Install dependencies
RUN npm run install:frontend
RUN npm run install:backend

# Copy all files
COPY . .

# Build frontend
RUN npm run build:frontend

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy built frontend
COPY --from=builder /app/Frontend/dist ./Frontend/dist

# Copy backend
COPY --from=builder /app/Backend ./Backend

# Set working directory to backend
WORKDIR /app/Backend

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]