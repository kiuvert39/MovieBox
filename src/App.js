import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Nabar from './component/Nabar';
import Movies from './movies';

function App() {
  return (
    <>
    <Router >
    <Nabar/> 
        <Routes>
            <Route path='/' element={<Home/>}  />
            <Route path='/movies/:id' element={<Movies/>}  />
        </Routes>
    </Router>
    
    </>
  )
}

export default App