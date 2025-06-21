import image from '../images/default.svg';
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

export const Card = () => {
    return (
        <div className="overflow-hidden hover:shadow-lg rounded-xl border border-gray-300 dark:hover:shadow-lg dark:shadow-slate-950/70 transition-shadow duration-300 bg-white dark:bg-slate-800 dark:border-slate-700">

            {/* Card Image */}
            <div className="aspect-video relative overflow-hidden">
                <img  src={image} 
                    alt="Card Image"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3">
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-200
                  dark:bg-green-900 dark:text-green-200 dark:hover:bg-green-800">
                    Novato
                </span>
                </div>
            </div>

            {/* Card Content */}
            <div className="space-y-5 p-6">
                {/* Card Header */}
                <div>
                    <h3 className="text-lg text-gray-900 font-bold dark:text-white">
                        Proyecto Nuevo
                    </h3>

                    <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis expedita porro voluptas vel ab repellat? Distinctio beatae perspiciatis assumenda cum vel atque tempore velit, voluptatum laborum iste.
                    </p>
                </div>

                {/* Card Footer */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-1">
                        <span
                        className="text-xs bg-slate-200/90 px-2.5 py-0.5 rounded-full  font-semibold dark:bg-slate-700 dark:text-slate-300"
                        >
                        HTML
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                            Completed: 20/06/2025
                        </span>
                    </div>

                    {/* Card Links */}
                    <div className="flex gap-2 flex-wrap">
                        <a href='#' 
                            className="flex flex-1 gap-2 justify-center items-center text-sm px-4 py-2 border bg-black rounded-md text-white font-semibold hover:bg-black/85 transition 
                            dark:bg-white dark:text-black dark:hover:bg-gray-300" 
                            target="_blank" rel="noopener noreferrer"
                        >
                            <ExternalLink className='size-4' />
                            Ver Demo    
                        </a>
                        <a href='#' 
                            className="flex flex-1 gap-2 justify-center items-center text-sm py-2 px-4 border border-gray-300 rounded-md font-semibold hover:bg-gray-200 transition
                            dark:bg-black dark:text-white dark:hover:bg-black/50 dark:border-black" 
                            target="_blank" rel="noopener noreferrer"
                        >
                            <Github className='size-4' />
                            Código  
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}