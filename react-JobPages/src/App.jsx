import {Route, createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom'
import React from 'react'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPages from './pages/JobsPages'
import NotFound from './pages/NotFound'
import JobPage, { jobLoader } from './pages/JobPage'
import AddJobsPage from './pages/AddJobsPage'
import EditJobPage from './pages/EditJobPage'

  
const App = () => { // this funtion is called from addjobs page, and is past to it by the addJobSubmit object
  const addJob = async (newJob) =>{
    const res = await fetch('/api/jobs',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newJob)
    });
    return; 
  }
  
  const deleteJob = async (id) =>{
      const res = await fetch(`/api/jobs/${id}`,{
        method: "DELETE"
      });
      return; 
  }

  const updateJob = async (updatedJob) =>{
    const res = await fetch(`/api/jobs/${updatedJob.id}`,{
      method: "PUT",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(updatedJob)
    })
  }

  const router = createBrowserRouter(
  
    createRoutesFromElements(
    
    <Route path='/' element={<MainLayout />}> 
      
      <Route index element={<HomePage />} />
      <Route path='/jobs' element= {<JobsPages />} />
      <Route path='/add-job' element= {<AddJobsPage addJobsSubmit={addJob}/>} />
      <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob }/>}  loader={jobLoader}/>
      <Route path='/edit/jobs/:id' element={<EditJobPage  updateJobsSubmit={updateJob} />}loader={jobLoader}/>
      <Route path='*' element={<NotFound/>} />
    </Route>
    ))
  return <RouterProvider router={router} />
}

export default App

