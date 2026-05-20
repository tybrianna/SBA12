// Depencencies
require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movieRoutes");
const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

// Route


// Port