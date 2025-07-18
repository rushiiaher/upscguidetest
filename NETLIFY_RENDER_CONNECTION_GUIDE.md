# Connecting Netlify Frontend with Render Backend

This guide explains how to connect your React frontend (hosted on Netlify) with your Express backend (hosted on Render).

## 1. Configure Environment Variables

### Backend (Render)

1. Log in to your Render dashboard
2. Select your backend service
3. Go to "Environment" tab
4. Add the following environment variable:
   - Key: `FRONTEND_URL`
   - Value: Your Netlify URL (e.g., `https://your-site-name.netlify.app`)
5. Click "Save Changes"

### Frontend (Netlify)

1. Log in to your Netlify dashboard
2. Select your site
3. Go to "Site settings" > "Build & deploy" > "Environment"
4. Add the following environment variable:
   - Key: `VITE_API_URL`
   - Value: Your Render backend URL (e.g., `https://upscguidetest.onrender.com`)
5. Click "Save"
6. Trigger a new deploy

## 2. Update CORS Configuration

Your backend already has CORS configured to accept requests from the frontend URL:

```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));
```

## 3. API Calls in Frontend

Your frontend is already configured to use the environment variable for API calls:

```javascript
const response = await fetch(import.meta.env.VITE_API_URL + '/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});
```

## 4. Testing the Connection

1. Fill out the contact form on your Netlify site
2. Check the browser's developer console (F12) to see if the request is sent successfully
3. Verify in your Render logs that the request was received
4. Check your MongoDB database to confirm the data was saved

## 5. Troubleshooting

If you encounter issues:

1. **CORS Errors**: Ensure the `FRONTEND_URL` on Render exactly matches your Netlify URL
2. **API Connection Errors**: Verify the `VITE_API_URL` on Netlify is correct and the backend is running
3. **404 Errors**: Make sure your API endpoints match between frontend and backend
4. **Network Errors**: Check if your Render service is in "sleep" mode (on free tier)

## 6. Local Development

For local development:

1. Create a `.env.local` file in your Frontend folder
2. Add `VITE_API_URL=http://localhost:5000` (or your local backend port)
3. Run your backend locally with `npm run dev`
4. Run your frontend with `npm run dev`

## 7. Production Deployment

When making changes:

1. Push changes to your repository
2. For manual deployments to Netlify:
   - Run `npm run build` in the Frontend folder
   - Upload the `dist` folder to Netlify
3. For the backend on Render:
   - Push changes to your connected repository
   - Render will automatically deploy updates