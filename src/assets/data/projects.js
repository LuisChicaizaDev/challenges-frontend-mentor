import imageDefault from '../images/default.svg';
import fourCardSection from '../images/four-card-section.jpg';
import articlePreviewComponent from '../images/article-preview-component.jpg';

export const projects = [
    {
        id: 1,
        title: 'Article Preview Component',
        description: 'Previsualización de artículo con tooltip de compartir. Implementé el estado del tooltip con React (useState + Context API) para evitar prop drilling y manejar la lógica de apertura/cierre.',
        image: articlePreviewComponent,
        technologies: ['HTML', 'React', 'Context API', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: '#demo',
        code: '#code',
        completed: 'Junio 2025'
    },
    {
        id: 2,
        title: 'Four Card Feature Section',
        description: 'Desafío de diseño responsive con varias cards. Lo desarrollé con React y Tailwind CSS para practicar con componentes reutilizables y utilidades de Tailwind para el layout.',
        image: fourCardSection,
        technologies: ['HTML', 'React', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: '#demo',
        code: '#code',
        completed: 'Junio 2025'
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