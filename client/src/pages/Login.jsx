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
                navigate('/profile');
                toast.success('login successfully');
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <form onSubmit={loginUser}>
                <div className=' bg-yellow-50 container flex flex-col gap-5 p-6 absolute top-48  left-72   mx-40   max-w-xl    '>
                    <div>
                        <label>Email</label>

                        <div >
                            <input
                                className='border-2 border-black rounded-md container'
                                type='email'
                                placeholder='enter email'
                                value={data.email}
                                onChange={(e) =>
                                    setData({ ...data, email: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    <div>
                        <label>Password</label>

                        <div >
                            <input
                            className='border-2 border-black rounded-md container'
                                type='password'
                                placeholder='enter password'
                                value={data.password}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <button
                        type='submit'
                        className='bg-black text-white w-24 rounded-md mt-4 p-1'
                    >
                        Log In{' '}
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
