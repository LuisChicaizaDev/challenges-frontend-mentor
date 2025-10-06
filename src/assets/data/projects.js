import fourCardSection from '../images/four-card-section.jpg';
import articlePreviewComponent from '../images/article-preview-component.jpg';
import pingComingSoon from '../images/ping-coming-soon.jpg';
import extensionManager from '../images/extension-manager.jpg';
import productListCart from '../images/product-list-cart.jpg';

export const projects = [
    {
        id: 1,
        title: 'Product list with cart',
        description: 'Lista de productos con carrito dinámico. Manejo del estado global con Zustand y datos cargados desde JSON. Permite agregar, disminuir y eliminar cantidades. Interfaz responsive con Tailwind.',
        image: productListCart,
        technologies: ['React', 'Tailwind CSS', 'Zustand', 'JSON'],
        difficulty: 'Junior',
        demo: 'https://challenges-frontend-mentor-oyft.vercel.app',
        code: 'https://github.com/LuisChicaizaDev/challenges-frontend-mentor/tree/main/challenges/product-list-cart',
        completed: 'Septiembre 2025'
    },
    {
        id: 2,
        title: 'Browser extension manager UI',
        description: 'Gestor de extensiones con datos dinámicos desde JSON. Permite activar, desactivar, eliminar y filtrar extensiones. Estado manejado con useState y tema light/dark persistente con useEffect y localStorage.',
        image: extensionManager,
        technologies: ['HTML', 'React', 'Tailwind CSS', 'JSON'],
        difficulty: 'Junior',
        demo: 'https://challenges-frontend-mentor-391b.vercel.app/',
        code: 'https://github.com/LuisChicaizaDev/challenges-frontend-mentor/tree/main/challenges/extension-manager',
        completed: 'Agosto 2025'
    },
    {
        id: 3,
        title: 'Ping Coming Soon Page',
        description: 'Landing page con formulario de suscripción. Utilicé React Hook Form para validar el campo de email, y React Hot Toast para mostrar un mensaje de envío exitoso de forma visual.',
        image: pingComingSoon,
        technologies: ['HTML', 'React', 'React Hook Form', 'Tailwind CSS'],
        difficulty: 'Junior',
        demo: 'https://challenges-frontend-mentor-5o1n.vercel.app/',
        code: 'https://github.com/LuisChicaizaDev/challenges-frontend-mentor/tree/main/challenges/ping-coming-soon-page',
        completed: 'Julio 2025'
    },
    {
        id: 4,
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
        id: 5,
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