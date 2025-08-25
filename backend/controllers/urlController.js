const Url = require("../models/Url");
// const shortid = require("shortid");
const { nanoid } = require("nanoid");


// POST /api/shorten
exports.createShortUrl = async (req, res) => {
  const { longUrl } = req.body;
  if (!longUrl) return res.status(400).json({ message: "URL is required" });

  try {
    const shortCode = nanoid(6);
    const newUrl = new Url({ longUrl, shortCode });
    await newUrl.save();

   res.json({
  shortUrl: `http://localhost:5000/${shortCode}`, // ✅ backend domain
  longUrl
});

  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET /:shortCode
exports.redirectUrl = async (req, res) => {
  try {
    const url = await Url.findOne({ shortCode: req.params.shortCode });
    if (!url) return res.status(404).json({ message: "Not found" });

    url.clicks++;
    await url.save();

    res.redirect(url.longUrl);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// GET /api/admin/all (bonus)
exports.getAllUrls = async (req, res) => {
  try {
    const urls = await Url.find();
    res.json(urls);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
