import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import PokemonDetails from './components/PokemonDetails/PokemonDetails'

function App() {
  
  return (
    <>
      <h1><Link to='/' className='title'>POKEDEX</Link></h1>

    <Routes>
      <Route path='/' element={<Pokedex />} />  
      <Route path='/pokemon/:id' element={<PokemonDetails />} />
      <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
    
    </>
  )
}

export default App
