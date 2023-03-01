import React from "react";
import imgGreekSalad from "../images/greek_salad.jpg"
import imgBrechetta from "../images/bruchetta.svg"
import imgLemonDessert from "../images/lemon_dessert.jpg"

const specials = [
    {
        'name': 'Greek salad',
        'price': 12.99,
        'description': 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
        'image': imgGreekSalad
    },
    {
        'name': 'Bruchetta',
        'price': 5.99,
        'description': 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
        'image': imgBrechetta
    },
    {
        'name': 'Lemon Dessert',
        'price': 5.00,
        'description': 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
        'image': imgLemonDessert
    },
]

const Specials = () => {

    return (
        <>
            <div className="container" style={{alignItems: 'center'}}>
                <h1 className="display-title">This weeks speicals!</h1>
                <div>
                    <button className="btn-primary">Online Menu</button>
                </div>
            </div>
            <div className="container">
                {specials.map((recipe, i) => (
                    <div key={i} className="recipe-card">
                        <div style={{height: '150px', backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover'}}></div>
                        <div className="card-body">
                            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                <h4 className="sub-title">{recipe.name}</h4>
                                <h4 className="sub-title" style={{color: '#EE9972'}}>${recipe.price}</h4>
                            </div>
                            <p className="paragraph-text">{recipe.description}</p>
                            <p className="highlight-text">Order a delivery</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Specials;