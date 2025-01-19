import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPages from './pages/JobsPages'

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<MainLayout />}> 
  <Route path='/index' element={<HomePage />} />
  <Route path='/jobs' element= {<JobsPages />} />
  </Route>))
  
const App = () => {
  return <RouterProvider router={router} />
}

export default App

