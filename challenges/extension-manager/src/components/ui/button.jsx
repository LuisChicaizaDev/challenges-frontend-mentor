// children es una prop especial que contiene el contenido entre las etiquetas del componente
// Puede ser texto, elementos React, o una combinación de ambos
export const Button = ({ children, textRemove, handleClick, isActive = false }) => {
    return (
        <button onClick={handleClick} className={
            `border rounded-full shadow-xs cursor-pointer transition-colors duration-300
            ${isActive ? 
                'bg-Red-500 text-Neutral-0 dark:bg-Red-500 dark:text-Neutral-900' 
                : 'bg-Neutral-0 text-Neutral-900 border-Neutral-200 dark:bg-Neutral-700 dark:text-Neutral-0 dark:border-Neutral-600'}
            hover:bg-Neutral-0/50
            active:bg-Red-500 active:text-Neutral-0

            
            dark:hover:bg-Neutral-600 dark:hover:text-Neutral-0
            dark:active:bg-Red-500 dark:active:text-Neutral-900
            ${textRemove ? 
            'text-sm px-3 py-1.5 hover:bg-Red-500 hover:text-Neutral-0 hover:border-Red-500 dark:hover:bg-Red-500 dark:hover:text-Neutral-900' 
            : 'px-5 py-2 hover:text-Neutral-600'}`
        }>

            {children}
        </button>
    );
}