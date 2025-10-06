import { ProductCard } from "./ProductCard";
import data from "../../data.json";

export const CardsContainer = () => {
    return (
        <div className="my-10 w-85 md:w-174 lg:w-200">
            <h1 className="text-4xl font-bold text-Rose-900">Desserts</h1>

            <div className="grid grid-cols-1 gap-6 my-8 md:grid-cols-3">
                {
                    data.map(item => <ProductCard key= {item.name} {...item} />)
                }
            </div>
        </div>
    );
}