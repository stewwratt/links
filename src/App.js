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
            <p>Join the waitlist for my barber booking platform</p>
          </a>

          <a
            href="https://listmonk.unbooked.me/subscription/form"
            className="link-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Newsletter</h3>
            <p>Subscribe to my weekly newsletter</p>
          </a>
        </div>

        <div className="social-links">
          <a
            href="https://tiktok.com/@joshlukestewart"
            className="social-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 4h1.5c1.07 2.48 3.77 3.97 6.5 4v2c-1.2-.05-2.4-.4-3.5-1v5c0 5.5-6 7-8.5 3-2.5-4 1-8.5 5.5-7.5v2c-.76-.12-2.51-.25-3 1C6 15 9 16.5 9 14V4z"></path>
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
