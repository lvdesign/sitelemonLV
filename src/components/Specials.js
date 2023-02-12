const imagespecials =  require('../assets/images/menu_items/GreekSalad.jpg')  ;

const menus = [
  {
      name:'Greek salad',
      price:12,
      description: 'Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.',
      image: '../assets/images/menu_items/GreekSalad.jpg',
  },
  {
      name:'New salad',
      price:12,
      description: 'Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.',
      image: '../assets/images/menu_items/Bruschetta.jpg',
  },
  {
      name:'Big salad',
      price:12,
      description: 'Our famous Greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese. Garnished with crispy onion and salty capers.',
      image: '../assets/images/menu_items/GreekSalad.jpg',
  },
];





function Specials(props) {


    return (
      <>        
<section className="specials">
                <h2>Specials</h2>
                  <div className="card">
                    <img className="imageCard" src={imagespecials} alt="" />
                    <h3>Greek Salad <span>$12</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum. Sed nec elit aliquam, lobortis tellus ut, hendrerit risus. Morbi sed turpis non diam dictum faucibus  faucibus sit amet ligula.</p>
                    <p>Order a delivery</p>
                  </div>
                  <div className="card">
                    <img className="imageCard" src={imagespecials} alt="" />
                    <h3>Greek Salad <span>$12</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum. Sed nec elit aliquam, lobortis tellus ut, hendrerit risus. Morbi sed turpis non diam dictum faucibus faucibus sit amet ligula.</p>
                    <p>Order a delivery</p>
                  </div>
                  <div className="card">
                    <img className="imageCard" src={imagespecials} alt="" />
                    <h3>Greek Salad <span>$12</span></h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies consectetur interdum. Sed nec elit aliquam, lobortis tellus ut, hendrerit risus. Morbi sed turpis non diam dictum faucibus faucibus sit amet ligula.</p>
                    <p>Order a delivery</p>
                  </div>
 </section>
 <section className="specials">
                <h2>Specials</h2>
                {menus.map(item =>(
                  <div className="card"  key={item.name}>        
                  <img src={item.image} alt={item.name} className="imageCard"  />
                        <h3>{item.name} <span>$ {item.price} </span></h3>
                        <p>{item.description}</p>
                    </div>
                   ))}
 </section>
        </>
    );
};

export default Specials;
