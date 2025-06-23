import { Card } from './Card';
import imageDefault from '../images/default.svg';

export const CardsContainer = () => {

    const projects = [
        {
            id: 1,
            title: 'Proyecto Nuevooo',
            description: 'Prueba json proyectos. Pasar props al componente Card para renderizarlo',
            image: imageDefault,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            difficulty: 'Novato',
            demo: '#demo',
            code: '#code',
            completed: 'Junio 2025'
        },
        {
            id: 2,
            title: 'Proyecto Nuevooo',
            description: 'Prueba json proyectos. Pasar props al componente Card para renderizarlo',
            image: imageDefault,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            difficulty: 'Junior',
            demo: '#demo',
            code: '#code',
            completed: 'Jluio 2025'
        },
        {
            id: 3,
            title: 'Proyecto Nuevooo',
            description: 'Prueba json proyectos. Pasar props al componente Card para renderizarlo',
            image: imageDefault,
            technologies: ['HTML', 'CSS', 'JavaScript'],
            difficulty: 'Intermedio',
            demo: '#demo',
            code: '#code',
            completed: 'Jluio 2025'
        }
    ];

    return (
        <section className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
            { 
                projects.map(project => {
                    return <Card key={project.id} {...project} /> // Spread operator, para pasar todas las propiedades del objeto como props
                })
            }
        </section>
    );
}