import React from "react";
import imgTeamA from "../images/team_a.jpg"
import imgTeamB from "../images/team_b.jpg"

const Chicago = () => {

    return (
        <>
            <div className="container">
                <div style={{width: '50%'}}>
                    <h1 className="display-title" style={{color: '#F4CE14'}}>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p className="lead-text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                    </p>
                </div>
                <div style={{display: 'flex', justifyContent: 'end', width: '50%'}}>
                    <img src={imgTeamA} height="250px" width="200px" style={{display: 'block', marginTop: '50px', border: 'solid 1px #333333'}}></img>
                    <img src={imgTeamB} height="250px" width="200px" style={{display: 'block', marginLeft: '-50px', border: 'solid 1px #333333'}}></img>
                </div>
            </div>
        </>
    );
}

export default Chicago;