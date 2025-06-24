import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ShowContextProvider } from './contexts/ShowContextProvider';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* El contexto se pasa a todos los componentes hijos, para englobar el resto de componentes*/} 
    <ShowContextProvider>
      <App />
    </ShowContextProvider>
  </StrictMode>,
)
