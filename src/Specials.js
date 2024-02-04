import React from 'react';

const Specials = () => {
    return (
        <section id="specials">
            <div id="specials-info">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>
            <div id="card-container">
            <div class="card">
                <img src="./images/greeksalad.jpg" alt="Greek salad" class="card-image" />
                <div class="card-description">
                    <h3>Greek salad</h3>
                    <p class="price">$14.00</p>
                    <p class="card-caption">The famous greek salad of crispy lettuce, peppers, olives, 
                    and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <p class="delivery">Order a delivery</p>
                    <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
                </div>
            </div>

            <div class="card">
                <img src="./images/restauranfood.jpg" alt="Plate of Bruschetta" class="card-image" />
                <div class="card-description">
                    <h3>Bruschetta</h3>
                    <p class="price">$8.00</p>
                    <p class="card-caption">Our bruschetta is made from grilled bread that has been smeared with garlic
                    and seasoned with salt and olive oil.</p>
                    <p class="delivery">Order a delivery</p>
                    <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
                </div>
            </div>
            
            <div class="card">
                <img src="./images/lemon dessert.jpg" alt="Lemon dessert" class="card-image" />
                <div class="card-description">
                    <h3>Lemon dessert</h3>
                    <p class="price">$6.50</p>
                    <p class="card-caption">This lemon dessert is extremely tasty. It's got fresh lemon, 
                    lemon frosting, lemon sugar, and lemon zest.</p>
                    <p class="delivery">Order a delivery</p>
                    <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
                </div>
            </div> 
            </div>
        </section>
    );
};

export default Specials;