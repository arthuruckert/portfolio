import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Bento from './components/Bento'
import CasesScroll from './components/CasesScroll'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { LanguageProvider } from './context/LanguageContext'
import './index.css'

const isTouchDevice = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

export default function App() {
  return (
    <LanguageProvider>
      {!isTouchDevice && <Cursor />}
      <Navbar />
      <main>
        <Hero />
        <Bento />
        <CasesScroll />
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </LanguageProvider>
  )
}
