
import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'

const ShowUserAdmin = () => {
  const [userArray, setUserArray]= useState([]);

  useEffect(()=>{
    fetch("http://localhost:8080/user/getAllUsers")
    .then(res=>res.json())
    .then((result)=>{
      setUserArray(result);
      console.log(result)
    }
    )
  },[])

  const deleteUser=(e,userid) => {
    e.preventDefault();
    const deletefetch = "http://localhost:8080/user/" + userid
    console.log(deletefetch)
    fetch(deletefetch,{
      method:"DELETE",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify(userid)
    }).then(fetch("http://localhost:8080/user/getAllUsers")
    .then(res=>res.json())
    .then((result)=>{
      setUserArray(result);
    }))
  }

  return (
    <div className='container'>
      <br/>
      <br/>
      <br/>
        <Link to={"/useradminadd"} className='btn btn-primary mb-2 mt-3' href="">Add User</Link>
        <h2 className='text-center mb-4'>List of Users</h2>
        <table className='table table-bordered table striped'>
            <thead>
              <tr>
                <th>User ID</th>
                <th>Authentication</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {userArray.map(user =>
              <tr key={user.userid}>
                <td>{user.userid}</td>
                <td>{user.auth}</td>
                <td>{user.email}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>
                  <Link  to={`/useradminadd/${user.userid}`} ><a  key={user.userid} className='btn btn-info' href="">Update</a></Link> {" "}
                  <a onClick={(e)=>deleteUser(e,user.userid)} className='btn btn-danger' href="">Delete</a>
                </td>
              </tr>)}

            </tbody>
        </table>
    </div>
  )
}

export default ShowUserAdmin