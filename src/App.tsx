
import { Route , Routes} from "react-router-dom"
import Home from './Pages/Home'
import Mice from "./Pages/Mice"
import About from "./Pages/About"
import Tour from "./Pages/Tour"
import Guide from "./Pages/Guide"
import Category from "./Pages/Category"
import Navbar from "./Components/Navbar"
import ScrollToTop from "./Components/ScrolltoTop"
import Index from "./Components/tour/taj mahal"
import Indexs from "./Components/tour/dehli"
import Mains from './Components/tour/Rajasthan/main'
import Jep from "./Components/tour/jaipur/jep"
function App() {
  

  return (
    <>
    <Navbar/><ScrollToTop behavior="smooth" />
      <Routes>
        
        <Route path='/' element={<Home/>}/>
        <Route path='/mice' element={<Mice/>}/>
        <Route path='/tours' element={<Tour/>}/>
        <Route path='/guide' element={<Guide/>}/>
        <Route path='/about' element={<About/>}/>
        
         
        <Route path='/agra' element={<Category/>}/>
        <Route path="/taj-mahal" element={<Index/>}/>
        <Route path="/delhi" element={<Indexs/>}/>
        <Route path='/jaipur' element={<Jep/>}/>
        <Route path="/golden-triangle" element={<Index/>}/>
        <Route path="/rajasthan" element={<Mains/>}/>
        <Route path="/kerala-backwaters-bliss" element={<Index/>}/>
      </Routes>
    </>
  )
}

export default App
