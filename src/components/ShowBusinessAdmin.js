import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import BusinessService from '../service/BusinessService';

const ShowBusinessAdmin = () => {
  const [ busArray, setBusArray ]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/business/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setBusArray(result);
      console.log(result)
    }
    )
  },[])

  const deleteBusiness=(e, busid) => {
    e.preventDefault();
    console.log(busid);
    const deletefetch = "http://localhost:8080/business/" + busid
    console.log(deletefetch)
    fetch(deletefetch, {
      method:"DELETE",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(busid)
    }).then(fetch("http://localhost:8080/business/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setBusArray(result);
    }))
  }

  return (
    <div className='container'>
      <br/>
      <br/>
      <br/>
        <Link to={"/businessadminadd"} className='btn btn-primary mb-2 mt-3' href="">Add Information</Link>
        <h2 className='text-center mb-4'>List of News</h2>
        <table className='table table-bordered table striped'>
            <thead>
              <tr>
                <th>Business ID</th>
                <th>Information Name</th>
                <th>Description</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {busArray.map(bus =>
              <tr key={bus.busid}>
                <td>{bus.busid}</td>
                <td>{bus.busname}</td>
                <td>{bus.description}</td>
                <td>{bus.link}</td>
                <td>
                  <Link  to={`/businessadminadd/${bus.busid}`} ><a  key={bus.busid} className='btn btn-info' href="">Update</a></Link> {" "}
                  <a onClick={(e)=>deleteBusiness(e,bus.busid)} className='btn btn-danger' href="">Delete</a>
                </td>
              </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ShowBusinessAdmin