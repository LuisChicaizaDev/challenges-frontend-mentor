// Zustand es una librería de manejo de estado, Reemplaza a Redux, Context API
// Importamos zustand para manejar el estado del carrito
import { create } from 'zustand';


// Creamos un store y lo exportamos
export const useCartStore = create ( (set, get) => ({
    // Creamos un objeto con propiedades
    isModalClose: true, // para mostrar o no el modal de confirmación
    cart: [], // Array para ir agregando los items 

    // creamos una arrow function para el toggle del modal
    toggleModal : () => set( (state) => ({
        isModalClose: !state.isModalClose
    })),

    // Arrow function para resetear el carrito
    resetCart: () => set(  () => ({
        cart: []
    })),
    
    // Arrow function para agregar items al carrito
    addItemToCart: (newItem) => set( (state) => ({
        cart: [...state.cart, newItem] // spread del array, se hace una copia y se añade el nuevo item
    })),

    // Actualizar los items añadidos al carrito
    updateItemInCart: (updateItem) => set( (state) => ({
        // evalua si el item.name es igual al item que se le pasa, si es true me devuelve el item actualizado
        cart: state.cart.map(item => item.name === updateItem.name ? {...updateItem} : item)
    })),

    // Eliminar los items del carrito
    deleteItemFromCart: (name) => set( (state) => ({
        // Filtramos para recorrer los items y me devuelva el array con los items que son diferentes al nombre que le paso
        cart: state.cart.filter(item => item.name !== name)
    })),

    // Calcular la suma del total
    // reduce() transforma un array en un solo valor acumulando resultados
    totalCart: () => get().cart.reduce(
        (acc, item) => {
            // Calcular subtotal del item actual
            const itemSubtotal = item.quantity * item.price;
            // Sumar al acumulador
            return acc + itemSubtotal;
        }, 0 // Valor inicial del acumulador
    ),

    // Calcular el total de items en el carrito, la suma de cantidades
    totalItems: () => get().cart.reduce((acc, item) => acc + item.quantity, 0 )
}));