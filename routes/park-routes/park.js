const express = require('express');
const router = express.Router();

const Park = require('../../models/Park.model');
const User = require('../../models/User.model');

// const isLoggedIn = require('../../middleware/isLoggedIn');
// const isLoggedOut = require('../../middleware/isLoggedOut');

// let map;
// let service;

// service = new google.maps.places.PlacesService(map);
// service.nearbySearch(request, callback);

router.get('/', (req, res, next) => {
  // console.log('==== ROUTE HIT ====')

  res.render('park/parks')
});


module.exports = router;