import './sass/main.sass'
import './scripts/animations'
import './scripts/scrollTo'

import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import Section from './components/Section'

function App() {
  return (
    <>
      <Header />
      <Section>
        <Home />
      </Section>
      <Section name="Projects">
        <Projects />
      </Section>
      <Section name="About">
        <About />
      </Section>
      <Section name="Resume">
        <Resume />
      </Section>
      <Section name="Contact">
        <Contact />
      </Section>
      <Footer />
    </>
  )
}

export default App
