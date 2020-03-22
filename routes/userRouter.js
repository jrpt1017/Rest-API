/* eslint-disable import/newline-after-import */
const express = require('express');
const User = require('../models/userModel');
const router = express.Router();


const getUserId = async (req, res, next) => {
  let user;
  try {
    user = await User.findById(req.params.id);
    if (user === null) {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.user = user;

  next();
};

// Get all
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single
router.get('/:id', getUserId, (req, res) => {
  res.send(res.user);
});

// Add user
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

// Update
router.patch('/:id', getUserId, async (req, res) => {
  console.log(req.body.name);
  if (req.body.name !== null) {
    res.user.name = req.body.name;
  }
  if (req.body.age !== null) {
    res.user.age = req.body.age;
  }
  try {
    const updatedUser = await res.user.save();
    res.status(201).json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await User.remove();
    res.json({ message: 'Deleted user' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete('/', async (req, res) => {
  try {
    await User.deleteMany();
    res.status(200).json({ message: 'Deleted all user' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
