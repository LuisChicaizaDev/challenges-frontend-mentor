import { Hero } from './components/Hero';
import { CardsContainer } from './components/CardsContainer';
import { Footer } from './components/Footer';

function App() {

  return (
    <main className="font-Popins text-grey-500 flex justify-center">
      <section className="w-[375px] flex justify-center flex-col gap-18 p-6 my-8 xl:w-auto">
        <Hero />
        <CardsContainer />
        <Footer />
      </section>
    </main>
  )
}

export default App
