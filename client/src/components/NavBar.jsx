import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
const NavBar = () => {
    const { user } = useContext(UserContext);
    console.log(user);

    return (
        <div>
            {user===null ? (
                <nav className='bg-fuchsia-400 flex  justify-center flex-cols gap-16   p-3 '>
                    <Link to='/Login'>Login</Link>
                    <Link to='/Register'>Register</Link>
                </nav>
            ) : (
                <nav className='bg-fuchsia-400 flex  justify-center flex-cols gap-16   p-3 '>
                    <Link to='/'>Home</Link>
                    <Link to='/Login'>Logout</Link>
                </nav>
            )}
        </div>
    );
};

export default NavBar;
