import React from 'react'
import { BrowserRouter as Router, Route, Routes, useLocation, Navigate} from 'react-router-dom';
import Home from './Home'
import Nabar from './component/Nabar';
import Movies from './movies';


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
  const shouldShowSidebar = !sidebarPaths.some(path => location.pathname.includes(path));
  return(
    <>
     
     {location.pathname === '/' ? <Nabar /> : null}     
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/:id' element={<Movies />} />
        <Route path='*' element={<Navigate to="/" />} />       
        </Routes>
    
    </>
  )
}

export default App