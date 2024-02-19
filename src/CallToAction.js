import React from 'react';

const CallToAction = () => {
    return (
        <section id="about-section">
            <div id="about-info">
                <h1 className="title">Little Lemon</h1>
                <h2 className="city">Chicago</h2>
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
    );
};

export default CallToAction;