const express = require("express");
const router = express.Router();

const Thought = require("../models/thought");
const User = require("../models/user");
const timeLock = require("../middleware/timelock");

// CREATE a thought
router.post("/", timeLock, async (req, res) => {
  try {
    const { content, username } = req.body;

    if (!content || !username) {
      return res
        .status(400)
        .json({ message: "Content and username required" });
    }

    let user = await User.findOne({ username });
    if (!user) {
      user = await User.create({ username });
    }

    const thought = await Thought.create({
      content,
      user: user._id,
    });

    res.status(201).json(thought);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET all thoughts
router.get("/", timeLock, async (req, res) => {
  try {
    const thoughts = await Thought.find()
      .populate("user", "username")
      .sort({ createdAt: -1 });

    res.json(thoughts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
