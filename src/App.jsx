import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import LibraryPage from './pages/LibraryPage';
import AccountPage from './pages/AccountPage';
import ShopPage from './pages/ShopPage';
import CheckoutPage from './pages/CheckoutPage';
import PlayerPage from './pages/PlayerPage';
import RegisterPage from './pages/RegisterPage';
import './index.css';

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <main className="page-content" style={{ padding: 0 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/library" element={<LibraryPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/checkout/:id" element={<CheckoutPage />} />
              <Route path="/watch/:id" element={<PlayerPage />} />
            </Routes>
          </main>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;
