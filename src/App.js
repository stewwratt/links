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
          <h2>Links</h2>

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

        <div className="social-links">
          <a
            href="https://tiktok.com/@joshlukestewart"
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 256 256" fill="currentColor">
              <path d="M216.49 88a72.08 72.08 0 0 1-41.17-13.09A71.72 71.72 0 0 1 152 39.51V160a64 64 0 1 1-64-64 62.7 62.7 0 0 1 15.63 2A40 40 0 1 0 104 200a40 40 0 0 0 40-40V24h32a56.06 56.06 0 0 0 56 56Z"></path>
            </svg>
            TikTok: @joshlukestewart
          </a>

          <a
            href="https://linkedin.com/in/joshualukestewart"
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            LinkedIn: joshualukestewart
          </a>

          <a
            href="https://instagram.com/joshlukestewart"
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            Instagram: @joshlukestewart
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
