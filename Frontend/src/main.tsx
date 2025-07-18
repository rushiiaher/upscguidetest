import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Make environment variables available globally
window.ENV = {
  VITE_API_URL: import.meta.env.VITE_API_URL || 'https://upscguidetest.onrender.com'
};

// Log the API URL to help with debugging
console.log('API URL:', window.ENV.VITE_API_URL);

createRoot(document.getElementById("root")!).render(<App />);
