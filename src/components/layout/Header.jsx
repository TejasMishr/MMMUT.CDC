import { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import decodeTokenAndGetRole from '../../config/decodeToken'; // Adjust the import path

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [userRole, setUserRole] = useState('');

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsLoggedIn(!!user);

    const decodedRole = decodeTokenAndGetRole();
    if (decodedRole) {
      setUserRole(decodedRole.role);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("bg-black", "text-white");
    } else {
      document.body.classList.remove("bg-black", "text-white");
    }
  }, [isDarkMode]);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="flex items-center justify-between py-4 px-6 w-full bg-black text-white relative z-50">
      <div className="flex items-center space-x-4">
        <span className="lg:text-2xl text-lg font-bold font-poppins tracking-wide">
          CODERS & DEVELOPERS CLUB
        </span>
      </div>

      <ul className="hidden lg:flex space-x-8 text-lg font-roboto-slab font-semibold">
        <li>
          <NavLink to="/" className="hover:text-gray-300 transition-colors duration-300 block p-2">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="events" className="hover:text-gray-300 transition-colors duration-300 block p-2">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/cdcteam" className="hover:text-gray-300 transition-colors duration-300 block p-2">
            Members
          </NavLink>
        </li>
        <li>
          <NavLink to="contact" className="hover:text-gray-300 transition-colors duration-300 block p-2">
            Contact
          </NavLink>
        </li>
        {isLoggedIn && (
          <li>
            <NavLink to="dashboard" className="hover:text-gray-300 transition-colors duration-300 block p-2">
              Dashboard
            </NavLink>
          </li>
        )}
      </ul>

      <div className="hidden lg:flex items-center space-x-4">
        {isLoggedIn ? (
          <div className="relative">
            <FaUser className="h-8 w-8" onClick={toggleDropdown} />
            {showDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <NavLink to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                  Profile
                </NavLink>
                {userRole === 'Team Leader' && (
                  <NavLink to="/createTeam" className="block px-4 py-2 hover:bg-gray-200">
                    Team
                  </NavLink>
                )}
                <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-200">
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/login"
            className="text-lg font-roboto-slab font-semibold hover:text-gray-300 transition-colors duration-300 block p-2"
          >
            LOGIN
          </NavLink>
        )}
      </div>

      <button onClick={toggleMobileMenu} className="lg:hidden text-white text-2xl focus:outline-none">
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {isMobileMenuOpen && (
        <ul className="absolute top-full left-0 w-full h-screen bg-black bg-opacity-90 text-center py-4 lg:hidden">
          <li onClick={closeMobileMenu}>
            <NavLink to="/" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
              Home
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="events" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
              Events
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="cdcteam" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
              Members
            </NavLink>
          </li>
          <li onClick={closeMobileMenu}>
            <NavLink to="contact" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
              Contact
            </NavLink>
          </li>
          {isLoggedIn && (
            <>
              <li onClick={closeMobileMenu}>
                <NavLink to="dashboard" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
                  Dashboard
                </NavLink>
              </li>
              <li onClick={closeMobileMenu}>
                <NavLink to="/profile" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
                  Profile
                </NavLink>
              </li>
              {userRole === 'Team Leader' && (
                <li onClick={closeMobileMenu}>
                  <NavLink to="/createTeam" className="text-white text-lg font-roboto-slab hover:text-gray-300 transition-colors duration-300 block py-2">
                    Team
                  </NavLink>
                </li>
              )}
              <li>
                <button
                  onClick={handleLogout}
                  className="text-white text-lg p-2 rounded-full bg-red-500 hover:bg-red-700 font-roboto-slab hover:text-gray-300 transition-colors duration-300 w-32 text-center"
                >
                  Logout
                </button>
              </li>
            </>
          )}
          {!isLoggedIn && (
            <li className="flex justify-center">
              <NavLink
                to="/login"
                className="text-white text-lg w-20 p-2 text-center font-roboto-slab rounded-full bg-green-500 hover:bg-green-700 transition-colors duration-300 block"
              >
                LOGIN
              </NavLink>
            </li>
          )}
        </ul>
      )}
    </nav>
  );
};
