import React,{useState} from 'react'
import '../style/stylebar.style.css'


function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item) => {
      setSelectedItem(item);
    };


  return (
    <div className="sidebar bg-opacity-90">
      <div className=' mt-6 mb-10'>
        <img src='/poster.png' alt="MovieBox" />
      </div>
      <div
        className={`sidebar-item ${selectedItem === 'Home' ? 'selected' : ''}`}
        onClick={() => handleItemClick('Home')}
      >
         <div className="indicator"></div>
        Home
      </div>
      <div
        className={`sidebar-item ${selectedItem === 'About' ? 'selected' : ''}`}
        onClick={() => handleItemClick('About')}
      >
         <div className="indicator"></div>
        About
      </div>
      <div
        className={`sidebar-item ${selectedItem === 'Contact' ? 'selected' : ''}`}
        onClick={() => handleItemClick('Contact')}
      >
         <div className="indicator"></div>
        Contact
      </div>
    </div>
  )
}

export default Sidebar