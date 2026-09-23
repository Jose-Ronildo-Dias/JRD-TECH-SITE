import Header from './components/Header/Header.jsx'
import Hero from './components/Hero/Hero.jsx'
import Highlights from './components/Highlights/Highlights.jsx'
import About from './components/About/About.jsx'
import MissionVision from './components/MissionVision/MissionVision.jsx'
import Values from './components/Values/Values.jsx'
import Services from './components/Services/Services.jsx'
import Audiences from './components/Audiences/Audiences.jsx'
import Process from './components/Process/Process.jsx'
import Projects from './components/Projects/Projects.jsx'
import Differentials from './components/Differentials/Differentials.jsx'
import CTASection from './components/CTASection/CTASection.jsx'
import FAQ from './components/FAQ/FAQ.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton.jsx'

export default function App() {
  return (
    <>
      <a href="#main" className="visually-hidden">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Highlights />
        <About />
        <MissionVision />
        <Values />
        <Services />
        <Audiences />
        <Process />
        <Projects />
        <Differentials />
        <CTASection />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
