const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const game = require('./routes/game'); // Imports routes for the products
const app = express();
app.use('/game', game);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});