import { useState } from "react";
import axios from "axios";
import "./UrlForm.css"; 

function UrlForm() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/shorten", { longUrl });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      alert("Error creating short URL");
    }
  };

  return (
    <div className="url-wrapper">
      <div className="url-card">
        <h2 className="title">🔗 URL Shortener</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter long URL"
            className="url-input"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <button type="submit" className="url-btn">
            Shorten URL
          </button>
        </form>

        {shortUrl && (
          <div className="result">
            <p>Your short URL:</p>
            <a href={shortUrl} target="_blank" rel="noreferrer">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default UrlForm;
