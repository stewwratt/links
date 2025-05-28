import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SystemsAudit from './components/SystemsAudit';

function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [elementsLoaded, setElementsLoaded] = useState({
    profile: false,
    links: false,
    social: false,
    footer: false
  });

  useEffect(() => {
    // Reset state to all hidden on mount
    setIsLoaded(false);
    setShowContent(false);
    setElementsLoaded({
      profile: false,
      links: false,
      social: false,
      footer: false
    });

    // Initial loading delay
    const initialTimer = setTimeout(() => {
      setIsLoaded(true);

      // Show content after a short delay
      setTimeout(() => {
        setShowContent(true);

        // Staggered loading of elements
        const timers = [
          setTimeout(() => setElementsLoaded(prev => ({ ...prev, profile: true })), 300),
          setTimeout(() => setElementsLoaded(prev => ({ ...prev, links: true })), 600),
          setTimeout(() => setElementsLoaded(prev => ({ ...prev, social: true })), 900),
          setTimeout(() => setElementsLoaded(prev => ({ ...prev, footer: true })), 1100)
        ];

        return () => timers.forEach(timer => clearTimeout(timer));
      }, 400);
    }, 800);

    return () => clearTimeout(initialTimer);
  }, []);

  return (
    <div className={`App ${isLoaded ? 'loaded' : ''}`}>
      {!showContent ? (
        <div className="loader">
          <div className="loader-circle"></div>
        </div>
      ) : (
        <div className="container">
          <div className={`profile ${elementsLoaded.profile ? 'fade-in' : ''}`}>
            <img src="/profile.jpeg" alt="Profile" className="profile-image" />
            <h1>Josh Stewart</h1>
            <p className="profile-bio">skills that scale • agents in training</p>
            <p className="profile-tagline">systems, silence & real-world AI</p>
            <div className="profile-stats">
              {/* <span>19.6K Followers</span>
              <span>273.7K Likes</span> */}
            </div>
          </div>

          <div className={`links-section ${elementsLoaded.links ? 'fade-in' : ''}`}>
            <Link to="/the-systems-audit" className="link-card">
              <h3>The Systems Audit™</h3>
              <p>Struggling to make your tools talk? Start here.</p>
            </Link>

            <a
              href="https://join.unbooked.me"
              className="link-card featured-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="status-indicator">
                <span className="status-dot"></span>
                <span className="status-text">NEW</span>
              </div>
              <h3>Free Price Increase Calculator</h3>
              <p>Discover your hidden revenue potential in 60 seconds</p>
            </a>

            <a
              href="https://listmonk.unbooked.me/subscription/form"
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Newsletter</h3>
              <p>Get weekly updates, ideas, and resources - no spam, just useful stuff.</p>
            </a>
          </div>

          <div className={`social-icons ${elementsLoaded.social ? 'fade-in' : ''}`}>
            <a
              href="https://tiktok.com/@joshlukestewart"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/tiktok.png" alt="TikTok" />
            </a>

            <a
              href="https://linkedin.com/in/joshualukestewart"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/linkedin-circled.png" alt="LinkedIn" />
            </a>

            <a
              href="https://instagram.com/joshlukestewart"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" />
            </a>
          </div>

          <footer className={elementsLoaded.footer ? 'fade-in' : ''}>
            <p>© 2025 Josh Stewart</p>
          </footer>
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-systems-audit" element={<SystemsAudit />} />
      </Routes>
    </Router>
  );
}

export default App;
