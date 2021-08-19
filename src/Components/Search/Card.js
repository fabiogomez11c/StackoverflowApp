import React from 'react'

export const Card = ({title, nAnswers, fAnswer, tags}) => {
    return (
        <div className="card">
            <h4>{title}</h4>
            <div className="card__info">
                <p>Answers</p>
                <span className="card__bold">
                    <p>{nAnswers}</p>
                </span>
            </div>
            <div className="card__info">
                <p>Final Answer</p>
                <span className="card__bold">
                    <p>{fAnswer ? "YES" : "NO"}</p>
                </span>
            </div>
            <div className="card__tags">
                <span className="card__tag">
                    {tags.map(tag => {
                        return (
                            <p>{tag}</p>
                        )
                    })}
                </span>
            </div>
        </div>
    )
}
