// =====================
// 📁 backend/routes/mintRoute.js
// =====================

const express = require("express");
const router = express.Router();
const mintController = require("../controllers/mintController");

// POST /api/mint
router.post("/", mintController);

module.exports = router;