import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const Footer = () => { 
    return (
        <footer className="flex flex-col gap-8 items-center pb-10">
            <ul className="flex gap-4 justify-center flex-wrap">
                <li className="border-1 border-secondary-blue-200 size-9 flex justify-center items-center rounded-full text-primary-blue-500 
                hover:bg-primary-blue-500 hover:text-white hover:border-primary-blue-500 transition-all">
                    <a href="#">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                </li>
                <li className="border-1 border-secondary-blue-200 size-9 flex justify-center items-center rounded-full text-primary-blue-500 
                hover:bg-primary-blue-500 hover:text-white hover:border-primary-blue-500 transition-all">
                    <a href="#">
                       <FontAwesomeIcon icon={faTwitter} />
                    </a>
                </li>
                <li className="border-1 border-secondary-blue-200 size-9 flex justify-center items-center rounded-full text-primary-blue-500 
                hover:bg-primary-blue-500 hover:text-white hover:border-primary-blue-500 transition-all">
                    <a href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </li>
            </ul>

            <p className="copyright text-xs text-neutral-gray-400">
                &copy; Copyright Ping. All rights reserved.
            </p>
        </footer>
    );
}