require("dotenv").config(); //ENVIRONMENTAL VARIABLES

// DEPENDENCIES
const { PORT = 4500, NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();
const cors = require("cors");
const itemsRouter = require("./controllers/items/items");
const userRouter = require("./controllers/user/user");
const costumesRouter = require("./controllers/costumes/costumes");
const morgan = require("morgan");
const mongoose = require("./DB/connect");
const auth = require("./auth");

//MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//ROUTERS
app.use("/items", itemsRouter);
app.use("/auth", userRouter);
app.use("/costumes", costumesRouter);
//test auth middleware
app.get("/", auth, (req, res) => {
  res.json(req.payload);
});

//LISTENER
app.listen(PORT, () => {
  console.log(`listening on PORT${PORT}`);
});
