//Dependencies

require("dotenv").config();
const User = require("../../models/user/user");
const { Router } = require("express");
const router = Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;

//Routes

//Sign Up
router.post("/signup", async (req, res) => {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json({ err });
  }
});

//Log In
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username }); //check for username
    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        const token = await jwt.sign({ username }, SECRET);
        res.status(200).json({ token: token });
      } else {
        res.status(400).json({ error: "PASSWORD DOES NOT MATCH" });
      }
    } else {
      res.status(400).json({ error: "USERNAME NOT FOUND" });
    }
  } catch (err) {
    res.status(400).json({ err });
  }
});

module.exports = router;
