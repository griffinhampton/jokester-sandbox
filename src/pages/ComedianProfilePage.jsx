import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import upRightArrowIcon from '../assets/up-right-arrow.svg';
import globeIcon from '../assets/social-media-icons/globe-icon.svg';
import instaIcon from '../assets/social-media-icons/instagram-icon.svg';
import tiktokIcon from '../assets/social-media-icons/tiktok-icon.svg';
import xIcon from '../assets/social-media-icons/x-icon.svg';
import ytIcon from '../assets/social-media-icons/youtube-icon.svg';
import chevronRightIcon from '../assets/video-player-icons/chevron-right.svg';
import './ComedianProfilePage.css';

export default function ComedianProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Content');

  useEffect(() => {
    const container = document.querySelector('.page-content');
    if (container) container.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [id]);

  const tourDates = [
    { date: 'February 10', time: '7:00 PM', venue: 'Arlington Theater', loc: 'Arlington, VA' },
    { date: 'February 15', time: '8:00 PM', venue: 'The Wilbur', loc: 'Boston, MA' },
    { date: 'February 22', time: '7:30 PM', venue: 'Comedy Underground', loc: 'New York, NY' },
    { date: 'March 4', time: '8:00 PM', venue: 'The Comedy Bar', loc: 'Chicago, IL' },
    { date: 'March 11', time: '9:00 PM', venue: 'Zanies Comedy', loc: 'Chicago, IL' },
    { date: 'March 17', time: '8:00 PM', venue: 'The Comedy Store', loc: 'Los Angeles, CA' },
  ];

  const merchItems = [
    { title: 'Anthony Jeselnik', price: '$44.99', img: '/comedianpics/image 4.png' },
    { title: 'Comedy Cellar Hoodie', price: '$64.99', img: '/comedianpics/image 5.png' },
    { title: 'Zanies Poster', price: '$24.99', img: '/comedianpics/image 7.png' },
    { title: 'Laugh Factory Mug', price: '$12.99', img: '/comedianpics/Image (8).png' },
  ];
  
  const specials = [
    { title: 'Emotionally Available, Unfortunately', img: '/comedianpics/playback-image.png', badge: 'New' },
    { title: 'Good Boys', img: '/comedianpics/image 5.png' },
    { title: 'The Crowd Work Special', img: '/comedianpics/image 7.png' },
  ];

  return (
    <div className="comedian-layout">
      <Sidebar />
      <div className="comedian-main">
        
        <div className="comedian-hero">
          <div className="comedian-hero-bg" style={{ backgroundImage: `url("/comedianpics/playback-image.png")` }}></div>
          
          <button className="back-to-home-btn" onClick={() => navigate(-1)}>
             <img src={chevronRightIcon} alt="Back" style={{ transform: 'rotate(180deg)', width: '22px' }} />
          </button>

          <div className="comedian-hero-content">
            <h1 className="comedian-title">LUCAS ZELNICK</h1>
            <div className="social-links">
               <a href="https://x.com" target="_blank" className="social-icon"><img src={xIcon} alt="X" /></a>
               <a href="https://instagram.com" target="_blank" className="social-icon"><img src={instaIcon} alt="Instagram" /></a>
               <a href="https://youtube.com" target="_blank" className="social-icon"><img src={ytIcon} alt="YouTube" /></a>
               <a href="https://tiktok.com" target="_blank" className="social-icon"><img src={tiktokIcon} alt="TikTok" /></a>
               <a href="https://google.com" target="_blank" className="social-icon"><img src={globeIcon} alt="Website" /></a>
            </div>
          </div>
        </div>

        <div className="comedian-tabs-container">
          <button className={`comedian-tab ${activeTab === 'Content' ? 'active' : ''}`} onClick={() => setActiveTab('Content')}>Content</button>
          <button className={`comedian-tab ${activeTab === 'Merch' ? 'active' : ''}`} onClick={() => setActiveTab('Merch')}>Merch</button>
          <button className={`comedian-tab ${activeTab === 'Tour' ? 'active' : ''}`} onClick={() => setActiveTab('Tour')}>Tour</button>
          <button className={`comedian-tab ${activeTab === 'About' ? 'active' : ''}`} onClick={() => setActiveTab('About')}>About</button>
        </div>

        <div className="comedian-tab-content">
          {activeTab === 'Content' && (
            <div className="content-grid-wrapper">
               <h3 className="section-header">Lucas's Specials</h3>
               <div className="specials-grid">
                  {specials.map((s, i) => (
                    <div className="special-card" key={i} onClick={() => navigate(`/checkout/lucas`)}>
                       <div className="special-img" style={{ backgroundImage: `url("${s.img}")` }}>
                          {s.badge && <span className="special-badge">{s.badge}</span>}
                       </div>
                       <p className="special-title">{s.title}</p>
                    </div>
                  ))}
               </div>
            </div>
          )}

          {activeTab === 'Merch' && (
            <div className="content-grid-wrapper">
               <h3 className="section-header">Merch</h3>
               <div className="comedian-merch-grid">
                 {merchItems.map((merch, idx) => (
                   <div key={idx} className="comedian-merch-card">
                     <div className="comedian-merch-img" style={{ backgroundImage: `url("${merch.img}")` }}></div>
                     <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>{merch.title}</div>
                     <div style={{ color: '#888', fontSize: '0.95rem' }}>{merch.price}</div>
                   </div>
                 ))}
               </div>
             </div>
          )}

          {activeTab === 'Tour' && (
            <div className="content-grid-wrapper">
              <h3 className="section-header">Tour Dates</h3>
              <div className="tour-list">
                {tourDates.map((tour, idx) => (
                  <div key={idx} className="tour-card">
                    <div className="tour-date-col">
                      <div className="tour-primary">{tour.date}</div>
                      <div className="tour-secondary">{tour.time}</div>
                    </div>
                    
                    <div className="tour-venue-col">
                      <div className="tour-primary">{tour.venue}</div>
                      <div className="tour-secondary">{tour.loc}</div>
                    </div>
                    
                    <button className="tour-buy-btn">
                      Buy Tickets 
                      <img src={upRightArrowIcon} alt="Arrow" style={{ width: '12px', marginLeft: '6px' }} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'About' && (
            <div className="content-grid-wrapper">
              <h3 className="section-header">About</h3>
              <div className="about-text">
                <p>Lucas Zelnick has been making audiences laugh for over a decade with his sharp observational humor and quick wit. In "Emotionally Available, Unfortunately," he tackles the modern dating landscape with brutal honesty and self-deprecating charm.</p>
                <br/>
                <p>From therapy breakthroughs to dating app disasters, Lucas shares stories that will make you laugh, cringe, and maybe text your ex. This special captures everything that's made him a viral sensation - the timing, the relatability, and the willingness to be painfully honest about his own romantic failures.</p>
                <br/>
                <p>Recorded live at a sold-out show in Brooklyn, this is Lucas at his most vulnerable and hilarious.</p>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
