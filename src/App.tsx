import { useState, useEffect } from "react";
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
import Logo from './assets/logo.jpg'
export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // This ensures the app only renders once the entire page has loaded
  useEffect(() => {
    const handlePageLoad = () => setIsLoaded(true);

    // Check if page already loaded (useful for fast reloads)
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handlePageLoad);
    }

    // Cleanup
    return () => window.removeEventListener("load", handlePageLoad);
  }, []);

if (!isLoaded) {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <img
        src={Logo}
        alt="Loading..."
        className="w-16 h-16 animate-blink-fade"
      />
    </div>
  );
}
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
        <Route path="/Europe" element={<Europe />} />
        <Route path="/European-jewels" element={<European />} />
        <Route path="/mediterranean-mosaic" element={<Medi />} />
        <Route path="/agra" element={<Category />} />
        <Route path="/Same-day-agra" element={<Sagra />} />
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
