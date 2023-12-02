import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const loginUser = async (e) => {
        e.preventDefault();
        const { email, password } = data;
        try {
            const { data } = await axios.post('/login', {
                email,
                password,
            });

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                navigate('/');
                // toast.success('login successfully')
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={loginUser}>
                <label>email</label>
                <input
                    type='email'
                    placeholder='enter email'
                    value={data.email}
                    onChange={(e) => {
                        setData({ ...data, email: e.target.value });
                    }}
                />

                <label>Password</label>
                <input
                    type='password'
                    placeholder='enter password'
                    value={data.password}
                    onChange={(e) => {
                        setData({ ...data, password: e.target.value });
                    }}
                />

                <button type='button'>Log In </button>
            </form>
        </>
    );
};

export default Login;
