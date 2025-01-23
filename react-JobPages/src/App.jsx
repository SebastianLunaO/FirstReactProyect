import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPages from './pages/JobsPages'
import NotFound from './pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobsPage from './pages/AddJobsPage'

  
const App = () => {
  const addJob = (newJob) =>{
    fetch('url',{
      method: POST,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return; 
  }
  const router = createBrowserRouter(
  
    createRoutesFromElements(
    
    <Route path='/' element={<MainLayout />}> 
      
      <Route index element={<HomePage />} />
      <Route path='/jobs' element= {<JobsPages />} />
      <Route path='/add-job' element= {<AddJobsPage addJobsSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage />}  loader={jobLoader}/>
      <Route path='*' element={<NotFound/>} />
    </Route>
    ))
  return <RouterProvider router={router} />
}

export default App

