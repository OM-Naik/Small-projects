import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Products from './Pages/Products'
import Courses from './Pages/Courses'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Random from './Pages/Random'
import Anycourse from './Pages/Anycourse'
import CourseDetails from './Pages/CourseDetails'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
          <Route path='/courses' element={<Courses />} />

      {/* nested routes */}
        <Route path='/products/mens' element={<Men />} />
        <Route path='/products/womens' element={<Women />} />

      {/* dynamic routes */}
        <Route path='/about/:id' element={<Random />} />

      {/* nested dynamic routes */}
        <Route path='/courses/:courseId' element={<Anycourse />} />
        <Route path='/courses/:courseId/details' element={<CourseDetails />} />
      </Routes>
    </div>
  )
}

export default App