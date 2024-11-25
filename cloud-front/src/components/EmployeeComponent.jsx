import React, { useState, useEffect } from 'react'
import { createEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'

const EmployeeComponent = () => {

    // state: 성, 이름, 이메일 상태 
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const { id } = useParams();
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate();

    // effect 
    useEffect(() => {
        if(id) {
            getEmployee(id).then((response) => {
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
                setEmail(response.data.email);
            }).catch(error => {
                console.error(error);
            })
        }
    }, [])  

    // event handler: onClick={} 
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    // function 
    function saveOrUpdateEmployee(e) {
        e.preventDefault();

        if (validateForm()) {

            const employee = { firstName, lastName, email };
            console.log(employee);

            if(id) {
                updateEmployee(id, employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            } else {
                createEmployee(employee).then((response) => {
                    console.log(response.data);
                    navigator('/employees');
                }).catch(error => {
                    console.error(error);
                })
            }

        }
    }

    function validateForm() {
        let valid = true;

        const errorsCopy = { ...error }

        if (firstName.trim()) {
            errorsCopy.firstName = '';
        } else {
            errorsCopy.firstName = '성은 필수로 입력해야 합니다..';
            valid = false;
        }

        if (lastName.trim()) {
            errorsCopy.lastName = '';
        } else {
            errorsCopy.lastName = '이름은 필수로 입력해야 합니다..';
            valid = false;
        }

        if (email.trim()) {
            errorsCopy.email = '';
        } else {
            errorsCopy.email = '이메일은 필수로 입력해야 합니다..';
        }

        setError(errorsCopy);

        return valid;
    }

    function pageTitle() {
        if(id) {
            return <h2 className='text-center'>직원 정보 수정</h2>
        } else {
            return <h2 className='text-center'>직원 정보 등록</h2>
        }
    }

    // render: 직원 등록 폼 렌더링 
    return (
        <div className='container'>
            <br /> <br />
            <div className="row">
                <div className="card col-md-6 offset-md-3">
                    {
                        pageTitle()
                    }
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label className='form-label'>성: </label>
                                <input type="text" name="firstName" className={`form-control ${error.firstName ? 'is-invalid' : ''}`} placeholder='성을 입력해주세요.' value={firstName} onChange={handleFirstName} />
                                {error.firstName && <div className='invalid-feedback'>{error.firstName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className='form-label'>이름: </label>
                                <input type="text" name="firstName" className={`form-control ${error.lastName ? 'is-invalid' : ''}`} placeholder='이름을 입력해주세요.' value={lastName} onChange={handleLastName} />
                                {error.lastName && <div className='invalid-feedback'>{error.lastName}</div>}
                            </div>

                            <div className="form-group mb-2">
                                <label className='form-label'>이메일: </label>
                                <input type="text" name="firstName" className={`form-control ${error.email ? 'is-invalid' : ''}`} placeholder='이메일을 입력해주세요.' value={email} onChange={handleEmail} />
                                {error.email && <div className='invalid-feedback'>{error.email}</div>}
                            </div>

                            <button className='btn btn-success' onClick={saveOrUpdateEmployee}>제출</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeComponent