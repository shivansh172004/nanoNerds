import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Blog from "./pages/Blog";
import Team from "./pages/Team";
import Alumni from "./pages/Alumni";
import Contact from "./pages/Contact";
import Quiz from "./pages/Quiz";
import Register from "./pages/Register";

 function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;