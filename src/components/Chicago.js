const imagespecials =  require('../assets/images/menu_items/GreekSalad.jpg')  ;
function Chicago(props) {
    return (
      <>
        <section className='resto'>
                <div className='restoCard'>
                <h2>Little Lemon</h2>
                <h5>Chicago</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum. Sed nec elit aliquam, lobortis tellus ut, hendrerit risus. Morbi sed turpis non diam dictum faucibus faucibus sit amet ligula.</p>
                </div>

                <div className='restoCard'>
                <img className="imagerestoCard" src={imagespecials} alt="" />
                <img className="imagerestoCard" src={imagespecials} alt="" />
                </div>
        </section>
        </>
    );
};

export default Chicago;