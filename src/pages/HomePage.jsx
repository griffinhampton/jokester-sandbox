import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { heroContent, hottestContent, liveUpcomingContent, newestContent, likedContent, featuredComedians } from '../data/mockData';
import { useUser } from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

export default function HomePage() {
  const { isLoggedIn, ownsItem } = useUser();
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    if (ownsItem(id)) {
      navigate(`/watch/${id}`);
    } else {
      navigate(`/checkout/${id}`);
    }
  };

  const LockIcon = () => (
    <span className="lock-icon">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    </span>
  );

  const ArrowRight = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
  );

  const ArrowLeft = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
  );

  const ContentCard = ({ item, type = "landscape" }) => (
    <div className={`content-card ${type}-card`} onClick={() => handleCardClick(item.id)}>
      <div className="card-image-placeholder relative" style={{ backgroundImage: `url("${item.image}")` }}>
        {item.badge && <span className="card-badge">{item.badge}</span>}
        {item.number && <span className="card-number">{item.number}</span>}
        {!ownsItem(item.id) && <LockIcon />}
      </div>
      <div className="card-info">
        <h4>{item.title}</h4>
        <p>{item.author}</p>
      </div>
    </div>
  );

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-container">
        
        {/* Hero Section */}
        <section className="hero-section" style={{ backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%), linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 30%), url("${heroContent.image}")` }}>
          
          <div className="hero-header-auth">
            {!isLoggedIn && (
              <>
                <Link to="/login" className="hero-signin-link">Sign In</Link>
                <Link to="/register" className="btn btn-primary hero-started-btn">Get Started</Link>
              </>
            )}
          </div>

          <div className="hero-nav-arrows">
            <button className="nav-btn"><ArrowLeft /></button>
            <button className="nav-btn"><ArrowRight /></button>
          </div>

          <div className="hero-content">
            <p className="hero-date">
              <span className="red-dot"></span> {heroContent.date}
            </p>
            <h1 className="hero-title">{heroContent.title}</h1>
            <p className="hero-subtitle">{heroContent.subtitle}</p>
            
            <div className="hero-action-row">
              <button className="btn btn-white" onClick={() => handleCardClick(heroContent.id)}>
                {ownsItem(heroContent.id) ? 'Watch Now' : 'Get Tickets'}
              </button>
              
              {!ownsItem(heroContent.id) && (
                <div className="hero-price-block">
                  <p className="hero-price">Starting at <strong>{heroContent.price}</strong> / mo</p>
                  <span className="hero-subtext">Subscribe to watch</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="hero-pagination">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot active"></div>
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </section>

        {/* Categories Rails */}
        <div className="main-content-scroll">
          <section className="category-section relative">
            <div className="category-header">
              <h3>Hottest in the US</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail">
              {hottestContent.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              <div className="rail-arrow-right"><button className="nav-btn"><ArrowRight /></button></div>
            </div>
          </section>
          
          <section className="category-section relative">
            <div className="category-header">
              <h3>Live and Upcoming</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail">
              {liveUpcomingContent.map(item => <ContentCard key={item.id} item={item} type="portrait" />)}
              <div className="rail-arrow-right"><button className="nav-btn"><ArrowRight /></button></div>
            </div>
          </section>

          <section className="category-section relative">
            <div className="category-header">
              <h3>Newest</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail">
              {newestContent.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              <div className="rail-arrow-right"><button className="nav-btn"><ArrowRight /></button></div>
            </div>
          </section>

          <section className="category-section relative">
            <div className="category-header">
              <h3>We Think You'll Like These</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail">
              {likedContent.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              <div className="rail-arrow-right"><button className="nav-btn"><ArrowRight /></button></div>
            </div>
          </section>

          <section className="category-section pb-16 relative">
            <div className="category-header">
              <h3>Featured Comedians</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="featured-rail">
              {featuredComedians.map((item, idx) => (
                <div key={item.id} className="featured-comedian">
                  <div className="featured-circle" style={{ backgroundImage: `url("${item.image}")` }}></div>
                  <p>{item.name}</p>
                </div>
              ))}
              <div className="rail-arrow-right"><button className="nav-btn"><ArrowRight /></button></div>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}
