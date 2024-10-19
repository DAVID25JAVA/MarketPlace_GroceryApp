import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import ContactUs from './Pages/ContactUs'
import AboutUs from "./Pages/AboutUs"
import Footer from "./Pages/Footer"



const App = () => {
  return (
    <div className="mx-3 sm:mx-[5%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs/>} />
        <Route/>
      </Routes>
      <Footer/>
    </div>
   )
}
 export default App