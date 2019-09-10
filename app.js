const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const game = require('./routes/game'); // Imports routes for the products
const app = express();

// load env vars
const dotenv = require('dotenv');
dotenv.config();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@${process.env.MONGO_URL}`;
let mongoDB = dev_db_url;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/game', game);

let port = 8080;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});