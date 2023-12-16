import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='bg-fuchsia-400 flex  justify-center flex-cols gap-16   p-6 '>
            <Link  to='/'>Home</Link>
            <Link  to='/Login'>Login</Link>
            <Link  to='/Login'>Logout</Link>
            <Link to='/Register'>Register</Link>
        </nav>
    );
};

export default NavBar;
