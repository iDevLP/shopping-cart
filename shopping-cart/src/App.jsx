import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Home from './components/Home'
import Cart from './components/Cart'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/products' element={ <Products/> } ></Route>
        <Route path='/cart' element={ <Cart/> } ></Route>
      </Routes>

    </>
  )
}

export default App
