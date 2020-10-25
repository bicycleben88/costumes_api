//DEPENDENCIES
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4500;
const itemsRouter = require('./controllers/items/items');

//MIDDLEWARE
app.use('/items', itemsRouter);

//LISTENER
app.listen(PORT, () => {
    console.log(`listening on PORT${PORT}`)
});