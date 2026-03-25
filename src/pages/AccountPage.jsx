import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { useUser } from '../context/UserContext';
import './AccountPage.css';

export default function AccountPage() {
  const { logout } = useUser();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('account');
  const [activeEditSetting, setActiveEditSetting] = useState(null);

  const handleLogout = () => {
    if (logout) logout();
    navigate('/');
  };

  const GearIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>);
  const MailIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
  const BellIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>);
  const LockIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>);
  const ExitIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>);
  
  const CreditCardIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>);
  const MonitorIcon = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>);
  const StarIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>);
  const ClockIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
  const DeviceLaptopIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="2" y1="20" x2="22" y2="20"/></svg>);
  const SmartphoneIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>);
  const TvIcon = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/></svg>);
  const ArrowLeftIcon = () => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>);

  const renderAccountList = () => (
    <div className="account-settings-list">
      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><MailIcon /></div>
          <div className="setting-text">
            <h4>Contact Details</h4>
            <p>jane.doe@gmail.com</p>
          </div>
        </div>
        <button className="btn-manage" onClick={() => setActiveEditSetting('contact')}>Manage</button>
      </div>

      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><BellIcon /></div>
          <div className="setting-text">
            <h4>Notification</h4>
            <p>Email notification preferences</p>
          </div>
        </div>
        <button className="btn-manage" onClick={() => setActiveEditSetting('notification')}>Manage</button>
      </div>

      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><LockIcon /></div>
          <div className="setting-text">
            <h4>Password</h4>
            <p>Change your account password</p>
          </div>
        </div>
        <button className="btn-manage" onClick={() => setActiveEditSetting('password')}>Manage</button>
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
  );

  const renderContactForm = () => (
    <div className="settings-edit-view">
      <button className="back-btn" onClick={() => setActiveEditSetting(null)}>
        <ArrowLeftIcon /> Contact Details
      </button>
      <div className="account-form">
        <div className="form-row split">
          <div className="form-group">
            <label>First Name</label>
            <input type="text" defaultValue="Jane" />
          </div>
          <div className="form-group">
            <label>Last Name</label>
            <input type="text" defaultValue="Doe" />
          </div>
        </div>
        <div className="form-group">
          <label>Email Address</label>
          <input type="email" defaultValue="jane.doe@gmail.com" />
        </div>
        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" defaultValue="+1 (555) 123-4567" />
        </div>
        <button className="btn-primary form-save-btn">Save Changes</button>
      </div>
    </div>
  );

  const renderNotificationForm = () => (
    <div className="settings-edit-view">
      <button className="back-btn" onClick={() => setActiveEditSetting(null)}>
        <ArrowLeftIcon /> Notification
      </button>
      <div className="account-form form-toggles">
        <div className="toggle-row">
          <span>Email Notifications</span>
          <div className="toggle active"><div className="toggle-thumb"></div></div>
        </div>
        <div className="toggle-row">
          <span>Push Notifications</span>
          <div className="toggle"><div className="toggle-thumb"></div></div>
        </div>
        <div className="toggle-row">
          <span>SMS Alerts</span>
          <div className="toggle active"><div className="toggle-thumb"></div></div>
        </div>
        <button className="btn-primary form-save-btn" style={{marginTop: '2rem'}}>Save Changes</button>
      </div>
    </div>
  );

  const renderPasswordForm = () => (
    <div className="settings-edit-view">
      <button className="back-btn" onClick={() => setActiveEditSetting(null)}>
        <ArrowLeftIcon /> Password
      </button>
      <div className="account-form">
        <div className="form-group">
          <label>Current Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>New Password</label>
          <input type="password" />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" />
        </div>
        <button className="btn-primary form-save-btn">Save Changes</button>
      </div>
    </div>
  );

  const renderBilling = () => (
    <div className="account-settings-list">
      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><StarIcon /></div>
          <div className="setting-text">
            <h4>Subscription</h4>
            <p>Current plan: Jokester Pro</p>
          </div>
        </div>
        <button className="btn-manage">Manage</button>
      </div>
      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><CreditCardIcon /></div>
          <div className="setting-text">
            <h4>Payment Method</h4>
            <p>Visa ending in 4242</p>
          </div>
        </div>
        <button className="btn-manage">Update</button>
      </div>
      <div className="account-setting-item" style={{ borderBottom: 'none' }}>
        <div className="setting-left">
          <div className="setting-icon-box"><ClockIcon /></div>
          <div className="setting-text">
            <h4>Billing History</h4>
            <p>View your past invoices</p>
          </div>
        </div>
        <button className="btn-manage">View</button>
      </div>
    </div>
  );

  const renderDevices = () => (
    <div className="account-settings-list">
      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><DeviceLaptopIcon /></div>
          <div className="setting-text">
            <h4>Current Device</h4>
            <p>MacBook Pro - Active now</p>
          </div>
        </div>
      </div>
      <div className="account-setting-item">
        <div className="setting-left">
          <div className="setting-icon-box"><SmartphoneIcon /></div>
          <div className="setting-text">
            <h4>iPhone 14</h4>
            <p>Last active: 2 hours ago</p>
          </div>
        </div>
        <button className="btn-manage btn-signout">Sign Out</button>
      </div>
      <div className="account-setting-item" style={{ borderBottom: 'none' }}>
        <div className="setting-left">
          <div className="setting-icon-box"><TvIcon /></div>
          <div className="setting-text">
            <h4>Smart TV</h4>
            <p>Last active: Yesterday</p>
          </div>
        </div>
        <button className="btn-manage btn-signout">Sign Out</button>
      </div>
    </div>
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

        <div className="account-tabs-wrapper" style={{ gap: '2rem' }}>
          <button className={`tab-btn ${activeTab === 'account' ? 'active' : ''}`} onClick={() => { setActiveTab('account'); setActiveEditSetting(null); }} style={{ paddingBottom: '0.8rem' }}><GearIcon /> Account</button>
          <button className={`tab-btn ${activeTab === 'billing' ? 'active' : ''}`} onClick={() => { setActiveTab('billing'); setActiveEditSetting(null); }} style={{ paddingBottom: '0.8rem' }}><CreditCardIcon /> Billing</button>
          <button className={`tab-btn ${activeTab === 'devices' ? 'active' : ''}`} onClick={() => { setActiveTab('devices'); setActiveEditSetting(null); }} style={{ paddingBottom: '0.8rem' }}><MonitorIcon /> Devices</button>
        </div>
        <div className="account-tabs-divider"></div>

        {activeTab === 'account' && activeEditSetting === null && renderAccountList()}
        {activeTab === 'account' && activeEditSetting === 'contact' && renderContactForm()}
        {activeTab === 'account' && activeEditSetting === 'notification' && renderNotificationForm()}
        {activeTab === 'account' && activeEditSetting === 'password' && renderPasswordForm()}

        {activeTab === 'billing' && renderBilling()}
        {activeTab === 'devices' && renderDevices()}

      </div>
    </div>
  );
}
