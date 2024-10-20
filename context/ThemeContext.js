
import { createContext, useState } from 'react';

import Colors from '../constants/Colors';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false); // false = light, true = dark
  
    function toggleTheme() {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }

    const theme = isDarkTheme ? 
        {foregroundColor: Colors.lightBackground, 
          backgroundColor: Colors.darkBackground,
          textColor: Colors.lightText,
          primaryColor: Colors.secondary,
          secondaryColor: Colors.primary,} 
      : {foregroundColor: Colors.darkBackground, 
          backgroundColor: Colors.lightBackground,
          textColor: Colors.secondary,
          primaryColor: Colors.primary,
          secondaryColor: Colors.secondary,};
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeContext, ThemeProvider };