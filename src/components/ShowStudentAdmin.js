import axios from 'axios';
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

const ShowStudentAdmin = () => {
  const [studentArray, setStudentArray]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/student/getAllStudents")
    .then(res=>res.json())
    .then((result)=>{
      setStudentArray(result);
      console.log(result)
    }
    )
  },[])

  const deleteStudent=(e,schoolid) => {
    e.preventDefault();
    const deletefetch = "http://localhost:8080/student/" + schoolid
    console.log(deletefetch)
    fetch(deletefetch,{
      method:"DELETE",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(schoolid)
    }).then(fetch("http://localhost:8080/student/getAllStudents")
    .then(res=>res.json())
    .then((result)=>{
      setStudentArray(result);
    }))
  }

  return (
    <div className='container'>
      <br/>
      <br/>
      <br/>
        <Link to={"/studentadminadd"} className='btn btn-primary mb-2 mt-3' href="">Add Location</Link>
        <h2 className='text-center mb-4'>List of Educational locations</h2>
        <table className='table table-bordered table striped'>
            <thead>
              <tr>
                <th>School ID</th>
                <th>Type</th>
                <th>School Img</th>
                <th>School Name</th>
                <th>Location</th>
                <th>Description</th>
                <th>Link</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentArray.map(student =>
              <tr key={student.schoolid}>
                <td>{student.schoolid}</td>
                <td>{student.type}</td>
                <td>{student.schoolImg}</td>
                <td>{student.schoolname}</td>
                <td>{student.location}</td>
                <td>{student.description}</td>
                <td>{student.link}</td>
                <td>
                  <Link  to={`/studentadminadd/${student.schoolid}`} ><a  key={student.schoolid} className='btn btn-info' href="">Update</a></Link> {" "}
                  <a onClick={(e)=>deleteStudent(e,student.schoolid)} className='btn btn-danger' href="">Delete</a>
                </td>
              </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ShowStudentAdmin