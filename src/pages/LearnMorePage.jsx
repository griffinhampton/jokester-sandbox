import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

import greenCheck from '../assets/learn-more/green-check-icon.svg';
import redX from '../assets/learn-more/red-x-icon.svg';
import redLine from '../assets/learn-more/red-line.svg';
import shieldIcon from '../assets/learn-more/shield-icon.svg';
import singlePersonIcon from '../assets/learn-more/single-person-icon.svg';
import twoPeopleIcon from '../assets/learn-more/two-people-icon.svg';
import videoEditIcon from '../assets/learn-more/video-edit-icon.svg';
import './LearnMorePage.css';

export default function LearnMorePage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submitApplication = (e) => {
    e.preventDefault();
    alert("Application submitted successfully!");
    navigate(-1);
  };

  return (
    <div className="lm-layout">
      <Sidebar />

      <div className="lm-main">
        {/* Top bar */}
        <div className="lm-top-nav">
           <div style={{flex: 1}}></div>
           <Link to="/login" className="lm-nav-link">Sign In</Link>
           <Link to="/register" className="btn btn-primary">Get Started</Link>
        </div>

        {/* Hero */}
        <section className="lm-hero">
          <div className="lm-hero-badge"><span className="red-dot"></span> FOR COMEDIANS</div>
          <h1 className="lm-hero-title">GROW YOUR BRAND.<br/>OWN YOUR CAREER.</h1>
          <p className="lm-hero-desc">The platform built for stand-up. Jokester lets you build a global audience, monetize your content directly, and keep the data you capture along the way.</p>
          <p className="lm-hero-quote">- Comedian, New York</p>
          <div className="lm-hero-actions">
            <button className="btn btn-white lm-hero-btn" onClick={() => document.getElementById('apply-form').scrollIntoView({behavior: 'smooth'})}>Apply Now</button>
            <button className="btn btn-outline lm-hero-btn">Learn More</button>
          </div>
        </section>

        {/* Features Cards */}
        <section className="lm-features">
          <h2 className="lm-section-title">You Keep 100%. You Own<br/>Everything.</h2>
          
          <div className="lm-cards-grid">
             {/* Card 1 */}
             <div className="lm-feature-card">
               <div className="lm-icon-box"><img src={videoEditIcon} alt="Video" /></div>
               <h3>Sell PPV Tickets</h3>
               <ul>
                 <li>Keep 100% of ticket sales</li>
                 <li>Launch exclusive live stream events</li>
                 <li>Offer VOD to global audiences</li>
               </ul>
             </div>
             
             {/* Card 2 */}
             <div className="lm-feature-card">
               <div className="lm-icon-box"><img src={twoPeopleIcon} alt="People" /></div>
               <h3>Own Your Audience</h3>
               <ul>
                 <li>Full access to fan contact data for retargeting</li>
                 <li>Integrate direct email lists of buyers</li>
                 <li>Build relationships independent of algorithms</li>
               </ul>
             </div>

             {/* Card 3 */}
             <div className="lm-feature-card">
               <div className="lm-icon-box"><img src={shieldIcon} alt="Shield" /></div>
               <h3>Protect Your Work</h3>
               <ul>
                 <li>Full DRM protection</li>
                 <li>No unauthorized downloads</li>
                 <li>No algorithm shadowbans</li>
               </ul>
             </div>
          </div>
        </section>

        {/* Table Comparison */}
        <section className="lm-comparison">
          <h2 className="lm-section-title-center">Why Comedians Choose<br/>Jokester</h2>
          
          <div className="lm-table-wrapper">
            <table className="lm-table">
              <thead>
                <tr>
                  <th></th>
                  <th>JOKESTER</th>
                  <th>NETFLIX</th>
                  <th>PRIME</th>
                  <th>HULU</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Revenue Upload</td>
                  <td><img src={greenCheck} alt="Yes" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                </tr>
                <tr>
                  <td>Own Your Data</td>
                  <td><img src={greenCheck} alt="Yes" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                </tr>
                <tr>
                  <td>No Algorithm Theater</td>
                  <td><img src={greenCheck} alt="Yes" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                </tr>
                <tr>
                  <td>Reach Fans Anywhere</td>
                  <td><img src={greenCheck} alt="Yes" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                  <td><img src={redX} alt="No" /></td>
                </tr>
                <tr>
                  <td>Comedian Payout</td>
                  <td className="highlight-green">100%</td>
                  <td className="highlight-red">Varies</td>
                  <td className="highlight-red">$0</td>
                  <td className="highlight-red">$0</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Timeline */}
        <section className="lm-timeline">
           <h2 className="lm-section-title-center">How It Works</h2>
           <div className="lm-timeline-track">
             <div className="timeline-step">
                <div className="step-circle">01</div>
                <div className="step-label">Apply</div>
             </div>
             <img src={redLine} className="timeline-connector" alt="---" />
             <div className="timeline-step">
                <div className="step-circle">02</div>
                <div className="step-label">Get Approved</div>
             </div>
             <img src={redLine} className="timeline-connector" alt="---" />
             <div className="timeline-step">
                <div className="step-circle">03</div>
                <div className="step-label">Launch Your Special</div>
             </div>
             <img src={redLine} className="timeline-connector" alt="---" />
             <div className="timeline-step">
                <div className="step-circle">04</div>
                <div className="step-label">Get Paid</div>
             </div>
           </div>
        </section>

        {/* Photo Block */}
        <section className="lm-photo-block">
          <div className="photo-block-text">
             <h2>Built for Stand-Up.<br/>Not for Algorithms.</h2>
             <p>Unlike Netflix, Prime, or Hulu, Jokester was built specifically for comedians. You own your content, your fan data, and your revenue—no middle men, premium payment processing limits, or shadow-banning based on arbitrary community guidelines.</p>
          </div>
          <div className="photo-block-img" style={{backgroundImage: 'url("/comedianpics/image 7.png")'}}></div>
        </section>

        {/* Form */}
        <section className="lm-form-section" id="apply-form">
           <h2 className="lm-section-title-center">Apply to Join Jokester</h2>
           <p className="lm-form-subtitle">We review every application personally to ensure the platforms<br/>remain high quality and uncrowded. Apply below.</p>
           
           <form className="lm-application-form" onSubmit={submitApplication}>
              <div className="form-row">
                 <div className="input-group">
                   <label>First name</label>
                   <input type="text" placeholder="Jane" required />
                 </div>
                 <div className="input-group">
                   <label>Last name</label>
                   <input type="text" placeholder="Doe" required />
                 </div>
              </div>
              <div className="input-group">
                 <label>Stage name (Optional)</label>
                 <input type="text" placeholder="Enter stage name" />
              </div>
              <div className="input-group">
                 <label>Email</label>
                 <input type="email" placeholder="you@example.com" required />
              </div>
              <div className="input-group">
                 <label>Phone number</label>
                 <input type="tel" placeholder="(555) 123-4567" required />
              </div>
              <div className="input-group">
                 <label>Link to performance video</label>
                 <input type="url" placeholder="YouTube, Vimeo, etc." />
              </div>
              <div className="input-group">
                 <label>Message or notes</label>
                 <textarea placeholder="Enter message or notes"></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-app-btn">Submit Application</button>
           </form>
        </section>

        {/* Footer */}
        <footer className="lm-footer">
          © Jokester 2026. All rights reserved.
        </footer>
      </div>
    </div>
  );
}
