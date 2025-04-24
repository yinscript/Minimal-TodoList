import './App.css';
import React, { useState, useEffect } from 'react';
import { TodoWrapper } from './components/TodoWrapper';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

function App() {
  // State to manage light/dark theme
  const [isLightMode, setIsLightMode] = useState(false);

  // Toggle between light and dark mode
  const toggleTheme = () => {
    setIsLightMode(prevState => !prevState);
  };

  // Effect to apply theme to the body element
  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      document.body.classList.add('dark-mode');
      document.body.classList.remove('light-mode');
    }
  }, [isLightMode]);

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isLightMode={isLightMode} />
      <TodoWrapper />
      <Footer />
    </div>
  );
}

export default App;
