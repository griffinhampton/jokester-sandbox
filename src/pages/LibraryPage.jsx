import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';
import Sidebar from '../components/Sidebar';
import './LibraryPage.css';

export default function LibraryPage() {
  const { inventory } = useUser();
  const navigate = useNavigate();

  // We map the user's owned IDs back to full MockData objects
  const ownedItems = inventory.map(id => getItemById(id)).filter(Boolean);
  
  // Hardcoded durations for the sake of the visual mock
  const mocks = [
    { duration: "1:12:31", date: "Jan 15, 2025" },
    { duration: "58:03", date: "Feb 2, 2025" },
    { duration: "1:05:41", date: "Dec 20, 2024" },
    { duration: "52:12", date: "Nov 8, 2024" },
  ];

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
            <button className="tab-btn active">
              <PlayIcon /> Specials <span className="tab-count">• 4</span>
            </button>
            <button className="tab-btn disabled">
              <ClockIcon /> Upcoming <span className="tab-count">• 2</span>
            </button>
            <button className="tab-btn disabled">
              <HeartIcon /> Favorites <span className="tab-count">• 3</span>
            </button>
          </div>
        </div>

        <div className="library-grid">
          {ownedItems.length === 0 ? (
            <div className="empty-state">
              <p>You haven't purchased any specials yet.</p>
              <button className="btn btn-primary mt-4" onClick={() => navigate('/')}>Browse Specials</button>
            </div>
          ) : (
            ownedItems.map((item, idx) => {
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
            })
          )}
        </div>

      </div>
    </div>
  );
}
