import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import JobService from '../service/JobService';

const ShowJobAdmin = () => {
  const [jobArray, setJobArray]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/job/getAllJobs")
    .then(res=>res.json())
    .then((result)=>{
      setJobArray(result);
      console.log(result)
    }
    )
  },[])

  const deleteJob=(e,jobid) => {
    e.preventDefault();
    const deletefetch = "http://localhost:8080/job/" + jobid
    console.log(deletefetch)
    fetch(deletefetch,{
      method:"DELETE",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(jobid)
    }).then(fetch("http://localhost:8080/job/getAllJobs")
    .then(res=>res.json())
    .then((result)=>{
      setJobArray(result);
    }))
  }

  return (
    <div className='container'>
      <br/>
      <br/>
      <br/>
        <Link to={"/jobadminadd"} className='btn btn-primary mb-2 mt-3' href="">Add Job</Link>
        <h2 className='text-center mb-4'>List of Jobs</h2>
        <table className='table table-bordered table striped'>
            <thead>
              <tr>
                <th>Job ID</th>
                <th>Company Img</th>
                <th>Company Name</th>
                <th>Job Name</th>
                <th>Description</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {jobArray.map(job =>
              <tr key={job.jobid}>
                <td>{job.jobid}</td>
                <td>{job.companyImg}</td>
                <td>{job.companyname}</td>
                <td>{job.jobname}</td>
                <td>{job.description}</td>
                <td>{job.link}</td>
                <td>
                  <a  className='btn btn-info' href="">Update</a> {" "}
                  <a onClick={(e)=>deleteJob(e,job.jobid)} className='btn btn-danger' href="">Delete</a>
                </td>
              </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ShowJobAdmin