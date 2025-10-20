import { useEffect, useState } from "react";
import {Routes, Route} from "react-router-dom"
import About from "./pages/About";
import Skills from './pages/Skills'
import Projects from "./pages/Projects";
import Contact from './pages/Contact'
import { FaSun, FaMoon } from 'react-icons/fa';
import "./css/App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };
  useEffect(() => {
    const headers = document.querySelectorAll("h1");

    headers.forEach((textEl) => {
      const text = textEl.textContent;
      const words = text.split("");

      textEl.textContent = "";

      words.forEach((word) => {
        const span = document.createElement("span");

        if (word === " ") {
          span.innerHTML = "&nbsp;";
        } else {
          span.textContent = word;
          span.classList.add("ripple");

          span.addEventListener("mouseenter", () => {
            span.classList.remove("animate");
            void span.offsetWidth; // Force reflow
            span.classList.add("animate");
          });
        }
        textEl.appendChild(span);
      });
    });
  }, []);

  return (
      <>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
            {darkMode ? <FaMoon className="active" /> : <FaSun />}
      </div>
      </>
  );
}

export default App;