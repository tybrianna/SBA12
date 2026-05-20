// Depencencies
require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const app = express();
const PORT = process.env.PORT;

// Middleware
// Route
// Port