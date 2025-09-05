export const Footer = () => {
    return (
        <footer className="max-w-100 m-auto text-center pb-8">
            <a href="https://frontend-mentor-luis.vercel.app/" 
                className="inline-block my-10 border bg-gray-100 border-gray-300 py-2 px-4 rounded-md text-center text-sm text-gray-700 hover:bg-gray-200 hover:text-blue-500 transition">
                Ver todos los desafíos
            </a>

            <div className="flex justify-around flex-wrap gap-4">
                <p className="attribution text-sm text-Neutral-900 dark:text-Neutral-0">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline text-Neutral-900 dark:text-Neutral-0 underline-offset-2 hover:text-blue-500 transition">Frontend Mentor</a>. 
                </p>
                <p className="attribution text-sm text-Neutral-900 dark:text-Neutral-0">
                    Coded by <a href="https://github.com/LuisChicaizaDev" target="_blank" className="underline underline-offset-2 hover:text-blue-500 transition">Luis Chicaiza</a>.
                </p>
            </div>
        </footer>
    );
}