import { Card } from './components/Card';
import { Footer } from './components/Footer';

function App() {

  return (
    <>
      <main className='min-h-screen py-14 grid gap-15 justify-center items-end bg-light-grayish-blue font-manrope sm:gap-0'>
        <Card />
        <Footer />
      </main>
    </>
  )
}

export default App
