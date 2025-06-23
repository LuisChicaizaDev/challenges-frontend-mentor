import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

export const Cta = () => {
    return (
        <section className="my-20 text-center">
            <div className="max-w-2xl mx-auto flex flex-col gap-4 justify-between p-6 bg-white border border-gray-300 rounded-xl dark:bg-slate-800 dark:border-slate-600">
                <h3 className="text-2xl font-semibold leading-none tracking-tight dark:text-white">
                    ¿Quieres ver más?
                </h3>

                <p className="text-sm text-muted-foreground dark:text-gray-300">
                    Visita mi perfil de GitHub para ver todas mis soluciones de Frontend Mentor y otros proyectos.
                </p>

                <div className="flex gap-2 flex-wrap">
                     <a href="https://github.com/LuisChicaizaDev"
                        className="min-w-40 flex flex-1 gap-2 justify-center items-center text-sm py-2.5 px-4 border border-gray-300 rounded-md font-semibold hover:bg-gray-200 transition
                        dark:bg-black dark:text-white dark:hover:bg-black/50 dark:border-black" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        <Github className='size-4' />
                        Ver Perfil de GitHub  
                    </a>
                    <a href="https://luischicaizadev.github.io"
                        className="min-w-40 flex flex-1 gap-2 justify-center items-center text-sm px-4 py-2.5 border bg-black rounded-md text-white font-semibold hover:bg-black/85 transition 
                        dark:bg-white dark:text-black dark:hover:bg-gray-300" 
                        target="_blank" rel="noopener noreferrer"
                    >
                        <ExternalLink className='size-4' />
                        Ver mi Portafolio    
                    </a>
                </div>
            </div>
        </section>
    );
}