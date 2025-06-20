import image from '../images/default.svg';
import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';

export const Card = () => {
    return (
        <div className="overflow-hidden hover:shadow-lg dark:hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700">

            {/* Card Image */}
            <div className="aspect-video relative overflow-hidden">
                <img  src={image} 
                    alt="Card Image"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute top-3 right-3">
                  <span>Novato</span>
                </div>
            </div>

            {/* Card Content */}
            <div className="space-y-4">
                {/* Card Header */}
                <div>
                    <h3 className="text-lg text-gray-900 dark:text-white">Proyecto Nuevo</h3>
                    <p className="text-sm line-clamp-2 text-gray-600 dark:text-gray-300">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet omnis expedita porro voluptas vel ab repellat? Distinctio beatae perspiciatis assumenda cum vel atque tempore velit, voluptatum laborum iste.
                    </p>
                </div>

                {/* Card Footer */}
                <div>
                    <div className="flex flex-wrap gap-1">
                        <span
                        className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                        >
                        html
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">
                            Completed: 20/06/2025
                        </span>
                    </div>

                    <div className="flex gap-2">
                        <a href='#' className="flex-1" target="_blank" rel="noopener noreferrer">
                            <ExternalLink />
                            Live Demo
                        </a>
                        <a href='#' className="flex-1" target="_blank" rel="noopener noreferrer">
                            <Github />
                            Code
                        </a>
                    </div>
                </div>
            </div>
            
        </div>
    );
}