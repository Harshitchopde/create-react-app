
const express = require("express");
const { default: Demo } = require("../models/Demo");
const { createStudent } = require("../controllers/demo");
const router = express.Router();

// define your routes
router.post("/",createStudent)

export default router;