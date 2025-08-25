const express = require("express");
const router = express.Router();
const { createShortUrl, redirectUrl, getAllUrls } = require("../controllers/urlController");

router.post("/shorten", createShortUrl);
router.get("/admin/all", getAllUrls);
router.get("/:shortCode", redirectUrl);   // <-- this handles /abc123

module.exports = router;
