import React from "react";
import imgReserve from "../images/restaurantfood.jpg"

const CallToAction = () => {

    return (
        <div className="call-to-action" style={{height: '300px', marginBottom: '20px'}}>
            <div className="container">
                <div style={{width: '25%'}}>
                    <h1 className="display-title" style={{color: '#F4CE14'}}>Little Lemon</h1>
                    <h2 style={{color: 'white'}}>Chicago</h2>
                    <p className="lead-text" style={{color: 'white'}}>
                        We are a family owned Mediterranean restaurant focused on traditional recipes served with a modern twist.
                    </p>
                    <button className="btn-primary">Reserve a Table</button>
                </div>
                <div style={{width: '250px', height: '320px', marginRight: '-20px', backgroundImage: `url(${imgReserve})`, backgroundSize: 'cover', borderRadius: '8px'}}>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;