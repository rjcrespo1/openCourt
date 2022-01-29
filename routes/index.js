const express = require('express');
const router  = express.Router();
const Park = require('./../models/Park.model');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.post('/', (req, res, next) => {
  const { longitude, latitude, name } = req.body;

  const newPark = new Park({
    name,
    location: {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
  });

  newPark
    .save()
    .then(park => {
      res.redirect('/')
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
