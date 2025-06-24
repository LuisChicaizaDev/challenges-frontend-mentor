import cardAvatar from '../assets/images/avatar.jpg';
import { ShareButton } from './ShareButton';

export function CardFooter() {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex gap-4'>
                <img src={cardAvatar} alt='Imagen avatar card'
                className='size-12 rounded-full'
                />
                
                <div>
                    <p className='font-bold text-very-dark-grayish-blue'>               
                    Michelle Appleton
                    </p>
                    <p className='font-medium text-grayish-blue'>
                        28 Jun 2020
                    </p>
                </div>
            </div>

            <ShareButton />
        </div>
    );
}