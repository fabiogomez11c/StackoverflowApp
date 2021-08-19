import React, { useContext } from 'react'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import { Card } from './Card'

import "./Cards.css"

export const Cards = () => {

    const {data} = useContext(GlobalContext);

    const items = data.items?.slice(0, 6);

    return (
        <div className="cards">
            {items ? 
            (items.map((item) => {
                return <Card
                    title={item.title}
                    nAnswers={item.answer_count}
                    fAnswer={item.is_answered}
                    tags={item.tags}
                    key={item.question_id}
                />
            }))
            : <div></div>
            }
        </div>
    )
}
