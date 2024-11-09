// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

// IMPORTING ROUTES
// import SiteRoutes from './routes.js'
import Dashboard from "./components/pages/dashboard"
import ContactForm from "./components/pages/contactus"
import LandingPage from "./components/pages/LandingPage/Landingpage"
import RegistrationForm from "./components/pages/RegistrationForm"

function App() {

  return (
    <>
  <LandingPage />
  <Dashboard />
  <RegistrationForm />
  </>

  )
}

export default App
