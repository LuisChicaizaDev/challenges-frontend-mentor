import { useState } from 'react';

import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { CardsContainer } from './components/CardsContainer';
import { Footer } from './components/Footer';

function App() {

  // Creamos el estado para el filtro, por defecto All
  const [filter, setFilter] = useState('All');
  // console.log('filter: ', filter);

  return (

    <main className="min-h-screen light-gradient p-4 flex flex-col items-center
    dark:dark-gradient font-noto-sans">
      <section className="w-86 md:w-2xl xl:w-6xl">
        <Header />

        {/* Pasamos el estado actual del filtro al componente Filters */}
        <Filters setFilter={setFilter} currentFilter={filter}/>

        <CardsContainer filter={filter} />
      </section>

      <Footer />
    </main>
    
  )
}

export default App
