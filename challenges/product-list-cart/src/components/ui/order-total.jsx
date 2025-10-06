import { useCartStore } from "../../store/cartStore";

export const OrderTotal = () => {

    const {totalCart} = useCartStore();

    return (
        <div className="flex justify-between items-center my-2">
            <p className="text-sm text-Rose-900">
                Order Total
            </p>
            <p className="text-xl font-bold">
                {totalCart().toFixed(2)}€
            </p>
        </div>
    );
}