
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Mice from "./Pages/Mice";
import About from "./Pages/About";
import Tour from "./Pages/Tour";
import Guide from "./Pages/Guide";
import Category from "./Pages/Category";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrolltoTop";
import TajMahal from "./Components/tour/taj mahal";
import Delhi from "./Components/tour/dehli";
import RajasthanMain from "./Components/tour/Rajasthan/main";
import Jaipur from "./Components/tour/jaipur/jep";
import Gold from "./Components/tour/Golden/Gold";
import Kerala from "./Components/tour/Kerala/Kerala";
import Dubai from "./Components/tour/Dubai/Dubai";
import Europe from "./Components/tour/Europe/Europe";
import European from "./Components/tour/European/Swiss";
import Medi from "./Components/tour/Medi/Medi";
import Sagra from "./Components/tour/Same-day-agra/Sagra";
import Sunrise from "./Components/tour/sunrise/sunrise";
import Index from './Components/tour/dehli-agra/index'
import Hindex from "./Components/tour/half-dehli/hindex";
import Temp from "./Components/tour/dehliTemp/Temp";
import Bindex from "./Components/tour/bangkok/bindex";
export default function App() {


  // This ensures the app only renders once the entire page has loaded
 
  return (
    <>
    
      <Navbar />
      <ScrollToTop behavior="smooth" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mice" element={<Mice />} />
        <Route path="/tours" element={<Tour />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/about" element={<About />} />
        <Route path="/Dubai" element={<Dubai />} />
        <Route path="/bangkok" element={<Bindex />} />
        <Route path="/delhi-agra" element={<Index/>}/>
        <Route path="/half-delhi" element={<Hindex/>}/> 
        <Route path="/delhi-temple" element={<Temp/>}/>
        <Route path="/Europe" element={<Europe />} />
        <Route path="/European-jewels" element={<European />} />
        <Route path="/mediterranean-mosaic" element={<Medi />} />
        <Route path="/agra" element={<Category />} />
        <Route path="/Same-day-agra" element={<Sagra/>} />
        <Route path="/sunrise-taj-mahal-tour" element={< Sunrise/>} />
        <Route path="/taj-mahal" element={<TajMahal />} />
        <Route path="/delhi" element={<Delhi />} />
        <Route path="/jaipur" element={<Jaipur />} />
        <Route path="/golden-triangle" element={<Gold />} />
        <Route path="/rajasthan" element={<RajasthanMain />} />
        <Route path="/kerala-backwaters-bliss" element={<Kerala />} />
      </Routes>
    
    </>
  );
}
