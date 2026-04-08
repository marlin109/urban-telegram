import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Recipe from './pages/Recipe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
