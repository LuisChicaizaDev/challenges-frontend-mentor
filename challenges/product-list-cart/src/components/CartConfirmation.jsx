import { CartConfirmItem } from "./CartConfirmItem";
import { OrderTotal } from "./ui/order-total";
import { CartButton } from "./ui/cart-button";
import { useCartStore } from "../store/cartStore";
import iconConfirmed from "../assets/images/icon-order-confirmed.svg";

export const CartConfirmation = () => {

    // Destructuring del objeto creado con zustand para mostrar/ocultar el modal
    const { isModalClose, toggleModal, cart, resetCart } = useCartStore();

    const handleNewOrder = () => {
        toggleModal();
        resetCart();
    }

    return (
        <dialog hidden={isModalClose}
            className="bg-black/50 fixed w-full h-dvh
            grid place-items-end md:place-items-center overflow-y-auto"
        >
            <div className="w-full bg-white py-6 px-6 rounded-t-xl md:w-140 md:rounded-xl">
                <div className="flex justify-between mb-5">

                    <img 
                        src={iconConfirmed}
                        alt="Icono de confirmación de pedido"
                    />

                    {/*boton cerrar modal */}
                    <button onClick={toggleModal} type="button" title="Cerrar" 
                        className="self-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"
                            className="text-Rose-400 border-2 border-Rose-300 size-6 rounded-full p-0.5 transition-colors cursor-pointer
                            hover:border-Rose-900 hover:text-Rose-900">
                            <path fill="currentColor" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/>
                        </svg>
                    </button>
                </div>

                <h2 className="text-5xl font-bold text-Rose-900 leading-tight md:text-4xl">
                    Order Confirmed
                </h2>
                <p className="text-Rose-500 my-1">
                    We hope you enjoyed your food!
                </p>

                <div className="bg-Rose-50 rounded-lg flex flex-col gap-3 px-6 py-4 my-6">
                    
                    <div className="max-h-100 overflow-y-auto pr-2">
                        {
                            cart.map(item => <CartConfirmItem key={item.name} {...item} />)
                        }
                    </div>
                    
                    
                    <OrderTotal />
                </div>

                <CartButton onClick={handleNewOrder} text="Start New Order"/>
            </div>
        </dialog>
    );
}