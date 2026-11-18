import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './pages/Header.tsx'
import Mainhero from './pages/Mainhero.tsx'
import QuickMenu from './pages/QuickMenu.tsx'
import Department from './pages/Department.tsx'
import Announcement from './pages/Announcement.tsx'
import Maps from './pages/Map.tsx'
import Footer from './pages/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Mainhero />
    <QuickMenu />
    <Department />
    <Announcement />
    <Maps />
    <Footer />
  </StrictMode>,
)
