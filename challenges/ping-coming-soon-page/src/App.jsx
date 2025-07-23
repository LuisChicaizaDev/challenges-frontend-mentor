import { Hero } from './components/Hero';
import { Form } from './components/Form';
import { Dashboard } from './components/Dashboard';
import { Footer } from './components/Footer';

function App() {

  return (
    <main className="font-libre-franklin h-dvh py-8">
      <Hero />
      <Form />
      <Dashboard />
      <Footer />

      <div className="max-w-60 m-auto text-center pb-8">
        <a href="https://frontend-mentor-luis.vercel.app/" 
        className="inline-block my-10 border bg-gray-100 border-gray-300 py-2 px-4 rounded-md text-center text-sm text-gray-700 hover:bg-gray-200 hover:text-blue-500 transition">
          Ver todos los desafíos
        </a>

        <p className="attribution text-sm">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="underline underline-offset-2">Frontend Mentor</a>. 
          Coded by <a href="https://github.com/LuisChicaizaDev" target="_blank" className="underline text-primary-blue-500 underline-offset-2 hover:text-blue-500 transition">Luis Chicaiza</a>.
        </p> 
      </div>
    </main>
  )
}

export default App
