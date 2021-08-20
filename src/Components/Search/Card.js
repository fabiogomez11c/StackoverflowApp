import React from 'react'
import { decodeHtml } from '../../helpers/decodeHTML'

import "./Card.css"

export const Card = ({title, nAnswers, fAnswer, tags, link}) => {
    const newTitle = decodeHtml(title)
    return (
    <a href={link} target="_blank">
        <div className="card">
            <h4>{newTitle}</h4>
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
                {tags.slice(0, 3).map((tag, idx) => {
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
    </a>
    )
}
