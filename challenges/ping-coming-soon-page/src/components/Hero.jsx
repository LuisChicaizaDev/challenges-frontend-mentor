import Logo from '../assets/images/logo.svg';

export const Hero = () => {
    return (
        
        <header className="text-center mb-8">
            <img src={Logo} alt="Logo de Ping"
                className="mx-auto mt-14 mb-10 w-14 md:w-18"
            />
            <h1 className="text-2xl my-6 text-neutral-gray-400 font-light md:text-4xl">
                We are launching <span className="font-bold text-neutral-blue-950">soon!</span> 
            </h1>
            <p className="text-sm my-6 font-light text-neutral-blue-950 md:text-base">
                Subscribe and get notified
            </p>
        </header>
    );
}