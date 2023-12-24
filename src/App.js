import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'
import Nabar from './component/Nabar';

function App() {
  return (
    <>
    <Router >
    {/* <Nabar/> */}
        <Routes>
            <Route path='/' element={<Home/>}  />
        </Routes>
    </Router>
    
    </>
  )
}

export default App