// components/Header.jsx
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleDarkMode } from '../features/theme/themeSlice';
// import { Menu, X, Moon, Sun, Zap } from 'lucide-react';

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const location = useLocation();
//   const dispatch = useDispatch();
//   const { darkMode } = useSelector(state => state.theme);

//   const navLinks = [
//     { path: '/', label: 'Home' },
//     { path: '/about', label: 'About' },
//     { path: '/resources', label: 'Resources' },
//     { path: '/blog', label: 'Blog' },
//     { path: '/quiz', label: 'Quiz' },
//     { path: '/team', label: 'Team' },
//     { path: '/alumni', label: 'Alumni' },
//     { path: '/contact', label: 'Contact' }
//   ];

//   const isActivePath = (path) => {
//     return location.pathname === path;
//   };

//   return (
//     <header className={`sticky top-0 z-50 border-b ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} transition-colors duration-300`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <Link to="/" className="flex items-center space-x-2">
//             <Zap className="h-8 w-8 text-blue-600" />
//             <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//               Nano-Nerds
//             </span>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.path}
//                 to={link.path}
//                 className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
//                   isActivePath(link.path)
//                     ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
//                     : darkMode
//                     ? 'text-gray-300 hover:text-white'
//                     : 'text-gray-700 hover:text-gray-900'
//                 }`}
//               >
//                 {link.label}
//               </Link>
//             ))}

//             {/* Theme Toggle */}
//             <button
//               onClick={() => dispatch(toggleDarkMode())}
//               className={`p-2 rounded-lg transition-colors duration-200 ${
//                 darkMode
//                   ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>

//             {/* Join/Login Button */}
//             <Link
//               to="/register"
//               className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
//             >
//               Join Club
//             </Link>
//           </nav>

//           {/* Mobile Menu Button */}
//           <div className="md:hidden flex items-center space-x-2">
//             <button
//               onClick={() => dispatch(toggleDarkMode())}
//               className={`p-2 rounded-lg transition-colors duration-200 ${
//                 darkMode
//                   ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600'
//                   : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
//               }`}
//             >
//               {darkMode ? <Sun size={20} /> : <Moon size={20} />}
//             </button>

//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className={`p-2 rounded-lg transition-colors duration-200 ${
//                 darkMode
//                   ? 'text-gray-300 hover:text-white hover:bg-gray-700'
//                   : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
//               }`}
//             >
//               {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <div className={`md:hidden border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'} py-4`}>
//             <nav className="flex flex-col space-y-4">
//               {navLinks.map((link) => (
//                 <Link
//                   key={link.path}
//                   to={link.path}
//                   onClick={() => setIsMenuOpen(false)}
//                   className={`text-sm font-medium transition-colors duration-200 hover:text-blue-600 ${
//                     isActivePath(link.path)
//                       ? 'text-blue-600 font-semibold'
//                       : darkMode
//                       ? 'text-gray-300 hover:text-white'
//                       : 'text-gray-700 hover:text-gray-900'
//                   }`}
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//               <Link
//                 to="/register"
//                 onClick={() => setIsMenuOpen(false)}
//                 className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 text-center"
//               >
//                 Join Club
//               </Link>
//             </nav>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

// components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../features/theme/themeSlice";
import { logout } from "../features/auth/authSlice.js";
import { Menu, X, Moon, Sun, LayoutDashboard, LogOut } from "lucide-react";
import logo from "../assets/LOGO_NN.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { darkMode } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.auth);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/resources", label: "Resources" },
    { path: "/quiz", label: "Quiz" },
    { path: "/team", label: "Team" },
    { path: "/contact", label: "Contact" },
  ];

  const isActivePath = (path) => location.pathname === path;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setIsMenuOpen(false);
  };

  return (
    <header className={`sticky top-0 z-50 border-b ${
      darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
    } transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img className="h-20 w-20" src={logo} alt="Nano-Nerds logo" />
            <span className="text-xl font-bold bg-gradient-to-red from-orange-600 to-orange-600 bg-clip-text text-transparent">
              NANO-NERDS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                  isActivePath(link.path)
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : darkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dashboard link - only when logged in */}
            {user && (
              <Link
                to="/dashboard"
                className={`text-sm font-medium flex items-center gap-1 transition-colors duration-200 hover:text-orange-600 ${
                  isActivePath("/dashboard")
                    ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                    : darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                <LayoutDashboard size={16} />
                Dashboard
              </Link>
            )}

            {/* Theme Toggle */}
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center gap-3">
                {/* User greeting */}
                <span className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}>
                  👋 {user.name.split(" ")[0]}
                </span>

                {/* Role badge */}
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  user.role === "admin"
                    ? "bg-purple-100 text-purple-700"
                    : user.role === "moderator"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-green-100 text-green-700"
                }`}>
                  {user.role}
                </span>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-600 transition-all duration-200"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/login"
                  className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition-all duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-orange-700 transition-all duration-200"
                >
                  Join Club
                </Link>
              </div>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => dispatch(toggleDarkMode())}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-200 ${
                darkMode
                  ? "text-gray-300 hover:text-white hover:bg-gray-700"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden border-t ${
            darkMode ? "border-gray-700" : "border-gray-200"
          } py-4`}>
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-orange-600 ${
                    isActivePath(link.path)
                      ? "text-orange-600 font-semibold"
                      : darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Dashboard link */}
              {user && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-sm font-medium flex items-center gap-1 text-orange-600"
                >
                  <LayoutDashboard size={16} />
                  Dashboard
                </Link>
              )}

              {/* Mobile Auth */}
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 bg-red-500 text-white px-4 py-2 rounded-lg font-medium text-center justify-center"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              ) : (
                <>
                  <Link
                    to="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="border border-orange-600 text-orange-600 px-4 py-2 rounded-lg font-medium text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                  >
                    Join Club
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;