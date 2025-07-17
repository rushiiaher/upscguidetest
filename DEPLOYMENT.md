# UPSC Guide Deployment Guide

This document provides instructions for deploying the UPSC Guide application using different methods.

## Method 1: Vercel Deployment (Recommended)

### Prerequisites
- A [Vercel](https://vercel.com) account
- [Vercel CLI](https://vercel.com/docs/cli) installed

### Steps

1. **Login to Vercel**
   ```bash
   vercel login
   ```

2. **Deploy Backend**
   ```bash
   cd Backend
   vercel
   ```
   - Follow the prompts to complete deployment
   - Save the deployment URL (e.g., https://upsc-guide-backend.vercel.app)

3. **Update Frontend API URL**
   - Edit the API base URL in your frontend code to point to your deployed backend

4. **Deploy Frontend**
   ```bash
   cd Frontend
   vercel
   ```
   - Follow the prompts to complete deployment

5. **Link Projects (Optional)**
   - In the Vercel dashboard, you can link your frontend and backend projects

## Method 2: Traditional Hosting

### Backend Deployment

1. **Choose a Node.js hosting provider**:
   - [Render](https://render.com)
   - [Railway](https://railway.app)
   - [Heroku](https://heroku.com)
   - [DigitalOcean](https://digitalocean.com)

2. **Prepare your backend**:
   ```bash
   cd Backend
   npm install
   ```

3. **Set environment variables**:
   - Set up the same environment variables as in your `.env` file
   - Make sure to set up your MongoDB connection string

4. **Deploy using provider instructions**:
   - For Render: Connect GitHub repo or deploy from local
   - For Railway: Connect GitHub repo
   - For Heroku: `heroku create` and `git push heroku main`

### Frontend Deployment

1. **Build your frontend**:
   ```bash
   cd Frontend
   npm install
   npm run build
   ```

2. **Choose a static site hosting provider**:
   - [Netlify](https://netlify.com)
   - [Vercel](https://vercel.com)
   - [GitHub Pages](https://pages.github.com)
   - [Surge](https://surge.sh)

3. **Deploy the build folder**:
   - For Netlify: Drag and drop the `dist` folder
   - For Vercel: Run `vercel` in the Frontend directory
   - For GitHub Pages: Use `gh-pages` package
   - For Surge: `surge dist`

## Method 3: Docker Deployment

### Prerequisites
- [Docker](https://www.docker.com/get-started) installed
- [Docker Compose](https://docs.docker.com/compose/install/) installed

### Steps

1. **Build and run with Docker Compose**:
   ```bash
   docker-compose up --build
   ```

2. **For production deployment**:
   - Push your Docker image to Docker Hub or a private registry
   - Deploy to a cloud provider that supports Docker:
     - AWS ECS
     - Google Cloud Run
     - Azure Container Instances
     - DigitalOcean App Platform

## Environment Variables

Make sure to set these environment variables in your deployment environment:

- `MONGODB_URI`: Your MongoDB connection string
- Any other environment variables from your `.env` file

## Post-Deployment Verification

1. Visit your deployed frontend URL
2. Test the contact form functionality
3. Verify admin login and dashboard access
4. Check that all images and assets are loading correctly

## Troubleshooting

- **CORS Issues**: Ensure your backend has proper CORS configuration
- **Database Connection**: Verify MongoDB connection string is correct
- **Missing Environment Variables**: Check all required variables are set
- **Build Errors**: Review build logs for any compilation errors