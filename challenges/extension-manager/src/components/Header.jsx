import { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.svg';
import LogoDark from '../assets/images/logo-dark.svg';
import IconSun from '../assets/images/icon-sun.svg';
import IconMoon from '../assets/images/icon-moon.svg';

export const Header = () => {

    // Obtenemos tema inicial
    const savedTheme = localStorage.getItem('dark-theme');

    // Si el tema está guardado, lo parseamos (usa false como valor por defecto si no existe)
    const initialDarkTheme = savedTheme ? JSON.parse(savedTheme) : false;

    // Creamos el estado para controlar el tema
    const [isDark, setIsDark] = useState(initialDarkTheme);

    // Efecto para sincronizar el DOM con el valor guardado enlocalStorage
    useEffect( () => {

        if(isDark){
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }

        // Guardamos el tema en localStorage
        localStorage.setItem('dark-theme', isDark);

    }, [isDark]); // el efecto se ejecutará cuando el valor de isDark cambie

    // Función para alternar el tema
    const handleClick = () =>{
        // Invertimos el valor del estado
        setIsDark(prev => !prev); // prev recibe el valor actual del estado y lo devuelve invertido
    }

    return (
        
        <header className="bg-Neutral-0 border border-Neutral-200 shadow-sm
            flex justify-between px-3 py-2 rounded-xl
            dark:bg-Neutral-800 dark:border-none">
            <img 
                src={isDark ? LogoDark : Logo}
                alt="Logo Extension Manager"
            />

            <button onClick={handleClick} className="bg-Neutral-100 size-12 grid place-content-center rounded-xl
            cursor-pointer hover:bg-Neutral-300 transition-colors duration-300
            dark:bg-Neutral-700 dark:hover:bg-Neutral-600">
                <img 
                    src={isDark ? IconSun : IconMoon} 
                    alt="Icon Moon" 
                />
            </button>
        </header>
    );
}