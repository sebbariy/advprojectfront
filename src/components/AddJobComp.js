import React from 'react'

const AddJobComp = () => {
  return (

    <div>
      <br/>
      <br/>
      <br/>
        <div className='container mt-5'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>Add Employee</h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter First Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="text" placeholder='Enter Last Name' />
                            </div>
                            <div className='form-group mb-2'>
                                <input className='form-control' 
                                type="email" placeholder='Enter Email' />
                            </div>
                            <button className='btn btn-success'>Save</button> {" "}
                            <a className='btn btn-danger' href="">Cancel</a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddJobComp