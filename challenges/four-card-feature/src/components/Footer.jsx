export const Footer = () => {
    return (
        <footer className="text-center">
            <a href="https://frontend-mentor-luis.vercel.app/" 
                className="inline-block my-8 border bg-gray-300 border-gray-300 py-2 px-4 rounded-md text-center text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500 transition">
                Ver todos los desafíos
            </a>
            <p className="text-center">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline underline-offset-2">Frontend Mentor</a>. 
            Coded by <a href="https://github.com/LuisChicaizaDev" target="_blank" className="underline text-blue underline-offset-2 hover:text-blue-500 transition">Luis Chicaiza</a>.
            </p>
        </footer>
    );
}