import { useState } from 'react';
import data from '../../data.json';
import { Card } from './ui/card';

// Recibimos el filtro como prop All-Active-Inactive
export const CardsContainer = ({ filter }) => {
    
    // Estado para filtrar las extensiones, estado inicial toda la data
    const [extensions, setExtensions] = useState(data);
    // console.log('extensions: ', extensions);

    // Array para almacenar las extensiones filtradas
    let filteredExtensions = [];

    // Filtramos las extensiones por la propiedad isActive
    if (filter === 'Inactive') {
        filteredExtensions = extensions.filter( extension => !extension.isActive);
    } else if (filter === 'Active') {
        filteredExtensions = extensions.filter( extension => extension.isActive);
    }else if (filter === 'All') {
        filteredExtensions = extensions;
    }



    return (
        <div className="grid grid-cols-1 mb-10 md:grid-cols-2 xl:grid-cols-3 gap-3">
            {
                filteredExtensions.length === 0 ? (
                    <p className='text-Neutral-900 dark:text-Neutral-0 my-8'>No se encontraron extensiones.</p>
                ) : (
                    filteredExtensions.length > 0 && filteredExtensions.map( extension => (
                        // Asignamos la key, y pasamos toda la información del elemento con la sintaxis spread operator
                        <Card 
                            key={extension.name} 
                            {...extension}
                            extensions={extensions}
                            setExtensions={setExtensions}
                        /> 
                    ))
                )
            }
        </div>
    );
}