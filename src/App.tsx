
import { Route , Routes} from "react-router-dom"
import Home from './Pages/Home'
import Mice from "./Pages/Mice"
import About from "./Pages/About"
import Tour from "./Pages/Tour"
import Guide from "./Pages/Guide"
import Category from "./Pages/Category"
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mice' element={<Mice/>}/>
        <Route path='/tours' element={<Tour/>}/>
        <Route path='/guide' element={<Guide/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/category' element={<Category/>}/>
      </Routes>
    </>
  )
}

export default App
