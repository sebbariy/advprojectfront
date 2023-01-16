import React, { useState, useEffect } from 'react'
import StudentService from '../service/StudentService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddStudentComp = () => {
    /** Variables and method to collect and store inputes */
    const [schoolImg, setSchoolImg] = useState('');
    const [schoolname, setSchoolname] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const navigate = useNavigate();
    const { schoolid } = useParams();

    const studentData = { schoolImg, schoolname, location, link, description, type }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveStudent(e) {
        e.preventDefault();

        if (studentData.schoolImg !== "" && studentData.schoolname !== "" && studentData.location !== "" && studentData.link !== "" && studentData.description !== "" && studentData.type !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (schoolid) {
                StudentService.updateStudent(schoolid, studentData)
                    .then(navigate("/studentadmin"))
                    .catch(e => console.log(e));
            } else {
                StudentService.saveStudent(studentData)
                    .then(navigate("/studentadmin"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please fill all the inputs");
        }
    }

    function tile() {
        if (schoolid) {
            return "Update School";
        } else {
            return "Add School";
        }
    }
    useEffect(() => {
        if (schoolid) {
            fetch(`http://localhost:8080/student/${schoolid}`)
                .then(res=>res.json())
                .then(result => {
                    setSchoolImg(result.schoolImg);
                    setSchoolname(result.schoolname);
                    setLocation(result.location);
                    setLink(result.link);
                    setDescription(result.description);
                    setType(result.type)
                })
                .catch(e => console.log(e));
        }
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
                                    <label>Type</label>
                                    <input className='form-control'
                                        value={studentData.type}
                                        onChange={(e) => setType(e.target.value)}
                                        type="text" placeholder='Enter type' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>School Image</label>
                                    <input className='form-control'
                                        value={studentData.schoolImg}
                                        onChange={(e) => setSchoolImg(e.target.value)}
                                        type="text" placeholder='Enter School Image' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>School Name</label>
                                    <input className='form-control'
                                        value={studentData.schoolname}
                                        onChange={(e) => setSchoolname(e.target.value)}
                                        type="text" placeholder='Enter School name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Location</label>
                                    <input className='form-control'
                                        value={studentData.location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        type="text" placeholder='Enter Location' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Job Link</label>
                                    <input className='form-control'
                                        value={studentData.link}
                                        onChange={(e) => setLink(e.target.value)}
                                        type="text" placeholder='Enter Link' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Description</label>
                                    <input className='form-control'
                                        value={studentData.description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" placeholder='Enter Description' />
                                </div>
                                <button onClick={(e) => saveStudent(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/studentadmin"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddStudentComp