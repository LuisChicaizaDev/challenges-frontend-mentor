import { Header} from './assets/components/Header';
import { CardsInfo } from './assets/components/CardsInfo';
import { Card } from './assets/components/Card';

function App() {

  return (
    <>
      <div className="min-h-screen dark:bg-slate-900">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CardsInfo />
          {/* Projects Grid */}
          <div className="grid grid-cols-1 my-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card />
          </div>
        </main>
      </div>
    </>
  )
}

export default App
