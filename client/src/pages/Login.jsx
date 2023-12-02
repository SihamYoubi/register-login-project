import {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [data, setData] = useState({
        email : '',
        password : ''
    })

    const loginUser = (e) => {
        e.preventDefault();
        axios.get('/')
    };
    return (
        <>
            <form onSubmit={loginUser}>
                <label>email</label>
                <input type='email' placeholder='enter email' value = {data.email} onChange  = {(e)=> setData({...data , email : e.target.value})} />

                <label>Password</label>
                <input type='password' placeholder='enter password' value = {data.password} onChange = {(e) => setData({...data , password: e.target.value})} />

                <button type='submit'>Log In </button>
            </form>
        </>
    );
};

export default Login;
