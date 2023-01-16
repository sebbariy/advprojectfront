import React, { useState, useEffect } from 'react'
import JobService from '../service/JobService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddJobComp = () => {
    /** Variables and method to collect and store inputes */
    const [companyImg, setCompanyImg] = useState('');
    const [companyname, setCompanyname] = useState('');
    const [jobname, setJobname] = useState('');
    const [link, setJoblink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { jobid } = useParams();

    const jobData = { companyImg, companyname, jobname, link, description  }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveJob(e) {
        e.preventDefault();

        if (jobData.companyImg !== "" && jobData.companyname !== "" && jobData.jobname !== "" && jobData.link !== "" && jobData.description !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (jobid) {
                JobService.updateJob(jobid, jobData)
                    .then(navigate("/jobadmin"))
                    .catch(e => console.log(e));
            } else {
                JobService.saveJob(jobData)
                    .then(navigate("/jobadmin"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please fill all the inputs");
        }
    }

    function tile() {
        if (jobid) {
            return "Update Job";
        } else {
            return "Add Job";
        }
    }
    useEffect(() => {
        if (jobid) {
            fetch(`http://localhost:8080/job/${jobid}`)
                .then(res=>res.json())
                .then(result => {
                    setCompanyImg(result.companyImg);
                    setCompanyname(result.companyname);
                    setJobname(result.jobname);
                    setJoblink(result.link);
                    setDescription(result.description);
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
                                    <label>Company Image</label>
                                    <input className='form-control'
                                        value={jobData.companyImg}
                                        onChange={(e) => setCompanyImg(e.target.value)}
                                        type="text" placeholder='Enter Company Image' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Company Name</label>
                                    <input className='form-control'
                                        value={jobData.companyname}
                                        onChange={(e) => setCompanyname(e.target.value)}
                                        type="text" placeholder='Enter Company name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Job Name</label>
                                    <input className='form-control'
                                        value={jobData.jobname}
                                        onChange={(e) => setJobname(e.target.value)}
                                        type="text" placeholder='Enter Job Name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Job Link</label>
                                    <input className='form-control'
                                        value={jobData.link}
                                        onChange={(e) => setJoblink(e.target.value)}
                                        type="text" placeholder='Enter Link' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Job Description</label>
                                    <input className='form-control'
                                        value={jobData.description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" placeholder='Enter Description' />
                                </div>
                                <button onClick={(e) => saveJob(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/jobadmin"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddJobComp