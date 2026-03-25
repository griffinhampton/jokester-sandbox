import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [inventory, setInventory] = useState([]);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    setIsLoggedIn(false);
    setInventory([]);
  };

  const purchase = (id) => {
    if (!inventory.includes(id)) {
      setInventory([...inventory, id]);
    }
  };

  const ownsItem = (id) => inventory.includes(id);

  return (
    <UserContext.Provider value={{ isLoggedIn, inventory, login, logout, purchase, ownsItem }}>
      {children}
    </UserContext.Provider>
  );
};
