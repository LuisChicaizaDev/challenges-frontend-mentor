export const CartButton = ( {text, onClick }) => {
    return (
        <button onClick={onClick} className="bg-Red text-Rose-100 font-semibold w-full px-4 py-3 rounded-full
            cursor-pointer hover:bg-Red/90 transition-colors">
            {text}
        </button>
    );
}