import React from 'react';
import axios from 'axios';
function TestRegister() {
    const [data, setData] = useStat({
        name: '',
        email: '',
        password: '',
    });
    const registerUser = async (e) => {
        try {
            const {name , email , password} = data
            e.preventDefault;
            const {data} = await axios.post('/register', {
                name,
                email,
                password,
            });
        } catch (error) {}
    };
    return (
        <div>
            <form onSubmit={registerUser}>
                <label>name</label>
                <input
                    type='text'
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <label>email</label>
                <input
                    type='email'
                    value={data.email}
                    onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                    }
                />
                <label>password</label>
                <input
                    type='password'
                    value={data.password}
                    onChange={(e) =>
                        setData({ ...data, password: e.target.value })
                    }
                />
                <button type='submit'></button>
            </form>
        </div>
    );
}

export default TestRegister;
