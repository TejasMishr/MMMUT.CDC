// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// IMPORTING ROUTES
// import SiteRoutes from './routes.js'
import DashBoard from "./components/pages/dashboard"
import ContactForm from "./components/pages/contactus"
import LandingPage from "./components/pages/LandingPage/Landingpage"
import RegistrationForm from "./components/pages/RegistrationForm"
import OurEvents from "./components/pages/Ourevent"
import { Navbar } from "./components/Navbar/Navbar"
function App() {

  return (
    <>
    <Navbar />
  <LandingPage />
  <DashBoard />
  <RegistrationForm />
  <ContactForm/>
  <OurEvents/>
  </>
   

  )
}

export default App
