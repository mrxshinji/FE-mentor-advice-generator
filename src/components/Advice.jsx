import React from 'react';

export default function Advice(props) {

    return (
        <div className="container">
            <div className="dice dice-balance"></div>
            <div className="card">
                <div className="advice-number">
                    <p>Advice #{props.id}</p>
                </div>
                <div className="advice-text">
                    <h1>{props.advice}</h1>
                </div>
                <div className="divider">
                    <img src="./images/pattern-divider-mobile.svg" alt="divider"></img>
                </div>
            </div>
            <div className="dice">
                <button onClick={props.NextAdvice}><img src="./images/icon-dice.svg" alt="generate advice"></img></button>
            </div>
        </div>
    )
}