import { Link, NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon, LayoutDashboard, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth/authSlice.js";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { user } = useSelector((state) => state.auth);
  console.log("Auth user:", user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Persist theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 font-medium transition
     ${
       isActive
         ? "text-orange-500"
         : "text-gray-800 dark:text-gray-200 hover:text-orange-500"
     }`;

  return (
    <nav className="w-full bg-white dark:bg-slate-900 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Nano Nerds" className="h-8" />
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Nano Nerds
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>
          <NavLink to="/resources" className={navLinkClass}>Resources</NavLink>
          <NavLink to="/quiz" className={navLinkClass}>Quiz</NavLink>
          <NavLink to="/team" className={navLinkClass}>Team</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>

          {/* Show Dashboard link only when logged in */}
          {user && (
            <NavLink to="/dashboard" className={navLinkClass}>
              <span className="flex items-center gap-1">
                <LayoutDashboard size={16} />
                Dashboard
              </span>
            </NavLink>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full 
                       bg-gray-100 dark:bg-slate-700
                       text-gray-800 dark:text-white
                       hover:scale-110 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Show user info + logout OR Join Club button */}
          {user ? (
            <div className="flex items-center gap-3">
              {/* User greeting */}
              <span className="hidden md:block text-sm font-medium text-gray-700 dark:text-gray-300">
                👋 {user.name.split(" ")[0]}
              </span>

              {/* Role badge */}
              <span className={`hidden md:block px-2 py-1 rounded-full text-xs font-semibold ${
                user.role === "admin"
                  ? "bg-purple-100 text-purple-700"
                  : user.role === "moderator"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-green-100 text-green-700"
              }`}>
                {user.role}
              </span>

              {/* Logout button */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-1 px-4 py-2 rounded-lg font-semibold
                           bg-red-500 text-white hover:bg-red-600 transition"
              >
                <LogOut size={16} />
                <span className="hidden md:block">Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              {/* Login button */}
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg font-semibold
                           border border-orange-500 text-orange-500
                           hover:bg-orange-50 transition"
              >
                Login
              </Link>

              {/* Join Club button */}
              <Link
                to="/register"
                className="px-4 py-2 rounded-lg font-semibold
                           bg-orange-500 text-white
                           hover:bg-orange-600 transition"
              >
                Join Club
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;