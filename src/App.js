import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="profile">
          <img src="/profile.jpeg" alt="Profile" className="profile-image" />
          <h1>Josh Stewart</h1>
          <p className="profile-bio">Systems engineer / ex-barber</p>
          <p className="profile-tagline">Fueled by silence + signal</p>
          <div className="profile-stats">
            <span>19.6K Followers</span>
            <span>273.7K Likes</span>
          </div>
        </div>

        <div className="links-section">
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

        <div className="social-icons">
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

        <footer>
          <p>© 2025 Josh Stewart</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
