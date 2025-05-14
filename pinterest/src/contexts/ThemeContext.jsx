import { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() => {
        const storedTheme = localStorage.getItem('theme');
        return storedTheme === 'dark' ? 'dark' : 'light';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-theme', theme === 'dark');
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const themeValue = {
        theme,
        toggleTheme,
    }

    return (
        <ThemeContext.Provider value={themeValue}>
            {children}
        </ThemeContext.Provider>
    )
}

function useTheme() {
    return useContext(ThemeContext);
}

export {ThemeProvider, useTheme};