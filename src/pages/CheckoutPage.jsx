import React, { useState } from 'react';
import { useParams, useNavigate, Navigate, Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { getItemById } from '../data/mockData';

export default function CheckoutPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoggedIn, ownsItem, purchase } = useUser();
  const [loading, setLoading] = useState(false);
  
  const item = getItemById(id);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  if (!item) {
    return <div style={{ padding: '2rem' }}>Item not found.</div>;
  }

  if (ownsItem(id)) {
    return (
      <div style={{ padding: '2rem' }}>
        <h2>You already own this item!</h2>
        <Link to={`/watch/${id}`} className="btn btn-primary mt-6" style={{ display: 'inline-block', textDecoration: 'none' }}>
          Watch Now
        </Link>
      </div>
    );
  }

  const handlePurchase = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      purchase(id);
      navigate(`/watch/${id}`);
    }, 1000);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '2rem' }}>
      <h1 className="mb-6">Checkout</h1>
      
      <div className="flex gap-6 mb-6" style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
        <img src={item.image} alt={item.title} style={{ width: '120px', height: '160px', objectFit: 'cover', borderRadius: '8px' }} />
        <div>
          <h3 style={{ margin: '0 0 0.5rem 0' }}>{item.title}</h3>
          <p style={{ color: 'var(--text-secondary)', margin: '0 0 1rem 0' }}>{item.author}</p>
          <div style={{ color: 'var(--accent-pink)', fontSize: '1.25rem', fontWeight: 'bold' }}>
            {item.price || '$9.99'}
          </div>
        </div>
      </div>

      <form onSubmit={handlePurchase} style={{ backgroundColor: 'var(--bg-card)', padding: '1.5rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h3 style={{ margin: 0 }}>Payment Mock</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', margin: 0 }}>No real payments or validation. Just click complete.</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '1rem' }}>
          <label>Card Number</label>
          <input type="text" placeholder="1234 5678 9101 1121" required style={inputStyle} />
        </div>
        
        <div className="flex gap-4">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            <label>Expiry</label>
            <input type="text" placeholder="MM/YY" required style={inputStyle} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
            <label>CVC</label>
            <input type="text" placeholder="123" required style={inputStyle} />
          </div>
        </div>
        
        <button type="submit" className="btn btn-primary" disabled={loading} style={{ padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', cursor: loading ? 'wait' : 'pointer' }}>
          {loading ? 'Processing...' : 'Complete Purchase'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  border: '1px solid #333',
  backgroundColor: '#111',
  color: 'white',
  fontFamily: 'inherit',
  width: '100%'
};
