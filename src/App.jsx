import Navegador from './components/Navegador'
import { Contactos, Home, NotFound } from './layout'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Navegador />
      {/* utilizando las route dentro de routes de react-routers */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contactos' element={<Contactos />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

    </>
  )
}

export default App
