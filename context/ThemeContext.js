
import { createContext, useState } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // false = light, true = dark
  
    function toggleTheme() {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }
  
    return (
      <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };