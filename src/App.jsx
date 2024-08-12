
import './App.css'
import AboutUs from './components/AboutUs'
import BlogSection from './components/BlogSection'
import ContactForm from './components/ContactForm'
import FirstSection from './components/FirstSection'
import Footer from './components/Footer'
import Header from './components/Header'
import Partners from './components/Partners'
import Pricing from './components/Pricing'
import Projects from './components/Projects'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {

  return (
    <div className='overflow-hidden'>
     <Header/>
     <FirstSection/>
     <AboutUs/>
     <Projects/>
     <Services/>
     <Pricing/>
     <Partners/>
     <Testimonials/>
     <BlogSection/>
     <ContactForm/>
     <Footer/>
    </div>
  )
}

export default App
