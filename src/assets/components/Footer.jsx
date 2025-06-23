export const Footer = () => {
    return (
        <footer className="bg-white p-4 border-t border-gray-200 dark:bg-slate-900 dark:border-slate-600">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between text-gray-600 dark:text-gray-400">
               <p className="text-center grow-1 my-1">
                    © 2025. Desarrollado con <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline underline-offset-2 dark:text-slate-400"> 
                    React</a> y <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline underline-offset-2 dark:text-slate-400"> 
                    Tailwind CSS
                    </a> por <a href="https://github.com/LuisChicaizaDev" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline underline-offset-2 dark:text-slate-400">
                    Luis Chicaiza
                    </a>.
               </p>

               <p className="text-center grow-1 my-1">
                    Desafíos extraídos de <a href="https://www.frontendmentor.io" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline underline-offset-2 dark:text-slate-400">Frontend Mentor</a>.
               </p>
            </div>
        </footer>
    );
}