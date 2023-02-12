import lemon from '../assets/images/lemon.png';

import Nav from './Nav';

function Header(props) {
    return (
        <div className="header">
            <img src={lemon} alt="logo" width="300px"/>
            <Nav />
        </div>
    );
};

export default Header;