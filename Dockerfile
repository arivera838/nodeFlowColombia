# ============================================
# Stage 1: Build static React bundle with Vite
# ============================================
FROM node:20-alpine AS build
WORKDIR /app

# Copy package descriptors
COPY package*.json ./

# Install dependencies clean
RUN npm ci

# Copy source code
COPY . .

# Build production distribution bundle
RUN npm run build

# ============================================
# Stage 2: Serve with Production Grade Nginx
# ============================================
FROM nginx:alpine AS production

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets from Stage 1
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom Nginx configuration for React SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose HTTP port 80
EXPOSE 80

# Start Nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
