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
const costumesRouter = require('./controllers/costumes/costumes');
//MORGAN
const morgan = require('morgan');
//MONGO
const mongoose = require('./DB/connect');
//AUTH 
const auth = require('./auth');

//---------------
//--MIDDLEWARE
//---------------
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

//ROUTERS
app.use('/items', itemsRouter);
app.use('/auth', userRouter);
app.use('/costumes', costumesRouter)
//test auth middleware
app.get('/', auth, (req, res) => {
    res.json(req.payload);
});

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on PORT${PORT}`)
});