# Vercel Deployment Instructions

Since we're having issues with the monorepo structure, follow these steps to deploy just the Frontend to Vercel:

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New" > "Project"
3. Import your GitHub repository
4. In the configuration screen:
   - Set the Root Directory to `Frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click Deploy

This will deploy only the Frontend directory as a standalone project, which should resolve the directory structure issues.