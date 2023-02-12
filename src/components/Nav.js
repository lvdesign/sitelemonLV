import {Routes, Route, Link} from 'react-router-dom';

import Bookings from './Bookings';
import Main from './Main';

export default function Nav(props) {
    return (
        <>
            <nav className="nav">
                <ul>         
                    <Link to="/" className="nav-item">Home</Link>                    
                    <Link to="/booking" className="nav-item">Booking</Link>                    
                </ul> 
            </nav>

            <Routes>
                <Route path='/' element={<Main />} />                
                <Route path='/booking' element={<Bookings />} />               
            </Routes>
        </>
    );
};