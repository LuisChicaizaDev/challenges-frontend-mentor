export const Badge = ({difficulty}) => {

    // Obtenemos el color dependiendo del nivel de dificultad
    const getColor = () => {
        switch (difficulty) {
            case 'Novato': 
                return 'bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800';
            case "Junior":
                return "bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:hover:bg-blue-800";
            case "Intermedio":
                return "bg-orange-100 text-orange-800 hover:bg-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:hover:bg-orange-800";
            case "Avanzado":
                return "bg-red-100 text-red-800 hover:bg-red-200 dark:bg-red-900 dark:text-red-200 dark:hover:bg-red-800";
            default:
                return "bg-gray-100 text-gray-800 hover:bg-gray-200";
        }
    }

    return (
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent
         ${getColor()} `}>
            { difficulty }
        </span>
    );
}