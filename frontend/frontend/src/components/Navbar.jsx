// import { useDispatch, useSelector } from "react-redux";
// import { toggleTheme } from "../features/theme/themeSlice";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const dispatch = useDispatch();
//   const darkMode = useSelector((state) => state.theme.darkMode);

//   return (
//     <header className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} sticky top-0 border-b`}>
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <Link to="/" className="text-xl font-bold">Nano-Nerds</Link>
//         <nav className="flex gap-6 text-sm">
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/resources">Resources</Link>
//           <Link to="/blog">Blog</Link>
//           <Link to="/team">Team</Link>
//           <Link to="/alumni">Alumni</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//         <button
//           onClick={() => dispatch(toggleTheme())}
//           className="ml-4 px-3 py-1 border rounded"
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>
//     </header>
//   );
// }

// components/Navbar.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useWindowState } from "../context/WindowStateContext";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { isMaximized } = useWindowState();

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-white shadow z-50 flex items-center px-6">
      
      {/* Logo always visible */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Nano Nerds" className="h-8 w-8" />
        <AnimatePresence>
          {!isMaximized && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-bold text-lg"
            >
              Nano-Nerds
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Menu hides on maximize */}
      <AnimatePresence>
        {!isMaximized && (
          <motion.ul
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            className="ml-auto flex gap-6"
          >
            <li>Home</li>
            <li>About</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Contact</li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

