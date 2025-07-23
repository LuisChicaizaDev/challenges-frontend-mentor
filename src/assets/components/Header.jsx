import { ThemeToggle } from './ThemeToggle';
import { SiGithub } from "react-icons/si";

export const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200 dark:bg-slate-900 dark:border-slate-600">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:flex-row justify-between py-6 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col justify-center">
                    <h1 className="text-3xl font-title font-bold text-gray-900 dark:text-white">
                        Desafíos Frontend Mentor
                    </h1>
                    <p className="text-gray-600 mt-2 dark:text-gray-400">
                        Recopilación de retos realizados en <a href="https://www.frontendmentor.io/profile/LuisChicaizaDev" target="_blank" rel="noopener noreferrer" className="text-slate-500 underline underline-offset-2 dark:text-slate-400">
                        Frontend Mentor
                        </a> para mejorar mis habilidades como desarrollador frontend.
                    </p>
                </div>

                <div className="flex items-center justify-center gap-4 flex-wrap">
                    <a href="https://github.com/LuisChicaizaDev/challenges-frontend-mentor"
                        className='min-w-38 text-sm flex gap-2 items-center justify-center p-1.5 border border-gray-400 rounded-lg cursor-pointer
        hover:bg-gray-200 transition duration-500 dark:bg-gray-900 dark:hover:bg-gray-700 dark:text-white'>
                        <SiGithub className='size-5' />
                        Código fuente
                    </a>
                    <ThemeToggle />
                    <div className="text-center">
                        <div className="text-2xl font-bold text-slate-600 dark:text-slate-400">3</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Proyectos</div>
                    </div>
                </div>

            </div>
        </header>
    );
}