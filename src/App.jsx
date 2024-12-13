import { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import DashBoard from "./components/pages/dashboard"
import ContactForm from "./components/pages/contactus"
import LandingPage from "./components/pages/LandingPage/Landingpage"
//import RegistrationForm from "./components/pages/RegistrationForm"
import OurEvents from "./components/pages/Ourevent"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer"
import Registration  from "./components/pages/RegistrationForm"
import CreateTeam  from "./components/pages/CreateTeam"
import Admin  from "./components/pages/Admin/AdminPanel"
import AddMember  from "./components/pages/AddMembers"
//import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from "./components/layout/AppLayout"
import Event from "./components/pages/algoolympics"
import Teamsa from "./components/pages/Team/Team"
import LoginForm from "./components/pages/login"
import RoleProtectedRoute from "./ProtectedRoute";
import Profile from "./components/pages/Profile";
import PaymentPage from "./components/pages/payment";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check login status
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user); // If user exists, set to true
  }, []);
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
          path:"/payment",
          element:<PaymentPage/>
        },
        {
          path:"/events/algOlympics",
          element:<Event/>
        },
        {
          path:"/cdcteam",
          element:<Teamsa/>
        },
        {
          path: "/admin",
          element: (
            <RoleProtectedRoute requiredRole={["Superadmin"]}>
              <Admin />
            </RoleProtectedRoute>
          ),
        },
        {
          path: "/team",
          element: (
            <RoleProtectedRoute requiredRole={["Team Leader"]}>
              <LandingPage />
            </RoleProtectedRoute>
          ),
        },
        {
          path: "/createTeam",
          element: (
            <RoleProtectedRoute requiredRole={["Team Leader"]}>
              <CreateTeam />
            </RoleProtectedRoute>
          ),
        },
        {
          path:"/addmem",
          element:<AddMember/>,
          // loader:getmovieData,
        },
        {
          path:"/signup",
          element:<Registration/>,
          // loader:getmovieData,
        },
        {
          path:"/contact",
          element:<ContactForm/> 
        },
        {
          path: "/profile",
          element: <DashBoard/>,
        },
        {
          path:"/dashboard",
          element:<Profile />,
        },
        {
          path:"/login",
          element:<LoginForm/>,
        },
      ]
     },
   ]);
   return <RouterProvider router={router}/>
}

export default App