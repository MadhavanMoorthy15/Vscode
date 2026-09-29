import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    id: 1,
    name: 'Rahul Sharma',
    email: 'rahul.sharma@email.com',
    phone: '+91 9876543210',
    avatar: 'https://picsum.photos/seed/avatar1/200/200',
    address: {
      street: '42 MG Road',
      city: 'Bangalore',
      state: 'Karnataka',
      pincode: '560001',
    },
    orders: [
      { id: 'ORD001', date: '2024-12-15', total: 45999, status: 'Delivered', items: 2 },
      { id: 'ORD002', date: '2025-01-03', total: 12999, status: 'Shipped', items: 1 },
      { id: 'ORD003', date: '2025-01-20', total: 3499, status: 'Processing', items: 3 },
    ],
  });

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const updateProfile = (updates) => {
    setUser((prev) => ({ ...prev, ...updates }));
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const login = (email, password) => {
    setIsLoggedIn(true);
    return true;
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn, updateProfile, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
