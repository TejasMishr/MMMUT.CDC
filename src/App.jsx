import DashBoard from "./components/pages/dashboard"
import ContactForm from "./components/pages/contactus"
import LandingPage from "./components/pages/LandingPage/Landingpage"
import RegistrationForm from "./components/pages/RegistrationForm"
import OurEvents from "./components/pages/Ourevent"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/layout/AppLayout"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      // errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<LandingPage/>
        },
        {
          path:"/events",
          element:<OurEvents/>
        },
        {
          path:"/team",
          element:<LandingPage/>,
          // loader:getmovieData,
        },
        {
          path:"/contact",
          element:<ContactForm/> 
        },
        {
          path:"/verify",
          element:<DashBoard/>,
        },
      ]
     },
   ]);
   return <RouterProvider router={router}/>
}

export default App