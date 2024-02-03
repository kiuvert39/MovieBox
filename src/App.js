import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home'
import Nabar from './component/Nabar';
import Movies from './movies';
import Sidebar from '../src/component/Sidebar'

function App() {
  
  return (
    <>
    <Router >
     <Appcontent/>
   
    </Router>
    
    </>
  )
}


function Appcontent(){
  const location = useLocation();
  
  const sidebarPaths = ['/movies/:id'];
  const HomePath = ['/']
  const shouldShowSidebar = !sidebarPaths.some(path => location.pathname.includes(path));
  return(
    <>
     
     {location.pathname === '/' ? <Nabar /> : null}     
        <Routes>
            <Route path='/' element={<Home/>}  />
             <Route path='/movies/:id' element={<Movies/>}/>           
        </Routes>
    
    </>
  )
}

export default App