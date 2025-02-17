const express = require("express");
const createCrudRoutes = require("./createCrudRoutes");
const Member = require("../models/member");

const router = express.Router();
const crudRoutes = createCrudRoutes(Member);

// Use CRUD routes
router.use("/", crudRoutes);

module.exports = router;
