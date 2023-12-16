import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav >
            <Link to='/'>Home</Link>
            <Link to='/Login'>Login</Link>
            <Link to='/Register'>Register</Link>
            <Link to='/Profile'>Profile</Link>
        </nav>
    );
};

export default NavBar;
