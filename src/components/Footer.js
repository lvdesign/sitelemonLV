import lemonLogoFooter from '../assets/images/logo_footer.png';

function Footer(props) {
    return (
        <footer className="footer">
          <div className="footerCard">
                <img src={lemonLogoFooter} alt="Lemon restautant" />
          </div>
          <div className="footerCard">    
            <h5>Navigation</h5>
            <ul>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="footerCard">    
            <h5>Contact</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum.</p>
          </div>
          <div className="footerCard">    
            <h5>Social</h5>
            <ul>
              <li>social</li>
              <li>social</li>
              <li>social</li>
              <li>social</li>
              <li>social</li>
            </ul>
          </div>
      </footer>
    );
};

export default Footer;