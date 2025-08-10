import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/urls")
      .then((res) => res.json())
      .then((data) => setUrls(data))
      .catch((err) => console.error("Error fetching URLs:", err));
  }, [shortUrl]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setShortUrl("");
    try {
      const res = await fetch("http://localhost:5000/api/shorten", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ originalUrl }),
      });
      const data = await res.json();
      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        setOriginalUrl("");
      } else {
        setError(data.error || "Error shortening URL");
      }
    } catch {
      setError("Server error");
    }
    setLoading(false);
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-left">ChotuURL</div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Shorten Your URLs</h1>
        <p className="subtitle">
          Transform long, complex URLs into short, shareable links
        </p>
        <form className="shorten-form" onSubmit={handleSubmit}>
          <input
            id="url"
            type="url"
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            placeholder="Enter your long URL here..."
            required
            className="url-input"
          />
          <button type="submit" disabled={loading} className="shorten-btn">
            {loading ? "Shortening..." : "Shorten"}
          </button>
        </form>
        {error && <div className="error-msg">{error}</div>}
        {shortUrl && (
          <div className="short-url-result">
            <span>Shortened URL: </span>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </div>
        )}

        {/* URLs Table */}
        {urls.length > 0 && (
          <table className="urls-table">
            <thead>
              <tr>
                <th>Original URL</th>
                <th>Short URL</th>
              </tr>
            </thead>
            <tbody>
              {urls.map((url) => (
                <tr key={url.shortId}>
                  <td>{url.originalUrl}</td>
                  <td>
                    <a
                      href={url.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.shortUrl}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="social-links">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
            </svg>
          </a>
          <a href="mailto:contact@example.com" title="Email">
            <svg height="24" width="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 13.065l-11.99-7.065v14h23.98v-14l-11.99 7.065zm11.99-9.065h-23.98l11.99 7.065 11.99-7.065z" />
            </svg>
          </a>
        </div>
        <div>© 2025 Raghav Dadhich. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;
