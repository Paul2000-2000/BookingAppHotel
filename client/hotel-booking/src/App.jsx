import HomePage from "./pages/HomePage/HomePage"
import LoRePage from "./pages/LoRePage/LoRePage"
import AdminPage from "./pages/Admin/AdminPage/AdminPage"
import HotelsPage from "./pages/Admin/HotelsPage/HotelsPage"
import AddHotelPage from "./pages/Admin/AddHotelPage/AddHotelPage"
import EditHotelPage from "./pages/Admin/EditHotelPage/EditHotelPage"

import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<HomePage/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/lorepage" element={<LoRePage/>} />
        <Route path="/hotels" element={<HotelsPage/>}/>
        <Route path="/addHotel" element={<AddHotelPage/>}/>
        <Route path="/editHotel/:id" element={<EditHotelPage/>}/>

      </Routes>
    </BrowserRouter>
     
    
  )
}

export default App
