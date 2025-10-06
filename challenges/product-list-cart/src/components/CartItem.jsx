import { useCartStore } from "../store/cartStore";

export const CartItem = ( {name, price, quantity }) => {

    const {deleteItemFromCart} = useCartStore();

    return (
        <div className="flex justify-between items-center py-3 border-2 border-transparent border-b-Rose-100">
            <div>
                <h3 className="font-semibold">
                    {name}
                </h3>
                <div className="flex gap-4">
                    <span className="text-Red text-sm font-bold">
                        {quantity}x
                    </span>

                    <div className="flex gap-2">
                        <p className="text-Rose-500 text-sm">
                            @ {price.toFixed(2)}€
                        </p>
                        <p className="text-Rose-500 font-bold text-sm">
                            {(quantity*price).toFixed(2)}€
                        </p>
                    </div>
                </div>
            </div>

            {/*icono eliminar item, al hacer click me devolverá el array con los items distintos al nombre que paso */}
            <svg onClick={()=> deleteItemFromCart(name)} xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"
                className="text-Rose-400 border-2 border-Rose-300 size-4.5 rounded-full p-0.5 transition-colors cursor-pointer
                hover:border-Rose-900 hover:text-Rose-900">
                <path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
            </svg>

        </div>
    );
}