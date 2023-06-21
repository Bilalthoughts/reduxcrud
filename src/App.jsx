import { useState } from 'react'

import './App.css'
import Home from './Pages/home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Components/header'
import AddPost from './Pages/addpost'
import EditBlog from './Pages/Editblog'
import Popup from './Components/popup'


function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/addpost' element={<AddPost/>}/>
    <Route path='/editpost/:id' element={<EditBlog/>}/>
    <Route path='/postdetail/:id' element={<Popup/>}/>

   
  </Routes>

  </BrowserRouter>
  
  </>
  )
}

export default App
