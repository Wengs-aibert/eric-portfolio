import { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import LoadingSplash from './components/LoadingSplash';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import About from './sections/About';
import Contact from './sections/Contact';

function AppContent() {
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Hide loading screen after 1.5 seconds
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <LoadingSplash isVisible={showLoading} />
      
      {!showLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <Services />
            <Projects />
            <TechStack />
            <Experience />
            <About />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;