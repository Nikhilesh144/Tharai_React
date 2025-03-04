import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './components/HomePage'
import About from './components/About'
import Courses from './components/Courses'
import Contact from './components/Contact'

function App() {
  const router =createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage />} /> 
      <Route path='about' element={<About />} /> 
      <Route path='courses' element={<Courses />} /> 
      <Route path='contact' element={<Contact />} /> 
    </Route>
  ))
  return (
    <>
       <RouterProvider router={router}/>
    </>
  )
}

export default App
