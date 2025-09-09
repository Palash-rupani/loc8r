const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/', ctrlLocations.homelist);
router.get('/location/:id', ctrlLocations.locationInfo);          // dynamic id
router.get('/location/:id/review/new', ctrlLocations.addReview);  // dynamic id for review

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
