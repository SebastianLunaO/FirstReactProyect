import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
const JobPage = () => {
  const [job,setJob] = useState(null)
  const {loading,setLoading} = useState(true)
  const {id} = useParams();
  useEffect(()=>{
    
    const fetchJob =async () =>{
        try {
        const res = await fetch(`/api/jobs/${id}`)
        const data = await res.json()
        setJob(data)
        } catch (error) {
          console.log('error fetching ',error)
        }finally{
          setLoading(false);
        }
    }
    fetchJob();
  },[])
    const result = job.title 
    
    return loading ? <Spinner /> : <h1>{result}</h1>;
  
};

export default JobPage
