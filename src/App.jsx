import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home"
import { CoinDetail } from "./Pages/CoinDetail"

function App() {


  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>} />
   <Route path="/coin/:id" element={<CoinDetail />} />
  </Routes>
  
  </BrowserRouter>
    </>
  )
}

export default App
