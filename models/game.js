const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let GameSchema = new Schema({
    name: {type: String, required: true, max: 100},
    winningPoints: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Game', GameSchema);