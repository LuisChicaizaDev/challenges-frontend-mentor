import { Header} from './assets/components/Header';
import { CardsInfo } from './assets/components/CardsInfo';
import { CardsContainer} from './assets/components/CardsContainer';

function App() {

  return (
    <>
      <div className="min-h-screen dark:bg-slate-900">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CardsInfo />
          {/* Projects Grid */}
          <CardsContainer />
        </main>
      </div>
    </>
  )
}

export default App
