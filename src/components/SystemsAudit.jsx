import React from 'react';
import '../App.css';

function SystemsAudit() {
    return (
        <div className="App loaded">
            <div className="container" style={{ position: 'relative' }}>
                <div className="header-row">
                    <button
                        className="back-button"
                        onClick={() => window.history.back()}
                        aria-label="Back to links"
                        type="button"
                    >
                        ←
                    </button>
                </div>
                <div className="profile fade-in">
                    <img src="/profile.jpeg" alt="Profile" className="profile-image" />
                    <h1>Josh Stewart</h1>
                    <p className="profile-bio">skills that scale • agents in training</p>
                    <p className="profile-tagline">systems, silence & real-world AI</p>
                </div>

                <div className="links-section fade-in">
                    <h2>The Systems Audit™</h2>

                    {/* VSL Placeholder */}
                    <div className="vsl-container">
                        <div className="vsl-placeholder">
                            Video Letter Coming Soon...
                        </div>
                    </div>

                    <p className="audit-intro">
                        Your backend's a mess - buried in tabs, bloated with tools, stitched together with duct tape and good intentions. You're drowning in tech, but starving for clarity.
                        <br /><br />
                        The Systems Audit is a 1:1 teardown for <strong>founders</strong>, <strong>solo operators</strong>, and <strong>lean teams</strong>. We cut through the noise, map your actual workflows, and show you where automation and agents make sense - not as buzzwords, but as ROI.
                    </p>

                    <div className="audit-section">
                        <h3>What You Get</h3>
                        <ul>
                            <li>✓ 60-minute consult (Zoom or in-person)</li>
                            <li>✓ Custom systems map</li>
                            <li>✓ AI + automation opportunities</li>
                            <li>✓ Deployment checklist for your first agent</li>
                            <li>✓ 100% money-back guarantee</li>
                        </ul>
                    </div>

                    <div className="audit-section">
                        <h3>Who It's For</h3>
                        <p>
                            Founders. Solo operators. Coaches. Small teams.
                            <br />
                            Anyone stuck spending time on things they *should* have systemised by now.
                        </p>
                        <p className="audit-subtext">
                            You don't need a CTO or a dev team to start using AI in your ops. You just need someone to show you where to start — and what to stop doing.
                        </p>
                    </div>

                    <div className="audit-section">
                        <h3>Choose Your Path</h3>
                        <p>

                            <a href="https://cal.com/joshlukestewart/systems-audit" target="_blank" rel="noopener noreferrer" className="audit-book">
                                <strong>The Systems Audit™ – $299 AUD</strong><br />                            </a>
                            <br /><br />

                            <a href="https://cal.com/joshlukestewart/discovery" target="_blank" rel="noopener noreferrer" className="audit-book">
                                <strong>Discovery Call – Systems Triage™ – $79 AUD</strong><br />                            </a>
                        </p>
                        <p className="audit-subtext">
                            Not sure what you need yet? The Discovery Call is a short triage session to diagnose your biggest tech inefficiencies and determine if a full audit is the right move.
                        </p>
                    </div>

                    <p className="audit-note">
                        This isn't theory. Every audit feeds into my real agent pipeline — trained on your friction, deployed for your freedom.
                    </p>
                </div>

                <footer className="fade-in">
                    <p>© 2025 Josh Stewart</p>
                </footer>
            </div>
        </div>
    );
}

export default SystemsAudit;