const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./config/db');
const Contact = require('./models/Contact');
const adminRoutes = require('./routes/adminRoutes');

const app = express();

app.use(cors({
  origin: '*',
  credentials: true
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

app.post('/api/contact', async (req, res) => {
  try {
    const contact = new Contact(req.body);
    await contact.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Admin routes
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});