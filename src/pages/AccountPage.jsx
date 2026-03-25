import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useUser } from '../context/UserContext';
import './AccountPage.css';

export default function AccountPage() {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (logout) logout();
    navigate('/');
  };

  const GearIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
  );

  const MailIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
  );

  const BellIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
  );

  const LockIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
  );

  const ExitIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
  );

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="account-container">
        <h1 className="account-main-title">ACCOUNT</h1>

        <div className="account-profile">
          <div className="account-profile-left">
            <img src="/comedianpics/image 5.png" alt="Jane Doe" className="account-avatar" />
            <div className="account-profile-details">
              <h2>Jane Doe</h2>
              <p className="account-email">jane.doe@gmail.com</p>
              <p className="account-member-since">Member since: <span>Jan 18, 2026</span></p>
            </div>
          </div>
          <button className="btn-manage replace-photo-btn">Replace Photo</button>
        </div>

        <div className="account-tabs-wrapper">
          <button className="tab-btn active" style={{ paddingBottom: '0.8rem' }}><GearIcon /> Account</button>
        </div>
        <div className="account-tabs-divider"></div>

        <div className="account-settings-list">
          <div className="account-setting-item">
            <div className="setting-left">
              <div className="setting-icon-box"><MailIcon /></div>
              <div className="setting-text">
                <h4>Contact Details</h4>
                <p>jane.doe@gmail.com</p>
              </div>
            </div>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-setting-item">
            <div className="setting-left">
              <div className="setting-icon-box"><BellIcon /></div>
              <div className="setting-text">
                <h4>Notification</h4>
                <p>Email notification preferences</p>
              </div>
            </div>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-setting-item">
            <div className="setting-left">
              <div className="setting-icon-box"><LockIcon /></div>
              <div className="setting-text">
                <h4>Password</h4>
                <p>Change your account password</p>
              </div>
            </div>
            <button className="btn-manage">Manage</button>
          </div>

          <div className="account-setting-item" style={{ borderBottom: 'none' }}>
            <div className="setting-left">
              <div className="setting-icon-box"><ExitIcon /></div>
              <div className="setting-text">
                <h4>Sign Out</h4>
                <p>Log out of your account</p>
              </div>
            </div>
            <button className="btn-manage btn-signout" onClick={handleLogout}>Sign Out</button>
          </div>
        </div>
      </div>
    </div>
  );
}
