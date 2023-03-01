import React from "react";
import imgPerson from "../images/person.png"

const testimonails = [
    {
        'name': 'John',
        'rating': 5,
        'review':'Great!'
    },
    {
        'name': 'Alex',
        'rating': 5,
        'review':'Great!'
    },
    {
        'name': 'Jane',
        'rating': 5,
        'review':'Great!'
    },
    {
        'name': 'Alice',
        'rating': 5,
        'review':'Great!'
    },
]
const CustomersSay = () => {

    return (
        <div style={{backgroundColor: '#EDEFEE'}}>
            <div className="container">
                <h1>Testimonials</h1>
            </div>
            <div className="container"  style={{gap: '1rem'}}>
                {testimonails.map((item, i) => (
                    <div key={i} className="review-card">
                        <p>{item.rating}</p>
                        <div style={{display: 'flex'}}>
                            <img src={imgPerson} width="50px" height="50px"></img>
                            <span style={{marginLeft: '0.5rem'}}>{item.name}</span>
                        </div>
                        <p>{item.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CustomersSay;