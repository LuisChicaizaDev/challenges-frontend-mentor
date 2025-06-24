import { Card } from './Card';
import { projects } from '../data/projects';

export const CardsContainer = () => {

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