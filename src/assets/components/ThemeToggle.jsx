import { Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

export const ThemeToggle = () => {
    
    // Se comprueba si el tema está guardado en localStorage
    const themePrefer = localStorage.getItem("theme");

    // El estado del tema inicial
    const [theme, setTheme] = useState(themePrefer || "light");

    // Efecto para aplicar el tema al documento
    useEffect( () => {
        // Aplica y alterna la clase al html
        document.documentElement.classList = theme;

        // Guarda el tema en localStorage
        localStorage.setItem("theme", theme);

    }, [theme]);

    // Función para alternar entre light/dark
    const toggleTheme = () => {
        setTheme( prevTheme => (prevTheme === "light" ? "dark" : "light") );
    }

    return (
        <button className='p-1.5 border border-gray-400 rounded-lg cursor-pointer
        hover:bg-gray-300 transition duration-500 dark:hover:bg-gray-700' 
            aria-label='Alternar tema'
            onClick={toggleTheme}
        >
            { theme === "light" ? 
                <Moon className='dark:-rotate-90 dark:scale-0 transition'/> 
                :  
                <Sun color='#fff' className='dark:rotate-90 dark:scale-100 transition'/> 
            } 
           
        </button>
    );
}