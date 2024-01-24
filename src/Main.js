import React from 'react';

const Main = () => {
    return (
        <main>
        <section>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, 
                focused on traditional recipes served with a modern twist.
            </p>
             <button>Reserve a Table</button>
             <img src="./images/restauranfood.jpg" alt="a plate of our Mediterranean sandwiches" width={200} />
        </section>
        
        <section>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>

            <div class="card">
                <img src="./images/greeksalad.jpg" alt="Greek salad" width={200} />
                <h3>Greek salad</h3>
                <p>$14.00</p>
                <p>The famous greek salad of crispy lettuce, peppers, olives, 
                and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p>Order a delivery</p>
                <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
            </div>

            <div class="card">
                <img src="./images/restauranfood.jpg" alt="Plate of Bruschetta" width={200} />
                <h3>Bruschetta</h3>
                <p>$8.00</p>
                <p>The famous greek salad of crispy lettuce, peppers, olives, 
                and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <p>Order a delivery</p>
                <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
            </div>
            
            <div class="card">
                <img src="./images/lemon dessert.jpg" alt="Lemon dessert" width={200} />
                <h3>Lemon dessert</h3>
                <p>$6.50</p>
                <p>This lemon dessert is extremely tasty. It's got fresh lemon, 
                lemon frosting, lemon sugar, and lemon zest.</p>
                <img src="./images/motorbike.png" alt="Scooter delivery logo" width={30}/>
            </div>            
            
        </section>
        
        <section>
            <h1>Testimonials</h1>
            <div class="testimonial">
                <h3>Rating</h3>
                <p>*****</p>
                <img src="./images/avatar-5261896_1280.png" alt="Beth avatar" width={80} />
                <p>Beth</p>
                <p>The food her is soooo good!!!</p>
            </div>
            <div class="testimonial">
                <h3>Rating</h3>
                <p>*****</p>
                <img src="./images/avatar-5261896_1280.png" alt="Ivan avatar" width={80} />
                <p>Ivan</p>
                <p>You have to try the bruschetta</p>
            </div>
            <div class="testimonial">
                <h3>Rating</h3>
                <p>****</p>
                <img src="./images/avatar-5261896_1280.png" alt="Carol avatar" width={80} />
                <p>Carol</p>
                <p>Lemon dessert is divine</p>
            </div>
            <div class="testimonial">
                <h3>Rating</h3>
                <p>*****</p>
                <img src="./images/avatar-5261896_1280.png" alt="George avatar" width={80} />
                <p>George</p>
                <p>The food her is soooo good!!!</p>
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