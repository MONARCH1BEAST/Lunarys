const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Create anonymous user
router.post("/anonymous", async (req, res) => {
  try {
    const username =
      "anon_" + Math.random().toString(36).substring(2, 10);

    const user = await User.create({ username });

    res.json({ username: user.username });
  } catch (err) {
    res.status(500).json({ message: "Could not create anonymous user" });
  }
});

module.exports = router;
