import { LaptopMinimalCheck } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

export const CardsInfo = () => {
    return (
        <section className='grid grid-cols-1 gap-4 md:grid-cols-3'>

            <div className='flex flex-col gap-4 justify-between p-6 bg-white border border-gray-300 rounded-xl dark:bg-slate-800 dark:border-slate-600'>
                <div className='flex justify-between'>
                    <h3 className='text-xl dark:text-white'>Desafíos Completados</h3>
                    <LaptopMinimalCheck className='text-gray-500 size-6 dark:text-gray-400'/>
                </div>
                <div>
                    <p className='font-black text-2xl dark:text-white'>2</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>Practicando distintos niveles de dificultad</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-between p-6 bg-white border border-gray-300 rounded-xl dark:bg-slate-800 dark:border-slate-600'>
                <div className='flex justify-between'>
                    <h3 className='text-xl dark:text-white'>Tecnologías Utilizadas</h3>
                    <CodeXml className='text-gray-500 size-6 dark:text-gray-400'/>
                </div>
                <div>
                    <p className='font-black text-2xl dark:text-white'>10</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>Herramientas de desarrollo y frameworks</p>
                </div>
            </div>

            <div className='flex flex-col gap-4 justify-between p-6 bg-white border border-gray-300 rounded-xl dark:bg-slate-800 dark:border-slate-600'>
                <div className='flex justify-between'>
                    <h3 className='text-xl dark:text-white'>Último Proyecto</h3>
                   <a href="#" target='_blank'>
                        <ExternalLink className='text-gray-500 size-6 hover:text-gray-400 transition-colors dark:text-gray-400 dark:hover:dark:text-gray-300'/>
                   </a>
                </div>
                <div>
                    <p className='font-black text-2xl dark:text-white'>Junio 2025</p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>Componente de vista previa del artículo</p>
                </div>
            </div>
            
        </section>
    );
}