import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
    });
    const registerUser = async (e) => {
        e.preventDefault();
        const { name, email, password } = data;
        try {
            const { data } = await axios.post('/register', {
                name,
                email,
                password,
            });

            if (data.error) {
                toast.error(data.error);
            } else {
                setData({});
                toast.success('Login successful , welcome');
                navigate('/login');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form onSubmit={registerUser}>
                <div className=' container flex flex-col gap-5 p-6 absolute top-48  left-72   mx-40   max-w-xl    '>
                    <div>
                        <label>Name</label>

                        <div className=' border-2 border-black rounded-md'>
                            {/* changing the name to e.target.value */}
                            <input
                                type='text'
                                placeholder='enter name'
                                value={data.name}
                                onChange={(e) => {
                                    setData({ ...data, name: e.target.value });
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label>Email</label>
                        <div className=' border-2 border-black rounded-md '>
                            <input
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
                        <div className=' border-2 border-black rounded-md '>
                            <input
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
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default Register;
