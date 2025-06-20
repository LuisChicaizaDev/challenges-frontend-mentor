export const Header = () => {
    return (
        <header className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex flex-col gap-6 sm:flex-row justify-between py-6 px-4 sm:px-6 lg:px-8">
                <div>
                    <h1 className="text-3xl font-title font-bold text-gray-900">Desafíos Frontend Mentor</h1>
                    <p className="text-gray-600 mt-2 md:w-xl">
                        Recopilación de los retos que voy completando para mejorar mis habilidades en frontend.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-sky-700">6</div>
                            <div className="text-sm text-gray-500">Proyectos</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-emerald-600">15</div>
                            <div className="text-sm text-gray-500">Tecnologías</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}