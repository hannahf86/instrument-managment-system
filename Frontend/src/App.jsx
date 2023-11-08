// REACT ROUTER DOM
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// SCENES
import Login from "./Scenes/Login"
import Dashboard from './Scenes/Dashboard'


function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
