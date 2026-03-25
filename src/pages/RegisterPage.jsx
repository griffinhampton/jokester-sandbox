import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Logo from '../components/Logo';
import './LoginPage.css';

export default function RegisterPage() {
  const [role, setRole] = useState('fan'); // 'fan' or 'comedian'
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { login } = useUser();

  const handleRegister = (e) => {
    e.preventDefault();
    if (role === 'comedian') {
       setShowModal(true);
    } else {
       login();
       navigate('/');
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-header">
        <Link to="/" className="back-btn" style={{ textDecoration: 'none' }}>Back</Link>
        <div className="login-logo">
          <Logo height="28px" />
        </div>
        <div className="spacer"></div>
      </div>

      <div className="login-content" style={{ marginTop: '4rem', maxWidth: '450px', marginBottom: '4rem' }}>
        <h1>Create your account</h1>
        
        <div className="role-toggle">
          <button 
            type="button" 
            className={`role-btn ${role === 'fan' ? 'active' : ''}`}
            onClick={() => setRole('fan')}
          >
            I'm a Fan
          </button>
          <button 
            type="button" 
            className={`role-btn ${role === 'comedian' ? 'active' : ''}`}
            onClick={() => setRole('comedian')}
          >
            I'm a Comedian
          </button>
        </div>

        {role === 'comedian' && (
          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            <Link to="/learn-more" style={{ color: 'var(--accent-pink)', fontSize: '0.85rem', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'none' }}>
              Learn more about Jokester for Comedians ↗
            </Link>
          </div>
        )}

        <form onSubmit={handleRegister} className="login-form">
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="input-group" style={{ flex: 1 }}>
              <label>First name</label>
              <input type="text" placeholder="Jane" required />
            </div>
            <div className="input-group" style={{ flex: 1 }}>
              <label>Last name</label>
              <input type="text" placeholder="Doe" required />
            </div>
          </div>

          {role === 'comedian' && (
            <div className="input-group">
              <label>Stage name (Optional)</label>
              <input type="text" placeholder="Enter stage name" />
            </div>
          )}

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" required />
          </div>

          {role === 'comedian' && (
            <>
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
                <textarea placeholder="Enter message or notes" style={{ minHeight: '100px', resize: 'vertical' }}></textarea>
              </div>
            </>
          )}

          {role === 'fan' && (
            <>
              <div className="input-group">
                <label>Password</label>
                <div className="password-input-wrapper">
                  <input type="password" placeholder="••••••" required />
                  <span className="eye-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
                  </span>
                </div>
              </div>
              <div className="input-group">
                <label>Confirm password</label>
                <input type="password" placeholder="••••••" required />
              </div>
            </>
          )}

          <button type="submit" className="btn btn-primary sign-in-btn" style={{ marginTop: '1rem' }}>
            {role === 'fan' ? 'Create Account' : 'Submit Application'}
          </button>
        </form>

        {role === 'fan' && (
          <>
            <div className="divider">
              <div className="divider-line"></div>
              <span className="divider-text">or continue with</span>
            </div>

            <div className="sso-buttons">
              <button type="button" className="sso-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
                Continue With Google
              </button>
              
              <button type="button" className="sso-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg"><path d="M15.16 4.19c.75-.89 1.25-2.14 1.11-3.41-1.08.05-2.42.74-3.21 1.67-.7.82-1.3 2.11-1.12 3.36 1.2.1 2.47-.72 3.22-1.62zm-.05 1.83c-1.57-.08-3.08 1.01-3.89 1.01-.84 0-2.06-1-3.32-.97-1.7.02-3.26.96-4.13 2.47-1.78 3.12-.45 7.73 1.28 10.29.83 1.23 1.83 2.61 3.16 2.56 1.26-.05 1.76-.84 3.29-.84 1.53 0 2.01.84 3.33.81 1.36-.02 2.22-1.25 3.05-2.48 1.06-1.56 1.5-3.06 1.52-3.14-.04-.01-2.94-1.13-2.98-4.51-.04-2.83 2.31-4.2 2.4-4.25-1.31-1.92-3.35-2.18-4.09-2.23v.01z" fill="#fff"/></svg>
                Continue With Apple
              </button>
            </div>
          </>
        )}

        <p className="signup-prompt">
          Already have an account? <Link to="/login" className="signup-link" style={{ textDecoration: 'none' }}>Sign In</Link>
        </p>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <h2>Congratulations!</h2>
            <p>Your application has been submitted. A member of the Jokester team will be in touch within 24 hours.</p>
            <button onClick={() => navigate('/')} className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              Go to Homepage <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
