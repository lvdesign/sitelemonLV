const imagespecials =  require('../assets/images/menu_items/GreekSalad.jpg')  ;

function CustomersSay(props) {
    return (
      <>
        
<section className="testinomial">
                <h2>Testimonial</h2>
                  <div className="cardRating">
                    <h5>Rating</h5>
                    <img className="imagecardRating" src={imagespecials} alt="" />
                    <p>Name</p>
                    <p>Text rating Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum.</p>
                  </div>
                  <div className="cardRating">
                    <h5>Rating</h5>
                    <img className="imagecardRating" src={imagespecials} alt="" />
                    <p>Name</p>
                    <p>Text rating Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum.</p>
                  </div>
                  <div className="cardRating">
                    <h5>Rating</h5>
                    <img className="imagecardRating"src={imagespecials} alt="" />
                    <p>Name</p>
                    <p>Text rating Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum.</p>
                  </div>
                  <div className="cardRating">
                    <h5>Rating</h5>
                    <img className="imagecardRating" src={imagespecials} alt="" />
                    <p>Name</p>
                    <p>Text rating Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum.</p>
                  </div>
            </section>
        </>
    );
};

export default CustomersSay;


