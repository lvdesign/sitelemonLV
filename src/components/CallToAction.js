import backgroundimage from  '../assets/images/restaurant-inside-alternative.jpg';

import { Link } from 'react-router-dom';

function CallToAction(props) {
    const myStyle={
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundSize: 'cover',
        backgroundImage:`url(${backgroundimage})`,
        backgroundRepeat:'no-repeat center center space',
        //center scroll
        // !important
        }

    return (
      <>
       <section  className="heroSection" role="img" aria-label="Image Description" style={myStyle}>
            <h1 className="heroH1">Little Lemon  </h1>
            <h3 className="heroH3">Chicago</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum. Sed nec elit aliquam, lobortis tellus ut, hendrerit risus. Morbi sed turpis non diam dictum faucibus faucibus sit amet ligula.</p>
            <button className="heroButton">
            
            <Link to={"./booking"}>Book your table now</Link>
            </button>
        </section>
        </>
    );
};

export default CallToAction;