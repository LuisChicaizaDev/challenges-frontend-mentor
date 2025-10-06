// import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import icono from "../assets/images/icon-add-to-cart.svg"

export const ProductCard = ({ image, name, category, price}) => {

    // Para el estado de la cantidad de productos en el carrito
    // const [quantity, setQuantity] = useState(0);

    // Extramos la funcion del store creado
    const { addItemToCart, updateItemInCart, deleteItemFromCart, cart } = useCartStore();


    let quantity = 0;
    // filtro para obtener un array con la cantidad de los items añadidos al carrito y tengan el mismo nombre, para sincronizar la cantidad de los items
    const itemsInCart = cart.filter(item => item.name === name);

    if (itemsInCart.length > 0) {
        quantity = itemsInCart[0].quantity;
    }

    // funcion para incrementar 
    const increment = () => {
        // Creamos la variable para pasarle directamente la cantidad y no depender del render
        const newQuantity = quantity + 1;

        // setQuantity(newQuantity);
        
        if (newQuantity > 1) {
            updateItemInCart({
                image,
                name,
                price,
                quantity: newQuantity
            });

        } else {
            // Pasamos un objeto con los datos
            addItemToCart({
                image,
                name,
                price,
                quantity: newQuantity
            });
        }
    }

    // funcion para decrementar
    const decrement = () => {
        const newQuantity = quantity - 1;
        // setQuantity(newQuantity);

        // Si los items = 0, elimina los items del carrito sino lo actualiza
        if (newQuantity === 0) {
            deleteItemFromCart(name);
        }else{
            updateItemInCart({
                image,
                name,
                price,
                quantity: newQuantity
            });
        }
    }

    return (
        <div>
            <div className="relative">

                <picture>
                    {/* Las resoluciones más grandes primero */}
                    <source media="(min-width: 1440px)" srcSet={image.desktop} />
                    <source media="(min-width: 768px)" srcSet={image.tablet} />
                    <img className={"rounded-xl mb-8 " + (quantity === 0 ? "border-none" : "border-2 border-Red")}  
                        src={image.mobile} 
                        alt={`Imagen de ${name}`}                    />
                </picture>

                {/* Si la cantidad es cero, se muestra agregar al carrito */}
                { quantity === 0 ? 
                    (<button 
                        onClick={increment}
                        className="bg-Rose-50 border-1 border-Rose-400 rounded-full
                        flex items-center justify-center gap-2 w-40 px-6 py-2.5 font-semibold text-sm
                        absolute -bottom-5 left-1/2 -translate-x-1/2
                        cursor-pointer hover:border-Red hover:text-Red transition-colors">
                        
                        <img src={icono} alt="Icono de carrito de compras"/>

                        <span>Add to Cart</span>

                    </button>) : 

                    (<div className="bg-Red border-1 border-Red rounded-full
                        flex items-center justify-between gap-2 w-40 px-6 py-2.5 font-semibold text-sm
                        absolute -bottom-5 left-1/2 -translate-x-1/2
                        cursor-pointer">
                        {/* icono de menos */}
                        <svg onClick={decrement}
                            xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"
                            className="text-Rose-100 hover:text-Red border border-Rose-100 size-5 rounded-full p-1 hover:bg-Rose-100 transition-colors">
                            <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z"/>
                        </svg>
                        
                        <span className="text-Rose-100">{ quantity }</span>

                        {/* icono de más */}
                        <svg onClick={increment}
                            xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10" 
                            className="text-Rose-100 hover:text-Red border border-Rose-100 size-5 rounded-full p-1 hover:bg-Rose-100 transition-colors">
                            <path fill="currentColor" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                        </svg>
                    </div>) 
                }

            </div>

            <p className="text-Rose-500 text-sm">{ category }</p>

            <h2 className="font-semibold">{ name }</h2>

            <p className="text-Red font-bold">{ price.toFixed(2) }€</p>
        </div>
    );
}