import React from 'react'
import { Browser } from './Browser'
import { Cards } from './Cards'

export const Search = () => {
    return (
        <>
            <section className="search">
                <Browser/>
                <Cards/>
            </section>
        </>
    )
}
