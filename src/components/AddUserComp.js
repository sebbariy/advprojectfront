import React, { useState, useEffect } from 'react'
import UserService from '../service/UserService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddUserComp = () => {
    /** Variables and method to collect and store inputes */
    const [auth, setAuth] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();
    const { userid } = useParams();

    const userData = { auth, email, username, password, firstName, lastName, role }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveUser(e) {
        e.preventDefault();

        if (userData.auth !== "" && userData.email !== "" && userData.username !== "" && userData.password !== "" && userData.firstName !== "" && userData.lastName !== "" && userData.role !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (userid) {
                UserService.updateUser(userid, userData)
                    .then(navigate("/useradmin"))
                    .catch(e => console.log(e));
            } else {
                UserService.saveUser(userData)
                    .then(navigate("/useradmin"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please fill all the inputs");
        }
    }

    function tile() {
        if (userid) {
            return "Update User";
        } else {
            return "Add User";
        }
    }
    useEffect(() => {
        if (userid) {
            fetch(`http://localhost:8080/user/${userid}`)
                .then(res=>res.json())
                .then(result => {
                    setAuth(result.auth);
                    setEmail(result.email);
                    setUsername(result.username);
                    setPassword(result.password);
                    setFirstName(result.firstName);
                    setLastName(result.lastName);
                    setRole(result.role);
                })
                .catch(e => console.log(e));
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <div className='container mt-5'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3'>
                        <h2 className='text-center'>{tile()}</h2>
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label>Authentification "0 = non authenticated and 1 = authenticated</label>
                                    <input className='form-control'
                                        value={userData.auth}
                                        onChange={(e) => setAuth(e.target.value)}
                                        type="text" placeholder='Enter Authentification number' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Email</label>
                                    <input className='form-control'
                                        value={userData.email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text" placeholder='Enter Email Address' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Username</label>
                                    <input className='form-control'
                                        value={userData.username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        type="text" placeholder='Enter Username' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Password</label>
                                    <input className='form-control'
                                        value={userData.password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        type="text" placeholder='Enter Password' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>First Name</label>
                                    <input className='form-control'
                                        value={userData.firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        type="text" placeholder='Enter First Name' />
                                </div>                                <div className='form-group mb-2'>
                                    <label>Last Name</label>
                                    <input className='form-control'
                                        value={userData.lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        type="text" placeholder='Enter Last Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Role</label>
                                    <input className='form-control'
                                        value={userData.role}
                                        onChange={(e) => setRole(e.target.value)}
                                        type="text" placeholder='Enter Role' />
                                </div>
                                <button onClick={(e) => saveUser(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/useradmin"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUserComp