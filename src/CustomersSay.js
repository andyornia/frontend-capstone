import React from 'react';

const CustomersSay = () => {
    return (
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
               
    );
};

export default CustomersSay;