const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const Contact = require('./models/Contact');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors());

// More detailed CORS for specific routes if needed
app.use('/api/contact', cors({
  origin: '*',
  methods: ['POST'],
  allowedHeaders: ['Content-Type']
}));

app.use('/api/admin', cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// Connect to MongoDB with retry logic
const connectWithRetry = async () => {
  const result = await connectDB();
  if (!result) {
    console.log('Retrying connection in 5 seconds...');
    setTimeout(connectWithRetry, 5000);
  }
};

connectWithRetry();

// Health check endpoint
app.get('/', (req, res) => {
  res.status(200).json({ status: 'ok', message: 'Server is running' });
});

app.post('/api/contact', async (req, res) => {
  try {
    console.log('Received form data:', req.body);
    
    // Ensure all required fields have at least default values
    const contactData = {
      fullName: req.body.fullName || '',
      email: req.body.email || '',
      mobile: req.body.mobile || '',
      aspirantType: req.body.aspirantType || 'full-time',
      attemptedPrelims: req.body.attemptedPrelims || 'no',
      currentCity: req.body.currentCity || ''
    };
    
    const contact = new Contact(contactData);
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Form submission error:', error.message);
    res.status(400).json({ error: error.message });
  }
});

// Admin routes
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});