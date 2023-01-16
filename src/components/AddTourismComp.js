import React, { useState, useEffect } from 'react'
import TourismService from '../service/TourismService';
import { Link, useNavigate, useParams } from 'react-router-dom';

const AddTourismComp = () => {
    /** Variables and method to collect and store inputes */
    const [tourismType, setTourismType] = useState('');
    const [tourismname, setTourismname] = useState('');
    const [location, setLocation] = useState('');
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    const { tourismid } = useParams();

    const tourismData = { tourismType, tourismname, location, link, description  }; //bundle the inpute from user

    /**send data to api and navigate when succesful */
    function saveTourism(e) {
        e.preventDefault();

        if (tourismData.tourismType !== "" && tourismData.tourismname !== "" && tourismData.location !== "" && tourismData.link !== "" && tourismData.description !== "") {
            /**If id is present in the parameter, it should update else it should save */
            if (tourismid) {
                TourismService.updateTourism(tourismid, tourismData)
                    .then(navigate("/tourismadmin"))
                    .catch(e => console.log(e));
            } else {
                TourismService.saveTourism(tourismData)
                    .then(navigate("/tourismadmin"))
                    .catch(e => console.log(e));
            }

        } else {
            alert("Please fill all the inputs");
        }
    }

    function tile() {
        if (tourismid) {
            return "Update Location";
        } else {
            return "Add Location";
        }
    }
    useEffect(() => {
        if (tourismid) {
            fetch(`http://localhost:8080/tourism/${tourismid}`)
                .then(res=>res.json())
                .then(result => {
                    setTourismType(result.tourismType);
                    setTourismname(result.tourismname);
                    setLocation(result.location);
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
                                    <label>Tourism Type</label>
                                    <input className='form-control'
                                        value={tourismData.tourismType}
                                        onChange={(e) => setTourismType(e.target.value)}
                                        type="text" placeholder='Enter Tourism Type' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Tourism Name</label>
                                    <input className='form-control'
                                        value={tourismData.tourismname}
                                        onChange={(e) => setTourismname(e.target.value)}
                                        type="text" placeholder='Enter name' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Location</label>
                                    <input className='form-control'
                                        value={tourismData.location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        type="text" placeholder='Enter Location' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Link</label>
                                    <input className='form-control'
                                        value={tourismData.link}
                                        onChange={(e) => setLink(e.target.value)}
                                        type="text" placeholder='Enter Link' />
                                </div>
                                <div className='form-group mb-2'>
                                    <label>Description</label>
                                    <input className='form-control'
                                        value={tourismData.description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        type="text" placeholder='Enter Description' />
                                </div>
                                <button onClick={(e) => saveTourism(e)} className='btn btn-success'>Save</button> {" "}
                                <Link to={"/tourismadmin"} className='btn btn-danger' href="">Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTourismComp