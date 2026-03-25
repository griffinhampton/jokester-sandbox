import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { heroContent, hottestContent, liveUpcomingContent, newestContent, likedContent, featuredComedians } from '../data/mockData';
import { useUser } from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import './HomePage.css';

export default function HomePage() {
  const { isLoggedIn, ownsItem } = useUser();
  const navigate = useNavigate();

  const [heroIndex, setHeroIndex] = useState(0);
  const [autoScrollDelay, setAutoScrollDelay] = useState(15000);

  const heroItemsArray = [
    { ...heroContent, id: 'h1' },
    { ...heroContent, id: 'h2', image: '/comedianpics/main-hero.png', title: 'CHRIS ROCK' },
    { ...heroContent, id: 'h3', image: '/comedianpics/main-hero.png', title: 'KEVIN HART' },
    { ...heroContent, id: 'h4', image: '/comedianpics/main-hero.png', title: 'JOHN MULANEY' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroItemsArray.length);
    }, autoScrollDelay);
    return () => clearInterval(interval);
  }, [autoScrollDelay]);

  const handleNextHero = () => {
    setHeroIndex((prev) => (prev + 1) % heroItemsArray.length);
    setAutoScrollDelay(30000);
  };
  
  const handlePrevHero = () => {
    setHeroIndex((prev) => (prev === 0 ? heroItemsArray.length - 1 : prev - 1));
    setAutoScrollDelay(30000);
  };

  const handleCardClick = (id) => {
    if (ownsItem(id)) navigate(`/watch/${id}`);
    else navigate(`/checkout/${id}`);
  };

  const scrollRail = (ref, dir) => {
    if (ref.current) {
      ref.current.scrollBy({ left: dir * (ref.current.clientWidth * 0.8), behavior: 'smooth' });
    }
  };

  const hottestRef = useRef(null);
  const liveRef = useRef(null);
  const newestRef = useRef(null);
  const likedRef = useRef(null);
  const featuredRef = useRef(null);

  const duplicate = (arr) => [...arr, ...arr.map(i => ({...i, id: i.id+'_dup'})), ...arr.map(i => ({...i, id: i.id+'_dup2'}))];

  const extHottest = duplicate(hottestContent);
  const extLive = duplicate(liveUpcomingContent);
  const extNewest = duplicate(newestContent);
  const extLiked = duplicate(likedContent);
  const extFeatured = duplicate(featuredComedians);

  const LockIcon = () => (<span className="lock-icon"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></span>);
  const ArrowRight = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>);
  const ArrowLeft = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>);

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

  const currentHero = heroItemsArray[heroIndex];

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="home-container">
        
        <section className="hero-section">
          {heroItemsArray.map((hero, idx) => (
            <div key={hero.id} className="hero-bg-layer" style={{
              opacity: idx === heroIndex ? 1 : 0,
              backgroundImage: `linear-gradient(to right, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%), linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0) 30%), url("${hero.image}")`
            }}></div>
          ))}

          <div className="hero-content-wrapper">
            <div className="hero-header-auth">
              {!isLoggedIn && (
                <>
                  <Link to="/login" className="hero-signin-link">Sign In</Link>
                  <Link to="/register" className="btn btn-primary hero-started-btn">Get Started</Link>
                </>
              )}
            </div>

            <div className="hero-nav-arrows">
              <button className="nav-btn" onClick={handlePrevHero}><ArrowLeft /></button>
              <button className="nav-btn" onClick={handleNextHero}><ArrowRight /></button>
            </div>

            <div className="hero-content">
              <p className="hero-date">
                <span className="red-dot"></span> {currentHero.date}
              </p>
              <h1 className="hero-title">{currentHero.title}</h1>
              <p className="hero-subtitle">{currentHero.subtitle}</p>
              
              <div className="hero-action-row">
                <button className="btn btn-white" onClick={() => handleCardClick(currentHero.id)}>
                  {ownsItem(currentHero.id) ? 'Watch Now' : 'Get Tickets'}
                </button>
                
                {!ownsItem(currentHero.id) && (
                  <div className="hero-price-block">
                    <p className="hero-price">Starting at <strong>{currentHero.price}</strong> / mo</p>
                    <span className="hero-subtext">Subscribe to watch</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="hero-pagination">
              {heroItemsArray.map((_, idx) => (
                <div key={idx} className={`dot ${idx === heroIndex ? 'active' : ''}`} onClick={() => { setHeroIndex(idx); setAutoScrollDelay(30000); }}></div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Rails */}
        <div className="main-content-scroll">
          
          <section className="category-section relative">
            <div className="category-header">
              <h3>Hottest in the US</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail-wrapper">
              <button className="rail-arrow left-arrow" onClick={() => scrollRail(hottestRef, -1)}><ArrowLeft /></button>
              <div className="content-rail" ref={hottestRef}>
                {extHottest.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              </div>
              <button className="rail-arrow right-arrow" onClick={() => scrollRail(hottestRef, 1)}><ArrowRight /></button>
            </div>
          </section>

          <section className="category-section relative">
            <div className="category-header">
              <h3>Live and Upcoming</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail-wrapper">
              <button className="rail-arrow left-arrow" onClick={() => scrollRail(liveRef, -1)}><ArrowLeft /></button>
              <div className="content-rail" ref={liveRef}>
                {extLive.map(item => <ContentCard key={item.id} item={item} type="portrait" />)}
              </div>
              <button className="rail-arrow right-arrow" onClick={() => scrollRail(liveRef, 1)}><ArrowRight /></button>
            </div>
          </section>

          <section className="category-section relative">
            <div className="category-header">
              <h3>Newest</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail-wrapper">
              <button className="rail-arrow left-arrow" onClick={() => scrollRail(newestRef, -1)}><ArrowLeft /></button>
              <div className="content-rail" ref={newestRef}>
                {extNewest.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              </div>
              <button className="rail-arrow right-arrow" onClick={() => scrollRail(newestRef, 1)}><ArrowRight /></button>
            </div>
          </section>

           <section className="category-section relative">
            <div className="category-header">
              <h3>We Think You'll Like These</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail-wrapper">
              <button className="rail-arrow left-arrow" onClick={() => scrollRail(likedRef, -1)}><ArrowLeft /></button>
              <div className="content-rail" ref={likedRef}>
                {extLiked.map(item => <ContentCard key={item.id} item={item} type="landscape" />)}
              </div>
              <button className="rail-arrow right-arrow" onClick={() => scrollRail(likedRef, 1)}><ArrowRight /></button>
            </div>
          </section>

          <section className="category-section pb-16 relative">
            <div className="category-header">
              <h3>Featured Comedians</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="content-rail-wrapper">
              <button className="rail-arrow left-arrow" onClick={() => scrollRail(featuredRef, -1)}><ArrowLeft /></button>
              <div className="featured-rail" ref={featuredRef}>
                {extFeatured.map((item) => (
                  <div key={item.id} className="featured-comedian">
                    <div className="featured-circle" style={{ backgroundImage: `url("${item.image}")` }}></div>
                    <p>{item.name}</p>
                  </div>
                ))}
              </div>
              <button className="rail-arrow right-arrow" onClick={() => scrollRail(featuredRef, 1)}><ArrowRight /></button>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
