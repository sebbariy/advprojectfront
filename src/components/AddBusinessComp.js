import React, { useState, useEffect } from 'react'
import BusinessService from '../service/BusinessService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddBusinessComp = () => {
    /** Variables and method to collect and store inputes */
    const [busname, setBusname] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { busid } = useParams();

    const busData = {  busname, link, description  }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveBusiness(e) {
        e.preventDefault();

        if (busData.busname !== "" && busData.link !== "" && busData.description !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (busid) {
                BusinessService.updateBusiness(busid, busData)
                    .then(navigate("/businessadmin"))
                    .catch(e => console.log(e));
            } else {
                BusinessService.saveBusiness(busData)
                    .then(navigate("/businessadmin"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please fill all the inputs");
        }
    }

    function tile() {
        if (busid) {
            return "Update Informations";
        } else {
            return "Add Informations";
        }
    }
    useEffect(() => {
        if (busid) {
            fetch(`http://localhost:8080/business/${busid}`)
                .then(res=>res.json())
                .then(result => {
                    setBusname(result.busname);
                    setLink(result.link);
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
                                    <label>Information Name</label>
                                    <input className='form-control'
                                        value={busData.busname}
                                        onChange={(e) => setBusname(e.target.value)}
                                        type="text" placeholder='Enter News header' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Link</label>
                                    <input className='form-control'
                                        value={busData.link}
                                        onChange={(e) => setLink(e.target.value)}
                                        type="text" placeholder='Enter Link' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Description</label>
                                    <input className='form-control'
                                        value={busData.description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" placeholder='Enter Description' />
                                </div>
                                <button onClick={(e) => saveBusiness(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/businessadmin"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBusinessComp