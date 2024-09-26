const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Import routes
const movieRoutes = require("./routes/movies");

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Backend Routes
app.use("/movies", movieRoutes);

// Server Gateway Response
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`API is now available on port ${PORT}`);
});
