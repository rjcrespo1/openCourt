const express = require('express');
const router = express.Router();

const isLoggedIn = require('../../middleware/isLoggedIn');

const Game = require('../../models/Game.model');
const User = require('../../models/User.model');



router.get('/', isLoggedIn, (req, res, next) => {
  // console.log('==== ROUTE HIT ====')

  res.render('game/games')
});

router.post('/', (req, res, next) => {
  const newGame = new Game
})



module.exports = router;