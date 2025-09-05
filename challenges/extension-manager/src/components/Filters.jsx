import { Button } from './ui/button';

// Recibimos el setFilter y currentFilter como prop
export const Filters = ( {setFilter, currentFilter }) => {

    // Función para cambiar el filtro según el estado
    const handleClick = (event) => {
        // Seteamos el filtro con el texto del botón
        const selectedFilter = event.target.textContent;
        setFilter(selectedFilter);
    }


    return (
        <section className="flex flex-col items-center gap-4 mt-14 mb-8 md:flex-row md:justify-between">
            <h2 className="text-Neutral-900 dark:text-Neutral-0 text-3xl font-bold">
                Extensions List
            </h2>

            <div className="flex justify-center gap-3">
                {/* Pasamos el atributo handleClick a cada botón y una prop isActive a cada botón para indicar si está seleccionado  */}
                <Button 
                    handleClick={handleClick}
                    isActive={currentFilter === 'All'}
                >
                    All
                </Button>
                <Button 
                    handleClick={handleClick}
                    isActive={currentFilter === 'Active'}
                >
                    Active
                </Button>
                <Button 
                    handleClick={handleClick}
                    isActive={currentFilter === 'Inactive'}
                >
                    Inactive
                </Button>
            </div>
        </section>
    );
}