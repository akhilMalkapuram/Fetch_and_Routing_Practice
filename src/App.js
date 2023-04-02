import {BrowserRouter,Route, Routes} from 'react-router-dom'

import Header from './Components/Header'
import About from './Components/About'
import Home from './Components/Home'
import Contact from './Components/Contact'
import BlogItemDetails from './Components/BlogItemDetails'
import NotFound from './Components/NotFound'

import './App.css'

const App = () => (
  <BrowserRouter>
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route path="/blogs/:id" element={<BlogItemDetails/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  </div>
  </BrowserRouter>
)

export default App
