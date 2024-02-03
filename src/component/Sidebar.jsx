import Reactm,{useState} from 'react'

function Sidebar() {
    const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar