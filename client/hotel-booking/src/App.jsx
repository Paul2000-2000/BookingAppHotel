import HomePage from "./pages/HomePage/HomePage"
import LoRePage from "./pages/LoRePage/LoRePage"
import AdminPage from "./pages/Admin/AdminPage/AdminPage"
import HotelsPage from "./pages/Admin/HotelsPage/HotelsPage"
import AddHotelPage from "./pages/Admin/AddHotelPage/AddHotelPage"
<<<<<<< HEAD
=======
import EditHotelPage from "./pages/Admin/EditHotelPage/EditHotelPage"
import HotelPage from "./pages/Admin/HotelPage/HotelPage"
>>>>>>> 8b93908 (hotelPage almost done , need resposnvei)

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
<<<<<<< HEAD
=======
        <Route path="/editHotel/:id" element={<EditHotelPage/>}/>
        <Route path="/hotels/hotel/:id" element={<HotelPage/>}/>
>>>>>>> 8b93908 (hotelPage almost done , need resposnvei)

      </Routes>
    </BrowserRouter>
     
    
  )
}

export default App
