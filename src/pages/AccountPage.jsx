import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';

export default function AccountPage() {
  const { isLoggedIn, inventory, logout } = useUser();

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="account-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <header className="flex justify-between items-center mb-8">
        <h1 className="mb-0">My Account</h1>
        <div className="flex gap-4">
          <Link to="/" className="btn btn-light" style={{ textDecoration: 'none' }}>Back to Home</Link>
          <button onClick={handleLogout} className="btn" style={{ backgroundColor: 'var(--bg-sidebar)', color: 'white', border: '1px solid #333' }}>Log Out</button>
        </div>
      </header>
      
      <div className="account-details flex gap-8 mb-12">
        <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', borderRadius: '16px', flex: 1, border: '1px solid rgba(255,255,255,0.05)' }}>
          <div className="flex items-center gap-4 mb-6">
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--accent-pink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: 'bold' }}>
              U
            </div>
            <div>
              <h3>Test User</h3>
              <p style={{ color: 'var(--text-secondary)', margin: 0 }}>user@test.com</p>
            </div>
          </div>
          <button className="btn btn-white" style={{ width: '100%' }}>Edit Profile</button>
        </div>
        
        <div style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', borderRadius: '16px', flex: 2, border: '1px solid rgba(255,255,255,0.05)' }}>
          <h3>Payment Methods</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>No fake payments needed, but here's where they would go.</p>
          <div style={{ padding: '1rem', border: '1px dashed #555', borderRadius: '8px', textAlign: 'center', color: '#888' }}>
            Card ending in 4242 (Simulated)
          </div>
        </div>
      </div>

      <div className="inventory-section mt-8">
        <h2>My Inventory / Purchased Content</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>Content you have purchased or accessed will appear here.</p>
        
        {inventory.length === 0 ? (
          <div style={{ padding: '4rem', textAlign: 'center', backgroundColor: 'var(--bg-card)', borderRadius: '12px', border: '1px dashed #444' }}>
            <h3 style={{ marginBottom: '1rem' }}>Your inventory is empty</h3>
            <p className="text-secondary mb-6">Go to the homepage to discover and purchase comedy specials!</p>
            <Link to="/" className="btn btn-primary" style={{ textDecoration: 'none' }}>Explore Content</Link>
          </div>
        ) : (
          <div className="inventory-grid flex gap-6 flex-wrap">
            {inventory.map(id => {
              const item = getItemById(id);
              if (!item) return null;
              
              return (
                <div key={item.id} className="content-card cursor-pointer" style={{ minWidth: '300px', flex: '1 1 300px', maxWidth: '400px' }}>
                  <div style={{ 
                    height: '180px', borderRadius: '12px', overflow: 'hidden',
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url("${item.image}")`,
                    backgroundSize: 'cover', backgroundPosition: 'center',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(255,255,255,0.1)' 
                  }}>
                    <Link to={`/watch/${item.id}`} className="btn btn-white" style={{ textDecoration: 'none' }}>Watch Now</Link>
                  </div>
                  <div className="card-info mt-3">
                    <h4>{item.title}</h4>
                    <p>{item.author}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
