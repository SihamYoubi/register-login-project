import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/UserContext';

axios.defaults.baseURL = 'http://localhost:4000'
axios.defaults.withCredentials = true

function App() {
    return (
        <>
            <UserContextProvider>
            <NavBar />
            <Toaster  position = 'bottom-right' toastOptions={{duration: 2000}}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/profile' element={<Dashboard />} />
            </Routes>
            </UserContextProvider>
        </>
    );
}

export default App;
