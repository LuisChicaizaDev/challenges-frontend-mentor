import { useEffect } from "react";
import { CardsContainer } from "./components/CardsContainer";
import { Cart } from "./components/Cart";
import { CartConfirmation } from "./components/CartConfirmation";
import { Footer } from "./components/Footer";
import { useCartStore } from "./store/cartStore";

function App() {

  const { isModalClose } = useCartStore();

  // Bloquea el scroll cuando el modal esté abierto
  useEffect( () => {
    
    if (isModalClose) {
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.body.style.overflow = 'unset';
    };

  }, [isModalClose]);

  return (
    <>
      <main className="flex justify-center">
        <section>
          <div className="xl:flex xl:gap-7 xl:items-start">
            <CardsContainer />
            <Cart />
          </div>
        </section>
        <CartConfirmation />
      </main>
      <Footer />
    </>
  )
}

export default App
