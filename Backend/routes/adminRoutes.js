const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Middleware to check admin authentication
const checkAdminAuth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];
  
  // Simple authentication check (in production, use proper JWT)
  if (token === 'true') {
    next();
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};

// Get all contacts (with optional filtering)
router.get('/contacts', checkAdminAuth, async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ submittedAt: -1 });
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;