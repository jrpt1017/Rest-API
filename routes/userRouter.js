/* eslint-disable import/newline-after-import */
const express = require('express');
const User = require('../models/userModel');
const router = express.Router();

// Get all
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/:id', (req, res) => {
  res.send('im on users router id');
});

router.post('/', async (req, res) => {
  const newUser = new User({
    name: req.body.name,
    age: req.body.age,
  });
  try {
    const saveData = await newUser.save();
    res.status(201).json(saveData);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', (req, res) => {
  res.send('im on users router');
});

router.delete('/:id', (req, res) => {
  res.send('im on users router');
});
// Get one

module.exports = router;
