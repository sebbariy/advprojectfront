
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

const ShowTourismAdmin = () => {
  const [tourismArray, setTourismArray]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/tourism/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setTourismArray(result);
      console.log(result)
    }
    )
  },[])

  const deleteTourism=(e,tourismid) => {
    e.preventDefault();
    const deletefetch = "http://localhost:8080/tourism/" + tourismid
    console.log(deletefetch)
    fetch(deletefetch,{
      method:"DELETE",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(tourismid)
    }).then(fetch("http://localhost:8080/tourism/getAll")
    .then(res=>res.json())
    .then((result)=>{
      setTourismArray(result);
    }))
  }

  return (
    <div className='container'>
      <br/>
      <br/>
      <br/>
        <Link to={"/tourismadminadd"} className='btn btn-primary mb-2 mt-3' href="">Add Location</Link>
        <h2 className='text-center mb-4'>List of Locations</h2>
        <table className='table table-bordered table striped'>
            <thead>
              <tr>
                <th>Tourism ID</th>
                <th>Tourism Name</th>
                <th>Location</th>
                <th>Link</th>
                <th>Description</th>
                <th>Type</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tourismArray.map(tourism =>
              <tr key={tourism.tourismid}>
                <td>{tourism.tourismid}</td>
                <td>{tourism.tourismname}</td>
                <td>{tourism.location}</td>
                <td>{tourism.link}</td>
                <td>{tourism.description}</td>
                <td>{tourism.tourismType}</td>
                <td>
                  <Link  to={`/tourismadminadd/${tourism.tourismid}`} ><a  key={tourism.tourismid} className='btn btn-info' href="">Update</a></Link> {" "}
                  <a onClick={(e)=>deleteTourism(e,tourism.tourismid)} className='btn btn-danger' href="">Delete</a>
                </td>
              </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ShowTourismAdmin