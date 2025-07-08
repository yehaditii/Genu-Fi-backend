const express = require("express");
const router = express.Router();
const { mintCertificate } = require("../controllers/mintController");

// ✅ Correct usage — pass the function directly
router.post("/mint", mintCertificate);

module.exports = router;
