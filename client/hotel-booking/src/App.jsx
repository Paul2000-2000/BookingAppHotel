import HomePage from "./pages/HomePage/HomePage"
import LoRePage from "./pages/LoRePage/LoRePage"

import {BrowserRouter , Route, Routes} from 'react-router-dom'

function App() {
  

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/lorepage" element={<LoRePage/>} />
      </Routes>
    </BrowserRouter>
     
    
  )
}

export default App
