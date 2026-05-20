const axios = require("axios");

const BASE_URL = "http://www.omdbapi.com/";

// Search Movies
const searchMovies = async (req, res) => {
  const title = req.query.title;

  if (!title) {
    return res.status(400).json({
      error: "Title query parameter is required",
    });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        s: title,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch movies",
      details: error.response?.data || error.message,
    });
  }
};

// Get Movie Details
const getMovieDetails = async (req, res) => {
  const movieId = req.params.id;

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        i: movieId,
        apikey: process.env.OMDB_API_KEY,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Failed to fetch movie details",
      details: error.response?.data || error.message,
    });
  }
};

module.exports = {
  searchMovies,
  getMovieDetails,
};