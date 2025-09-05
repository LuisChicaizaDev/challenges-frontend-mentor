// importamos el componente Toggle de RSuite y estilos
import { Toggle } from 'rsuite';
import 'rsuite/Toggle/styles/index.css';
import { Button } from './button';

export const Card = ( { logo, name, description, isActive, extensions , setExtensions } ) => {

    // Función para alternar la propiedad isActive
    const onToggle = () => {
        // Extraemos la extensión actual
        const currentExtension = extensions.filter(extension => extension.name === name)[0];
        
        // Creamos una copia de la extensión actual y modificamos el valor de isActive
        const updatedExtension = { ...currentExtension, isActive: !currentExtension.isActive };

        const newExtensions = extensions.map(extension => {
            if (extension.name === name) {
                extension = { ...updatedExtension}
            }
            return extension;
        });

        setExtensions(newExtensions);
    }

    // Función para remover la extensión
    const onRemove = () => {
        if (window.confirm(`¿Quieres eliminar la extensión "${name}"?`)) {
            // Crea un nuevo array sin la extensión actual
            // filter() mantiene solo las extensiones que NO tienen el mismo nombre
            const newExtensions = extensions.filter(extension => extension.name !== name);
            
            setExtensions(newExtensions);
            //console.log('newExtensions: ', newExtensions);
        }
    }

    return (
        
        <div className="bg-Neutral-0 border border-Neutral-200 rounded-2xl shadow-sm p-5
            flex flex-col justify-between min-h-54
            dark:bg-Neutral-800 dark:text-Neutral-0 dark:border-Neutral-600">
            <div className="flex gap-4 items-start">
                <img src={logo} alt={`Logo de la extensión ${name}`} />
                <div className="flex flex-col gap-1">
                    <h3 className="text-Neutral-900 font-bold text-xl dark:text-Neutral-0">
                        {name}
                    </h3>
                    <p className="text-Neutral-600 dark:text-Neutral-300">
                        {description}
                    </p>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <Button handleClick={onRemove} textRemove>Remove</Button>
            
                <Toggle onClick={onToggle} checked={isActive} color="red"/>
            </div>
        </div>
    );
}