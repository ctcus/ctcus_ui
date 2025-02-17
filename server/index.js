const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./dbConfig");
const memberRoutes = require("./routes/member");
// require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware

// MongoDB connection
connectDB();

// Use List routes
app.use("/member", memberRoutes);

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
