import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState({
    name: 'Rahul Sharma',
    email: 'rahul.sharma@example.com',
    phone: '9876543210',
    address: '221B Baker Street, Mumbai, India',
    role: 'admin',
  })

  const login = (userData) => setUser(userData)
  const logout = () => setUser(null)

  const updateProfile = (updates) => {
    setUser({ ...user, ...updates })
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, updateProfile }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
