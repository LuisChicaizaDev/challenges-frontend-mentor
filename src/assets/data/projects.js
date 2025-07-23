import fourCardSection from '../images/four-card-section.jpg';
import articlePreviewComponent from '../images/article-preview-component.jpg';
import pingComingSoon from '../images/ping-coming-soon.jpg';

export const projects = [
    {
        id: 1,
        title: 'Ping Coming Soon Page',
        description: 'Landing page con formulario de suscripción. Utilicé React Hook Form para validar el campo de email, y React Hot Toast para mostrar un mensaje de envío exitoso de forma visual.',
        image: pingComingSoon,
        technologies: ['HTML', 'React', 'React Hook Form', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: '#',
        code: '#',
        completed: 'Julio 2025'
    },
    {
        id: 2,
        title: 'Article Preview Component',
        description: 'Previsualización de artículo con tooltip de compartir. Implementé el estado del tooltip con React (useState + Context API) para evitar prop drilling y manejar la lógica de apertura/cierre.',
        image: articlePreviewComponent,
        technologies: ['HTML', 'React', 'Context API', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: 'https://article-preview-component-luis.vercel.app',
        code: 'https://github.com/LuisChicaizaDev/challenges-frontend-mentor/tree/main/challenges/article-preview-component',
        completed: 'Junio 2025'
    },
    {
        id: 3,
        title: 'Four Card Feature Section',
        description: 'Desafío de diseño responsive con varias cards. Lo desarrollé con React y Tailwind CSS para practicar con componentes reutilizables y utilidades de Tailwind para el layout.',
        image: fourCardSection,
        technologies: ['HTML', 'React', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: 'https://challenges-frontend-mentor-1if1.vercel.app',
        code: 'https://github.com/LuisChicaizaDev/challenges-frontend-mentor/tree/main/challenges/four-card-feature',
        completed: 'Junio 2025'
    }
];