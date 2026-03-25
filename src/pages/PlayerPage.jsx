import React, { useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';
import './PlayerPage.css';

import playIcon from '../assets/video-player-icons/play-button.svg';
import chevronRightIcon from '../assets/video-player-icons/chevron-right.svg';
import fullScreenIcon from '../assets/video-player-icons/full-screen-button.svg';
import muteIcon from '../assets/video-player-icons/mute-button.svg';
import settingsIcon from '../assets/video-player-icons/settings.svg';

export default function PlayerPage() {
  const { id } = useParams();
  const { isLoggedIn } = useUser();
  const navigate = useNavigate();

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Details');

  if (!isLoggedIn) return <Navigate to="/login" />;

  return (
    <div className="player-layout">
      <div className="player-main">
        
        <div className="player-header-bar">
          <button className="sidebar-toggle-btn" onClick={() => navigate('/library')}>
            <img 
              src={chevronRightIcon} 
              alt="Back to Library" 
              style={{ transform: 'rotate(180deg)', width: '22px' }} 
            />
          </button>
        </div>

        <div className="video-container">
          <div className="video-backdrop" style={{ backgroundImage: `url("/comedianpics/playback-image.png")` }}></div>

          <button className="center-play-button">
            <img src={playIcon} alt="Play Video" style={{ width: '32px', marginLeft: '6px' }} />
          </button>

          <div className="bottom-controls-overlay">
            <div className="progress-bar-container">
              <div className="progress-bar-bg"></div>
              <div className="progress-filled" style={{ width: '48%' }}>
                <div className="progress-handle"></div>
              </div>
            </div>

            <div className="controls-row">
              <div className="controls-left">
                <button className="control-btn"><img src={playIcon} alt="Play" style={{ width: '22px' }} /></button>
                <button className="control-btn"><img src={muteIcon} alt="Mute" style={{ width: '22px' }} /></button>
                <span className="time-display">0:30 / 1:00</span>
              </div>
              <div className="controls-right">
                <div className="settings-dropdown-wrapper">
                  <button className="control-btn" onClick={() => setSettingsOpen(!settingsOpen)}>
                    <img src={settingsIcon} alt="Settings" style={{ width: '22px' }} />
                  </button>
                  {settingsOpen && (
                    <div className="settings-popup">
                      <div className="settings-row"><span>Playback speed</span><span>Normal &gt;</span></div>
                      <div className="settings-row"><span>Subtitles</span><span>Off &gt;</span></div>
                      <div className="settings-row"><span>Quality</span><span>Auto 1080p &gt;</span></div>
                    </div>
                  )}
                </div>
                
                <button className="control-btn"><img src={fullScreenIcon} alt="Fullscreen" style={{ width: '22px' }} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="details-section">
          <div className="details-tabs">
            <button className={`detail-tab ${activeTab === 'Details' ? 'active' : ''}`} onClick={() => setActiveTab('Details')}>Details</button>
            <button className={`detail-tab ${activeTab === 'Merch' ? 'active' : ''}`} onClick={() => setActiveTab('Merch')}>Merch</button>
            <button className={`detail-tab ${activeTab === 'Tour' ? 'active' : ''}`} onClick={() => setActiveTab('Tour')}>Tour</button>
          </div>

          {activeTab === 'Details' && (
            <div className="details-grid">
              <div className="details-main">
                <p>Lucas Zelnick has been making audiences laugh for over a decade with his sharp observational humor and quick wit. In "Emotionally Available, Unfortunately," he tackles the modern dating landscape with brutal honesty and self-deprecating charm.</p>
                <p>From therapy breakthroughs to dating app disasters, Lucas shares stories that will make you laugh, cringe, and maybe text your ex. This special captures everything that's made him a viral sensation - the timing, the relatability, and the willingness to be painfully honest about his own romantic failures.</p>
                <p>Recorded live at a sold-out show in Brooklyn, this is Lucas at his most vulnerable and hilarious.</p>
              </div>
              <div className="details-meta">
                <div className="meta-block">
                  <span className="meta-label">Venue</span>
                  <span className="meta-value">Brooklyn Steel, NYC</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">Runtime</span>
                  <span className="meta-value">65 minutes</span>
                </div>
                <div className="meta-block">
                  <span className="meta-label">Comedian</span>
                  <span className="meta-value"><img src="/comedianpics/image 5.png" alt="Lucas Zelnick" className="meta-avatar" /> Lucas Zelnick</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
