// REACT
import React, { useState } from 'react'

// REACT ROUTER DOM
import { useNavigate } from 'react-router-dom'

// LIBRARIES
import axios from 'axios'


const Login = () => {

    const styles = {
        background: 'bg-green-100 h-screen w-screen ',
        titleContainer: 'bg-white w-screen py-4 shadow-md',
        title: 'text-2xl font-bold text-center',
        formContainer: 'bg-white rounded-lg drop-shadow-lg px-8 py-8 mt-60 mx-8',
        pageTitle: 'text-xl font-bold text-center mb-6',
        input: 'w-full pl-2 py-4 border-2 border-grey-200 rounded-lg mb-4',
        buttonContainer: 'flex justify-center',
        button: 'bg-zinc-800 text-white px-4 py-2 rounded-lg',
    }

    const navigate = useNavigate();

    // const [error, setError] = useState(null)
    axios.defaults.withCredentials = true;

    // store and handle email and password
    const [values, setValues] = useState({
        email: '',
        password: '',
    });

    const handleEmailSubmit = (e) => {
        setValues({ ...values, email: e.target.value });
    }

    const handlePasswordSubmit = (e) => {
        setValues({ ...values, password: e.target.value });
    }

    const handleForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5173/auth/adminlogin', values)
            .then(result => {
                navigate('/dashboard')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className={styles.background}>

            <div className={styles.titleContainer}>
                <h1 className={styles.title}>Instrument Hiring System</h1>
            </div>

            <div className={styles.formContainer}>
                <h2 className={styles.pageTitle}>Login Page</h2>

                <div >
                    <form onSubmit={handleForm}>
                        <div >
                            <input
                                type='text'
                                name='email'
                                autoComplete="on"
                                placeholder='Enter email'
                                className={styles.input}
                                onChange={handleEmailSubmit}>
                            </input>
                        </div>

                        <div className='grid-xs'>
                            <input
                                type='password'
                                name='password'
                                placeholder='Enter password'
                                className={styles.input}
                                onChange={handlePasswordSubmit}>
                            </input>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button type='submit' className={styles.button}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
