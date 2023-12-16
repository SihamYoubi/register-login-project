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
            <form
                onSubmit={loginUser}
                className=' container mx-4   absolute top-36 '
            >
                <div className='flex flex-col p-6 items-center' >
                    <label>email</label>
                    
                        <input
                            className=' border-2 border-black rounded-md  w-[800px]'
                            type='email'
                            placeholder='enter email'
                            value={data.email}
                            onChange={(e) =>
                                setData({ ...data, email: e.target.value })
                            }
                        />
                

                    <label>Password</label>
                    
                        <input
                            className=' border-2 border-black rounded-md w-[800px]'
                            type='password'
                            placeholder='enter password'
                            value={data.password}
                            onChange={(e) =>
                                setData({ ...data, password: e.target.value })
                            }
                        />
                    

                    <button
                        type='submit'
                        className='bg-black text-white w-24 rounded-md mt-4'
                    >
                        Log In{' '}
                    </button>
                </div>
            </form>
        </>
    );
};

export default Login;
