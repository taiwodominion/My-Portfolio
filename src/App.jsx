// import { useEffect } from "react";
// import {Routes, Route} from "react-router-dom"
// // import Header from './components/Header';
// // import Hero from './components/Hero';
// // import About from './components/About';
// // import Projects from './components/Projects';
// // import Contact from './components/Contact';
// // import Footer from './components/Footer';
// import About from "./pages/About";
// import "./css/App.css";

// function App() {
//   useEffect(() => {
//     const headers = document.querySelectorAll("h1");

//     headers.forEach((textEl) => {
//       const text = textEl.textContent;
//       const words = text.split("");

//       textEl.textContent = "";

//       words.forEach((word) => {
//         const span = document.createElement("span");

//         if (word === " ") {
//           span.innerHTML = "&nbsp;";
//         } else {
//           span.textContent = word;
//           span.classList.add("ripple");

//           span.addEventListener("mouseenter", () => {
//             span.classList.remove("animate");
//             void span.offsetWidth; // Force reflow
//             span.classList.add("animate");
//           });
//         }
//         textEl.appendChild(span);
//       });
//     });
//   }, []);

//   return (
//       <Routes>

//         <Route path="/about" element={<About />} />
//       </Routes>
//   );
// }

// export default App;




import { useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import About from "./pages/About";
import Skills from './pages/Skills'
import Projects from "./pages/Projects";
import Contact from './pages/Contact'
import "./css/App.css";

function App() {
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
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
}

export default App;