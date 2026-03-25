import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Sidebar.css';

export default function Sidebar() {
  const { isLoggedIn } = useUser();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Icons extracted pixel-for-pixel from src/assets/sidebar-icons/
  const UserIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 16.6667C4.44649 14.6021 7.08918 13.3333 10 13.3333C12.9108 13.3333 15.5535 14.6021 17.5 16.6667M13.75 6.25C13.75 8.32107 12.0711 10 10 10C7.92893 10 6.25 8.32107 6.25 6.25C6.25 4.17893 7.92893 2.5 10 2.5C12.0711 2.5 13.75 4.17893 13.75 6.25Z" />
    </svg>
  );

  const SearchIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" />
    </svg>
  );

  const HomeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.77168 11.6667C7.14172 13.1043 8.4468 14.1667 10 14.1667C11.5532 14.1667 12.8583 13.1043 13.2283 11.6667M9.18141 2.30333L3.52949 6.69927C3.15168 6.99312 2.96278 7.14005 2.82669 7.32405C2.70614 7.48704 2.61633 7.67065 2.56169 7.86588C2.5 8.08627 2.5 8.32558 2.5 8.80421V14.8333C2.5 15.7667 2.5 16.2335 2.68166 16.59C2.84144 16.9036 3.09641 17.1585 3.41002 17.3183C3.76654 17.5 4.23325 17.5 5.16667 17.5H14.8333C15.7668 17.5 16.2335 17.5 16.59 17.3183C16.9036 17.1585 17.1586 16.9036 17.3183 16.59C17.5 16.2335 17.5 15.7667 17.5 14.8333V8.80421C17.5 8.32558 17.5 8.08627 17.4383 7.86588C17.3837 7.67065 17.2939 7.48704 17.1733 7.32405C17.0372 7.14005 16.8483 6.99312 16.4705 6.69927L10.8186 2.30333C10.5258 2.07562 10.3794 1.96177 10.2178 1.918C10.0752 1.87938 9.92484 1.87938 9.78221 1.918C9.62057 1.96177 9.47418 2.07562 9.18141 2.30333Z" />
    </svg>
  );

  const ShoppingIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.3332 6.66667C13.3332 7.55072 12.982 8.39857 12.3568 9.02369C11.7317 9.64881 10.8839 10 9.99982 10C9.11576 10 8.26792 9.64881 7.6428 9.02369C7.01768 8.39857 6.66649 7.55072 6.66649 6.66667M3.0275 6.16782L2.44417 13.1678C2.31885 14.6716 2.2562 15.4235 2.51039 16.0035C2.73372 16.5131 3.12068 16.9336 3.60997 17.1985C4.16688 17.5 4.92137 17.5 6.43035 17.5H13.5693C15.0783 17.5 15.8328 17.5 16.3897 17.1985C16.879 16.9336 17.2659 16.5131 17.4892 16.0035C17.7434 15.4235 17.6808 14.6716 17.5555 13.1678L16.9721 6.16782C16.8643 4.87396 16.8104 4.22703 16.5239 3.73738C16.2716 3.3062 15.8959 2.9605 15.4452 2.74487C14.9335 2.5 14.2843 2.5 12.986 2.5L7.01369 2.5C5.71534 2.5 5.06617 2.5 4.55442 2.74487C4.10377 2.9605 3.72807 3.3062 3.47576 3.73738C3.18923 4.22703 3.13532 4.87396 3.0275 6.16782Z" />
    </svg>
  );

  const LibraryIcon = () => (
    <svg width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13.333 5.00016L16.6663 16.6668M9.99967 5.00016V16.6668M6.66634 6.66683V16.6668M3.33301 3.3335V16.6668" />
    </svg>
  );

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        {isLoggedIn ? (
          <Link to="/account" className="sidebar-item profile-pic">
            <img src="/comedianpics/image 5.png" alt="Profile" />
          </Link>
        ) : (
          <Link to="/login" className="user-icon-wrapper">
            <UserIcon />
          </Link>
        )}
      </div>

      <div className="sidebar-nav">
        <div className="sidebar-item">
          <SearchIcon />
        </div>
        <Link to="/" className={`sidebar-item ${isActive('/') ? 'active' : ''}`}>
          <HomeIcon />
        </Link>
        <div className="sidebar-item">
          <ShoppingIcon />
        </div>
        <div className="sidebar-item">
          <LibraryIcon />
        </div>
      </div>
    </div>
  );
}
