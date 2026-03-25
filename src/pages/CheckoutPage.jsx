import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';
import Sidebar from '../components/Sidebar';
import upRightArrowIcon from '../assets/up-right-arrow.svg';
import chevronRightIcon from '../assets/video-player-icons/chevron-right.svg';
import './CheckoutPage.css';

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, ownsItem, purchase } = useUser();
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('Details');
  const [selectedPlan, setSelectedPlan] = useState('lifetime');

  useEffect(() => {
    // Force the global router container back to top upon navigation
    const container = document.querySelector('.page-content');
    if (container) container.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [id]);
  
  const item = getItemById(id);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

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

  const handlePurchase = () => {
    setLoading(true);
    setTimeout(() => {
      purchase(id || 'lucas');
      navigate(`/watch/${id || 'lucas'}`);
    }, 800);
  };

  const handleWatch = () => {
    navigate(`/watch/${id || 'lucas'}`);
  };

  const HeroItem = item || {
      title: 'EMOTIONALLY AVAILABLE, UNFORTUNATELY',
      author: 'Lucas Zelnick',
      image: '/comedianpics/playback-image.png',
      price: '$14.99'
  };

  return (
    <div className="checkout-layout">
      <Sidebar />
      <div className="checkout-main">
        
        <div className="checkout-hero">
          <div className="checkout-hero-bg" style={{ backgroundImage: `url("${HeroItem.image}")` }}></div>
          
          <button className="back-to-home-btn" onClick={() => navigate('/')}>
             <img src={chevronRightIcon} alt="Back to Home" style={{ transform: 'rotate(180deg)', width: '22px' }} />
          </button>

          <div className="checkout-hero-content">
            <span className="age-badge">HD</span>
            <h1 className="checkout-title">{HeroItem.title}</h1>
            <p className="checkout-author">
               <Link to={`/comedian/${id || 'lucas'}`} style={{ color: 'inherit', textDecoration: 'none' }} className="author-link">
                  {HeroItem.author}
               </Link>
            </p>
            <p className="checkout-desc">
              Lucas Zelnick has been making audiences laugh for over a decade with his sharp observational humor and quick wit. 
              In "Emotionally Available, Unfortunately," he tackles the modern dating landscape with brutal honesty and self-deprecating charm.
            </p>
            
            <div className="hero-action-buttons">
              <button className="action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg> Share
              </button>
              <button className="action-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg> Gift
              </button>
            </div>
          </div>
          
          <div className="checkout-purchase-card">
            <h3 className="purchase-card-title">Choose your plan</h3>
            
            <div className="plan-options-stack">
              <div 
                className={`plan-row ${selectedPlan === 'rental' ? 'active' : ''}`} 
                onClick={() => setSelectedPlan('rental')}
              >
                <div className="plan-row-left">
                  <div className="radio-circle">
                    {selectedPlan === 'rental' && <div className="radio-dot"></div>}
                  </div>
                  <span className="plan-name">7-Day Rental</span>
                </div>
                <div className="plan-price">$9.99</div>
              </div>

              <div 
                className={`plan-row ${selectedPlan === 'lifetime' ? 'active' : ''}`} 
                onClick={() => setSelectedPlan('lifetime')}
              >
                <div className="recommended-badge">Recommended</div>
                <div className="plan-row-left">
                  <div className="radio-circle">
                    {selectedPlan === 'lifetime' && <div className="radio-dot"></div>}
                  </div>
                  <div className="plan-col">
                    <span className="plan-name">Lifetime Access</span>
                    <span className="plan-sub">Own it forever</span>
                  </div>
                </div>
                <div className="plan-price">$19.99</div>
              </div>
            </div>

            {ownsItem(id || 'lucas') ? (
              <button className="checkout-submit-btn" onClick={handleWatch}>
                Watch Now
              </button>
            ) : (
              <button className="checkout-submit-btn" disabled={loading} onClick={handlePurchase}>
                {loading ? 'Processing...' : `Add to Cart (${selectedPlan === 'lifetime' ? '$19.99' : '$9.99'})`}
              </button>
            )}
            
          </div>
        </div>

        <div className="checkout-tabs-container">
          <button className={`checkout-tab ${activeTab === 'Details' ? 'active' : ''}`} onClick={() => setActiveTab('Details')}>Details</button>
          <button className={`checkout-tab ${activeTab === 'Merch' ? 'active' : ''}`} onClick={() => setActiveTab('Merch')}>Merch</button>
          <button className={`checkout-tab ${activeTab === 'Tour' ? 'active' : ''}`} onClick={() => setActiveTab('Tour')}>Tour</button>
        </div>

        <div className="checkout-tab-content">
          {activeTab === 'Details' && (
            <div className="checkout-details-grid">
              <div className="details-main" style={{ color: '#AAA', lineHeight: 1.7, fontSize: '1.05rem' }}>
                <p style={{ marginBottom: '1.5rem' }}>Lucas Zelnick has been making audiences laugh for over a decade with his sharp observational humor and quick wit. In "Emotionally Available, Unfortunately," he tackles the modern dating landscape with brutal honesty and self-deprecating charm.</p>
                <p style={{ marginBottom: '1.5rem' }}>From therapy breakthroughs to dating app disasters, Lucas shares stories that will make you laugh, cringe, and maybe text your ex. This special captures everything that's made him a viral sensation - the timing, the relatability, and the willingness to be painfully honest about his own romantic failures.</p>
                <p>Recorded live at a sold-out show in Brooklyn, this is Lucas at his most vulnerable and hilarious.</p>
              </div>
              <div className="details-meta" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem' }}>Venue</span>
                  <span style={{ color: '#888', fontSize: '0.95rem' }}>Brooklyn Steel, NYC</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem' }}>Runtime</span>
                  <span style={{ color: '#888', fontSize: '0.95rem' }}>65 minutes</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <span style={{ fontWeight: 'bold', color: 'white', fontSize: '1rem' }}>Comedian</span>
                  <span style={{ color: '#888', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <img src="/comedianpics/image 5.png" alt="Lucas" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} /> 
                    <Link to={`/comedian/${id || 'lucas'}`} style={{ color: 'inherit', textDecoration: 'none' }} className="author-link">Lucas Zelnick</Link>
                  </span>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'Merch' && (
             <div className="checkout-merch-grid">
               {merchItems.map((merch, idx) => (
                 <div key={idx} className="checkout-merch-card">
                   <div className="checkout-merch-img" style={{ backgroundImage: `url("${merch.img}")` }}></div>
                   <div style={{ fontSize: '1rem', fontWeight: '600', color: 'white' }}>{merch.title}</div>
                   <div style={{ color: '#888', fontSize: '0.95rem' }}>{merch.price}</div>
                 </div>
               ))}
             </div>
          )}

          {activeTab === 'Tour' && (
            <div className="tour-list-container">
              <p style={{ color: '#888', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Want to see Lucas Zelnick at an in-person show? Grab your tickets below!</p>
              
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
              
              <button className="tour-see-all-btn">See All Tour Stops</button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
