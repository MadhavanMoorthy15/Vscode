import { Outlet } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import Footer from './Footer'
import Header from './Header'
export default function Layout(){ const {toast}=useShop(); return <div className="min-h-screen"><Header/><main><Outlet/></main><Footer/>{toast&&<div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-white shadow-xl">{toast}</div>}</div> }
