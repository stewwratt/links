import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [elementsLoaded, setElementsLoaded] = useState({
    profile: false,
    links: false,
    social: false,
    footer: false
  });

  useEffect(() => {
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
            <p className="profile-tagline">systems, silence & real-world AI </p>
            <div className="profile-stats">
              <span>19.6K Followers</span>
              <span>273.7K Likes</span>
            </div>
          </div>

          <div className={`links-section ${elementsLoaded.links ? 'fade-in' : ''}`}>
            <a
              href="https://join.unbooked.me"
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Unbooked Waitlist</h3>
              <p>Barber booking platform. Built different.</p>
            </a>

            <a
              href="https://listmonk.unbooked.me/subscription/form"
              className="link-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3>Newsletter</h3>
              <p>Weekly signal. Quiet. No hype. Just real.</p>
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

export default App;
