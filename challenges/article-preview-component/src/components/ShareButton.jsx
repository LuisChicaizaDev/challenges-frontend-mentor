import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

export const ShareButton = ({style}) => {
    // Usamos el contexto y le pasamos el contexto creado, y llamamos lo que necesito
    const { isOpen, setIsOpen } = useContext(ShowContext);

    // Función para intercambiar el estado de isOpen
    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <button className={`${isOpen ? 'bg-desaturated-dark-blue' : 'bg-light-grayish-blue' } p-3 rounded-full cursor-pointer ${style}` }
            aria-label='Botón de compartir'
            onClick = { handleClick }
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path fill={isOpen ? "#fff" : "#48556a"} d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"/>
            </svg>
        </button>
    );
}