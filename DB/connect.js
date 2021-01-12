require("dotenv").config(); // ENVIRONMENTAL VARIABLES

//MONGOOSE CONNECTION
const { mongoURI } = process.env;
const mongoose = require("mongoose");
const config = { useUnifiedTopology: true, useNewUrlParser: true };
const DB = mongoose.connection;

mongoose.connect(mongoURI, config);

DB.on("open", () => console.log(`you're connected to mongo`))
  .on("close", () => console.log(`disconnected to mongo`))
  .on("error", (err) => console.log(err));

module.exports = mongoose;
