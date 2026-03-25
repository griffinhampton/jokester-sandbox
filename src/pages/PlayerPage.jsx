import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';

export default function PlayerPage() {
  const { id } = useParams();
  const { isLoggedIn, ownsItem } = useUser();
  const item = getItemById(id);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!item) {
    return <div style={{ padding: '2rem' }}>Video not found.</div>;
  }

  if (!ownsItem(id)) {
    return (
      <div style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center', backgroundColor: 'var(--bg-card)', padding: '3rem', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '1rem' }}>Access Denied</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>You need to purchase this content to view it.</p>
        <Link to={`/checkout/${id}`} className="btn btn-primary" style={{ textDecoration: 'none', padding: '0.75rem 1.5rem', display: 'inline-block' }}>
          Go to Checkout
        </Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', width: '100%' }}>
      <div style={{ marginBottom: '1.5rem' }}>
        <Link to="/account" className="btn-link" style={{ textDecoration: 'none' }}>← Back to your Inventory</Link>
      </div>
      
      {/* Fake Video Player 16:9 */}
      <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', backgroundColor: '#000', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ 
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url("${item.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Play Icon Fake */}
          <div style={{ 
            width: '80px', height: '80px', 
            backgroundColor: 'rgba(219, 21, 61, 0.9)', 
            borderRadius: '50%', 
            display: 'flex', alignItems: 'center', justifyContent: 'center', 
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(219, 21, 61, 0.5)'
          }}>
             <div style={{ width: 0, height: 0, borderTop: '15px solid transparent', borderBottom: '15px solid transparent', borderLeft: '25px solid white', marginLeft: '8px' }}></div>
          </div>
          <p style={{ marginTop: '2rem', fontWeight: 'bold', letterSpacing: '2px', color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
            SIMULATED VIDEO PLAYBACK
          </p>
        </div>
      </div>
      
      <div style={{ marginTop: '2rem' }}>
        <h1 style={{ marginBottom: '0.5rem' }}>{item.title}</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', margin: 0 }}>{item.author}</p>
      </div>
    </div>
  );
}
