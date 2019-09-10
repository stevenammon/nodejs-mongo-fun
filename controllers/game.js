const Game = require('../models/game');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.game_create = function (req, res) {
    let game = new Game(
        {
            name: req.body.name,
            winningPoints: req.body.winningPoints
        }
    );

    game.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Game Created successfully')
    })
};

exports.game_details = function (req, res) {
    Game.findById(req.params.id, function (err, game) {
        if (err) return next(err);
        res.send(game);
    })
};

exports.game_update = function (req, res) {
    Game.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, game) {
        if (err) return next(err);
        res.send('Game udpated.');
    });
};

exports.game_delete = function (req, res) {
    Game.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};