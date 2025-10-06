import { CartItem } from "./CartItem";
import { OrderTotal } from "./ui/order-total";
import { CartButton } from "./ui/cart-button";
import { useCartStore } from "../store/cartStore";
import iconCarbonNeutral from "../assets/images/icon-carbon-neutral.svg";
import imgEmptyCart from "../assets/images/illustration-empty-cart.svg"

export const Cart = () => {

    const { toggleModal, cart, totalItems } = useCartStore();

    let numberItems = totalItems();
    
    return (
        
        <div className="bg-Rose-50 flex flex-col gap-3 p-6 rounded-xl my-10 min-w-85">
            <h2 className="text-Red text-2xl font-bold">
                Your Cart ({numberItems}) 
            </h2>

            { numberItems === 0 ? 
                (<div className="flex flex-col items-center gap-8 mt-6">
                        <img 
                            src={imgEmptyCart}
                            alt="Ilustración de carrito vacío"
                        />
                        <p className="text-sm font-medium text-Rose-500">
                            Your added items will appear here
                        </p>
                    </div>
                ) : 
                (
                    <>
                   <div className="max-h-100 overflow-y-auto pr-2">
                        {/* // Pasamos las propiedades que contiene el array cart, creado en store */}
                        { cart.map(item => <CartItem key={item.name} {...item} /> ) }
                   </div>
                    
                    <OrderTotal />
        
                    <div className="flex justify-center items-center gap-2 my-2 bg-Rose-100 text-xs rounded-lg px-2 py-3">
                        <img 
                            src={iconCarbonNeutral}
                            alt="Icono de carbono neutral"
                        />
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>

                    <CartButton onClick={toggleModal} text={"Confirm Order"} />
                    </>
                )
            }
            
        </div>
    );
}