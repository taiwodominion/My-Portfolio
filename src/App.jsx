import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './css/App.css';

function App() {
  useEffect(() => {
    // Add ripple animation to headings
    const headers = document.querySelectorAll('h1');
    
    headers.forEach((textEl) => {
      const text = textEl.textContent;
      const words = text.split('');
      
      textEl.textContent = '';
      
      words.forEach((word) => {
        const span = document.createElement('span');
        
        if (word === ' ') {
          span.innerHTML = '&nbsp;';
        } else {
          span.textContent = word;
          span.classList.add('ripple');
          
          span.addEventListener('mouseenter', () => {
            span.classList.remove('animate');
            void span.offsetWidth; // Force reflow
            span.classList.add('animate');
          });
        }
        textEl.appendChild(span);
      });
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;