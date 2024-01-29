import React from 'react';

const Main = () => {
    return (
        <main>
        <section id="about-section">
            <div id="about-info">
                <h1 class="title">Little Lemon</h1>
                <h2 class="city">Chicago</h2>
                <p>
                    We are a family owned Mediterranean restaurant, 
                    focused on traditional recipes served with a modern twist.
                </p>
                 <button>Reserve a Table</button>
            </div>
            <div id="about-img">
             <img src="./images/restauranfood.jpg" alt="a plate of our Mediterranean sandwiches" width={200} />
            </div>
        </section>
        
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
        
        <section id="testimonials">
            <h1>Testimonials</h1>
            <div id="testimonial-container">
                <div class="testimonial">
                    <h3>Rating</h3>
                    <p class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </p>
                    <img src="./images/avatar_1.png" alt="Beth avatar"  />
                    <p class="name">Beth</p>
                    <p class="review">The food here is soooo good!!!</p>
                </div>
                <div class="testimonial">
                    <h3>Rating</h3>
                    <p class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </p>
                    <img src="./images/avatar_2.png" alt="Ivan avatar"  />
                    <p class="name">Ivan</p>
                    <p class="review">You have to try the bruschetta</p>
                </div>
                <div class="testimonial">
                    <h3>Rating</h3>
                    <p class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                    </p>                    
                    <img src="./images/avatar_3.png" alt="Carol avatar" />
                    <p class="name">Carol</p>
                    <p class="review">Lemon dessert is divine</p>
                </div>
                <div class="testimonial">
                    <h3>Rating</h3>
                    <p class="stars">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star"></span>
                    </p>
                    <img src="./images/avatar_4.png" alt="George avatar" />
                    <p class="name">George</p>
                    <p class="review">I come back every week to order the pasta!</p>
                </div>
            </div>
        </section>
        
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes
            served with a modern twist</p>
            <img src="./images/Mario and Adrian A.jpg" alt="Our chefs preparing a meal" width={200} />
            <img src="./images/restaurant.jpg" alt="A view of our restaurant" width={200} />
            
        </section>
        </main>
    );
};

export default Main;