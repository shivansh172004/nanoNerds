import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/theme/themeSlice";
import { Link } from "react-router-dom";

export default function Navbar() {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    <header className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-black"} sticky top-0 border-b`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Nano-Nerds</Link>
        <nav className="flex gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/resources">Resources</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/team">Team</Link>
          <Link to="/alumni">Alumni</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <button
          onClick={() => dispatch(toggleTheme())}
          className="ml-4 px-3 py-1 border rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
