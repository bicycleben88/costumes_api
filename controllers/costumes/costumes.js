// Dependencies
const express = require("express");
const { Model } = require("mongoose");
const auth = require("../../auth");
const costume = express.Router();
const Costume = require("../../models/costumes/costumes");

// Routes
//Index
costume.get("/", auth, async (req, res) => {
  const { username } = req.payload;
  try {
    res.status(200).json(await Costume.find({ username }));
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
//Delete
costume.delete("/:id", auth, async (req, res) => {
  try {
    res.json(await Costume.findByIdAndDelete(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
//Create
costume.post("/", auth, async (req, res) => {
  const { username } = req.payload;
  req.body.username = username;
  try {
    res.json(await Costume.create(req.body));
  } catch (error) {
    res.status(400).json({ error: error });
  }
});
//Update
costume.put("/:id", auth, async (req, res) => {
  const { username } = req.payload;
  req.body.username = username;
  try {
    res
      .status(200)
      .json(
        await Costume.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
  } catch (error) {
    res.status(400).json({ error: error });
  }
});

module.exports = costume;
