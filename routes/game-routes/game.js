const express = require('express');
const router = express.Router();

const isLoggedIn = require('../../middleware/isLoggedIn');

const Game = require('../../models/Game.model');
const User = require('../../models/User.model');



router.get('/', isLoggedIn, (req, res, next) => {
  // console.log('==== ROUTE HIT ====')

  res.render('game/games')
});

router.post('/', isLoggedIn, (req, res, next) => {
  const newGame = new Game({
    date: req.body.date,
    startTime: req.body.time,
    parkAddress: req.body.parkAddress,
    user: req.user._id
  })

  newGame
    .save()
    .then(game => {
      res.redirect('/')
    })
    .catch(error => {
      next(error);
    });
});



module.exports = router;