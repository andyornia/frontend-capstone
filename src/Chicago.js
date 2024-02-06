import React from 'react';

const Chicago = () => {
    return (
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
    );
};

export default Chicago;