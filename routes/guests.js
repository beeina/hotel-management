const express = require("express");
const router = express.Router();

const guestsCtrl = require("../controllers/guests");
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /habits
router.get('/', guestsCtrl.index);
// GET /habits/new
router.get('/new', ensureLoggedIn, guestsCtrl.new);
// GET /habits/:id (show functionality)
// router.get('/:id', guestsCtrl.show);
// POST /habits
router.post('/', guestsCtrl.add);

module.exports = router;
