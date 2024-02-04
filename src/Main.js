import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';

const Main = () => {
    return (
        <main>
        <CallToAction/>
        <Specials/>
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
                    <img src="./images/avatar_3.png" alt="Ivan avatar"  />
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
                    <img src="./images/avatar_2.png" alt="Carol avatar" />
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
        
        <section id="about-footer">
            <div id="about-footer-info">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes
                served with a modern twist</p>
            </div>
            <div id="about-footer-img-section">
                <img src="./images/Mario and Adrian A.jpg" alt="Our chefs preparing a meal" id="about-footer-img-a" width={200} />
                <img src="./images/restaurant.jpg" alt="A view of our restaurant" id="about-footer-img-b" width={200} />
            </div>
        </section>
        </main>
    );
};

export default Main;