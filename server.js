//---------------
//--ENVIRONMENTAL VARIABLES
//---------------
require("dotenv").config();
const { PORT = 4500, NODE_ENV = "development" } = process.env;
//EXPRESS
const express = require('express');
const app = express();
//CORS
const cors = require('cors');
//IMPORT ROUTERS
const itemsRouter = require('./controllers/items/items');
const userRouter = require('./controllers/user/user');
//MORGAN
const morgan = require('morgan');
//MONGO
const mongoose = require('./DB/connect');

//---------------
//--MIDDLEWARE
//---------------
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//ROUTERS
app.use('/items', itemsRouter);
app.use('/auth', userRouter);

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on PORT${PORT}`)
});