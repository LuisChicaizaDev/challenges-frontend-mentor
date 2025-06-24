import { useContext } from 'react';
import { ShowContext } from '../contexts/ShowContext';

import cardImage from '../assets/images/drawers.jpg';
import { CardFooter } from './CardFooter';
import { Tooltip } from './Tooltip';

export const Card = () => {    

    // Usamos el contexto y le pasamos el contexto creado, y llamamos lo que necesito
    const {isOpen} = useContext(ShowContext);

    return (
        <div className='w-[340px] shadow-lg rounded-xl overflow-hidden relative lg:w-[850px] lg:flex lg:overflow-visible'>
            <div className='h-[210px] overflow-hidden lg:h-full lg:rounded-l-xl'>
                <img src={cardImage} alt='Mesa con un jarrón encima'
                className='w-full object-cover -mt-4 lg:mt-0 lg:h-[300px] lg:w-[950px] lg:object-left'
                 />
            </div>
            
            <div className='flex flex-col gap-10 pt-8 px-6 pb-4 bg-white lg:px-10 lg:pb-6 lg:gap-6 lg:rounded-r-xl'>
               
                <div className='flex flex-col gap-4'>
                    <p className='font-bold text-very-dark-grayish-blue lg:text-xl'>
                    Shift the overall look and feel by adding these wonderful 
                    touches to furniture in your home
                    </p>
                    <p className='text-[15px] text-desaturated-dark-blue'>
                        Ever been in a room and felt like something was missing? Perhaps 
                        it felt slightly bare and uninviting. I’ve got some simple tips 
                        to help you make any room feel complete.
                    </p>
                </div>
               
                <CardFooter />

                { // Si es true, mostrar los iconos de compartir
                    isOpen && <Tooltip />
                }

            </div>
        </div>
    );
}