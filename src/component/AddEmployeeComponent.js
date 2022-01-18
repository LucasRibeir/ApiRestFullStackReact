import React, { useState , useEffect} from 'react'
import EmployeeService from '../services/EmployeeService'
import { useNavigate, useParams} from 'react-router-dom';
const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emailId, setEmailId] = useState('')
    const {id} =  useParams();

    const navigate = useNavigate();

    const SaveEmployee = (e) => {
        e.preventDefault();

        const employee = { firstName, lastName, emailId }

        EmployeeService.createEmployee(employee).then((response) => {

            console.log(response.data)

            navigate('/employees');

        }).catch(error => {
            console.log(error)
        })
    
    }
    
        
    useEffect(() => {
           
            EmployeeService.getEmployeeId(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)

            }).catch(error=>{
                console.log(error);
            })
        },[id])
        
        const title = ()=>{

        if(id){
            return <h2 className="text-center">Update Employee</h2>
        }else{
            return <h2 className="text-center"> Add Employee</h2>
        }
    }
    
    return (
        <div>
            <br></br>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-6 offset-md-3 offset-md-3'>
                        {
                            title()
                        }
                        <div className='card-body'>
                            <form>
                                <div className='form-group mb-2'>
                                    <label className='form-label'> First Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter First Name'
                                        name='firstName'
                                        className='form-control'
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    ></input>
                                </div>



                                <div className='form-group mb-2'>
                                    <label className='form-label'> Last Name</label>
                                    <input
                                        type='text'
                                        placeholder='Enter Last Name'
                                        name='lastName'
                                        className='form-control'
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    ></input>
                                </div>

                                <div className='form-group mb-2'>
                                    <label className='form-label'> Email</label>
                                    <input
                                        type='email'
                                        placeholder='Enter Email '
                                        name='emailId'
                                        className='form-control'
                                        value={emailId}
                                        onChange={(e) => setEmailId(e.target.value)}
                                    ></input>
                                </div>

                                <button className='btn btn-success' onClick={(e) => SaveEmployee(e)}>Enter Employee</button>
                                <button to="/employees" className='btn btn-danger'>Cancel</button>
                            </form>

                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default AddEmployeeComponent
