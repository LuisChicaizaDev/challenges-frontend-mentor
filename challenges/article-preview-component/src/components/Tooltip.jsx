import facebookIcon from '../assets/images/icon-facebook.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import { ShareButton } from './ShareButton';

export const Tooltip = () => {
    return (
        <div className='flex justify-between items-center bg-very-dark-grayish-blue absolute bottom-0 left-0 w-full z-20 px-6 py-5 lg:py-4.5 lg:left-166 lg:bottom-27 lg:w-[250px] lg:rounded-xl lg:justify-center lg:shadow-[0px_12px_8px_rgba(236,242,248,0.8)] lg:after:content-[""] lg:after:absolute lg:after:-bottom-8 lg:after:left-28 lg:after:border-16 lg:after:border-transparent lg:after:border-t-very-dark-grayish-blue'>
            <div className='flex gap-6'>
                <p className='text-grayish-blue uppercase tracking-[5px] text-sm'>
                    Share
                </p>
                
                <div className='flex gap-4'>
                    <img src={facebookIcon} alt='Icono de Facebook'/>
                    <img src={twitterIcon} alt='Icono de Twitter'/>
                    <img src={pinterestIcon} alt='Icono de Pinterest'/>
                </div>
            </div>

            <ShareButton style='lg:hidden'/>
        </div>
    );
}