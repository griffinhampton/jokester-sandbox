import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import Sidebar from '../components/Sidebar';
import './ShopPage.css';

const getRandomImage = () => `/comedianpics/image ${Math.floor(Math.random() * 28) + 1}.png`;

const shopData = [
    {
      id: "lucas",
      name: "Lucas Zelnic",
      avatar: "/comedianpics/image 5.png",
      items: [
        { title: "Buffering Tour Tee", price: "$34.99", img: getRandomImage() },
        { title: "Comedy Club Hoodie", price: "$64.99", img: getRandomImage() },
        { title: "Signed Poster", price: "$24.99", img: getRandomImage() },
        { title: "Sticker Pack", price: "$12.99", img: getRandomImage() },
        { title: "Laughing Matter Mug", price: "$19.99", img: getRandomImage() },
        { title: "Family Fun Cup", price: "$22.99", img: getRandomImage() },
      ]
    },
    {
      id: "tim",
      name: "Tim Hawkins",
      avatar: "/comedianpics/image 7.png",
      items: [
        { title: "Tour Shirt 2026", price: "$29.99", img: getRandomImage() },
        { title: "DVD Collection", price: "$44.99", img: getRandomImage() },
        { title: "Family Fun Cup", price: "$22.99", img: getRandomImage() },
        { title: "Fully Loaded Hoodie", price: "$59.99", img: getRandomImage() },
      ]
    },
    {
      id: "kam",
      name: "Kam Patterson",
      avatar: "/comedianpics/image 12.png",
      items: [
        { title: "No Filter Hoodie", price: "$54.99", img: getRandomImage() },
        { title: "Raw & Uncut Tee", price: "$32.99", img: getRandomImage() },
        { title: "Tour Snapback", price: "$27.99", img: getRandomImage() },
        { title: "Signed Photo", price: "$19.99", img: getRandomImage() },
        { title: "Sticker Pack", price: "$9.99", img: getRandomImage() },
      ]
    }
  ];

export default function ShopPage() {
  const { isLoggedIn } = useUser();

  return (
    <div className="home-layout">
      <Sidebar />
      <div className="shop-container">
        
        <div className="shop-header">
          <div className="shop-title-chunk">
            <h1>SHOP</h1>
            <p>Official merch from your favorite comedians</p>
          </div>
          
          {!isLoggedIn && (
            <div className="shop-auth-buttons">
              <Link to="/login" className="hero-signin-link">Sign In</Link>
              <Link to="/register" className="btn btn-primary hero-started-btn">Get Started</Link>
            </div>
          )}
        </div>
        
        <div className="shop-divider top-divider"></div>

        <div className="shop-sections">
          {shopData.map((comedian, index) => (
            <div key={comedian.id} className="shop-comedian-row">
              <div className="comedian-info-header">
                <img src={comedian.avatar} alt={comedian.name} className="comedian-mini-avatar" />
                <h2>{comedian.name}</h2>
              </div>
              
              <div className="merch-grid">
                {comedian.items.map((item, idx) => (
                  <div key={idx} className="merch-card">
                    <div className="merch-image" style={{ backgroundImage: `url("${item.img}")` }}></div>
                    <div className="merch-details">
                      <h4>{item.title}</h4>
                      <p>{item.price}</p>
                    </div>
                  </div>
                ))}
              </div>

              {index !== shopData.length - 1 && <div className="shop-divider"></div>}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
