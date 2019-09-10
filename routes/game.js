const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const game_controller = require('../controllers/game');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', game_controller.test);

router.post('/create', game_controller.game_create);

router.get('/:id', game_controller.game_details);

router.put('/:id', game_controller.game_update);

router.delete('/:id', game_controller.game_delete);

module.exports = router;