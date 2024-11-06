// src/routes/movieRoutes.js
const express = require('express');
const router = express.Router();
const { listMovies, recommendMovie, rateMovie } = require('../controllers/movieController');

router.get('/movies', listMovies);
router.get('/recommend', recommendMovie);
router.post('/movies/:id/rate', rateMovie);

module.exports = router;