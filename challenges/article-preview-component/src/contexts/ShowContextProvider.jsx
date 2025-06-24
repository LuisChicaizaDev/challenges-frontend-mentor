import { useState } from 'react';
import { ShowContext } from './ShowContext';

// El contexto engloba el resto de componentes
export const ShowContextProvider = ( {children} ) => {
    
    const [isOpen, setIsOpen] = useState(false);

    return (
        // El contexto se pasa a todos los componentes hijos
        <ShowContext value={{isOpen, setIsOpen}}>
            {children}
        </ShowContext>
    );
}