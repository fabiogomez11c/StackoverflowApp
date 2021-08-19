import React from 'react'

import "./Card.css"

export const Card = ({title, nAnswers, fAnswer, tags}) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <div className="card__info">
                <div className="card__text">
                    <p>Answers:</p>
                    <span className="card__bold">
                        <p>{nAnswers}</p>
                    </span>
                </div>
                <div className="card__text">
                    <p>Final Answer:</p>
                    <span className="card__bold">
                        <p>{fAnswer ? "YES" : "NO"}</p>
                    </span>
                </div>
            </div>
            <div className="card__tags">
                {tags.map((tag, idx) => {
                    return (
                        <span 
                            key={idx} 
                            className="card__tag"
                        >
                            <p>{tag}</p>
                        </span>
                    )
                })}
            </div>
        </div>
    )
}
