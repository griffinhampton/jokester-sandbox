import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import './LibraryPage.css';

export default function LibraryPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Specials');

  // Hardcoded items for the fake visual mockup
  const displayItems = [
    { id: 'lucas', title: "Emotionally Available, Unfortunately", author: "Lucas Zelnick", image: "/comedianpics/playback-image.png" },
    { id: 'chris', title: "Bring The Pain", author: "Chris Rock", image: "/comedianpics/image 4.png" },
    { id: 'kevin', title: "Zero F**ks Given", author: "Kevin Hart", image: "/comedianpics/image 5.png" },
    { id: 'john', title: "New In Town", author: "John Mulaney", image: "/comedianpics/image 7.png" },
    { id: 'ellen', title: "Relatable", author: "Ellen DeGeneres", image: "/comedianpics/Image (10).png" },
    { id: 'chris2', title: "Tamborine", author: "Chris Rock", image: "/comedianpics/ChatGPT Image 3 мар. 2026 г., 12_44_05 1.png" },
    { id: 'lucas2', title: "The Crowd Work Special", author: "Lucas Zelnick", image: "/comedianpics/Image (12).png" },
    { id: 'john2', title: "Baby J", author: "John Mulaney", image: "/comedianpics/ChatGPT Image 3 мар. 2026 г., 13_14_56 1.png" }
  ];

  // Hardcoded durations for the sake of the visual mock
  const mocks = [
    { duration: "1:12:31", date: "Jan 15, 2025" },
    { duration: "58:03", date: "Feb 2, 2025" },
    { duration: "1:05:41", date: "Dec 20, 2024" },
    { duration: "52:12", date: "Nov 8, 2024" },
  ];

  const upcomingItems = displayItems.slice(0, 2);
  const favoriteItems = displayItems.slice(2, 5);

  const getActiveArray = () => {
    if (activeTab === 'Upcoming') return upcomingItems;
    if (activeTab === 'Favorites') return favoriteItems;
    return displayItems;
  };

  const currentItems = getActiveArray();

  const PlayIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
  );

  const ClockIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
  );

  const HeartIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
  );

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="library-container">
        
        <div className="library-header">
          <div className="library-title-row">
            <h1>MY LIBRARY</h1>
            <p>Your purchased content and upcoming events</p>
          </div>

          <div className="library-tabs">
            <button className={`tab-btn ${activeTab === 'Specials' ? 'active' : ''}`} onClick={() => setActiveTab('Specials')}>
              <PlayIcon /> Specials <span className="tab-count">• 8</span>
            </button>
            <button className={`tab-btn ${activeTab === 'Upcoming' ? 'active' : ''}`} onClick={() => setActiveTab('Upcoming')}>
              <ClockIcon /> Upcoming <span className="tab-count">• 2</span>
            </button>
            <button className={`tab-btn ${activeTab === 'Favorites' ? 'active' : ''}`} onClick={() => setActiveTab('Favorites')}>
              <HeartIcon /> Favorites <span className="tab-count">• 3</span>
            </button>
          </div>
        </div>

        <div className="library-grid">
          {currentItems.map((item, idx) => {
            const m = mocks[idx % mocks.length];
            return (
              <div key={item.id} className="library-card" onClick={() => navigate(`/watch/${item.id}`)}>
                <div className="library-card-image" style={{ backgroundImage: `url("${item.image}")` }}>
                  <span className="duration-badge">{m.duration}</span>
                </div>
                <div className="library-card-info">
                  <h4>{item.title}</h4>
                  <p className="library-author">{item.author}</p>
                  <p className="library-date">Purchased {m.date}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
