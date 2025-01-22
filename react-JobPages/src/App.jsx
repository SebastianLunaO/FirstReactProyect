import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPages from './pages/JobsPages'
import NotFound from './pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobsPage from './pages/AddJobsPage'
const router = createBrowserRouter(
  createRoutesFromElements(
  
  <Route path='/' element={<MainLayout />}> 
    
    <Route index element={<HomePage />} />
    <Route path='/jobs' element= {<JobsPages />} />
    <Route path='/add-job' element= {<AddJobsPage />} />
    <Route path='/jobs/:id' element={<JobPage />}  loader={jobLoader}/>
    <Route path='*' element={<NotFound/>} />
  </Route>
  ))
  
const App = () => {
  return <RouterProvider router={router} />
}

export default App

