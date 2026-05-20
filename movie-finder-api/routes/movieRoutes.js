const express = require("express");
const router = express.Router();

const {
  searchMovies,
  getMovieDetails,
} = require("../controllers/movieController");

// Search movies
router.get("/search", searchMovies);

// Get movie details by IMDb ID
router.get("/movies/:id", getMovieDetails);

module.exports = router;