export const CartConfirmItem = ( {image, name, price, quantity}) => {
    return (
        <div className="flex justify-between items-center py-3 border-2 border-transparent border-b-Rose-100">
            
            <div className="flex gap-5">
                <img
                    className="size-12 rounded-md"
                    src={image.thumbnail}
                    alt={`Imagen de ${name}`}
                />
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
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-Rose-900 font-semibold">
                {(quantity*price).toFixed(2)}€
            </p>
        </div>
    );
}