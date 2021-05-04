import React from 'react'

import Card from '../Card'
import './style.css'



const CardList = ({ movies, baseImageUrl }) => {

    return (
        <div className='cards'>
            {movies?.map((m, i) => <Card key={i} data={m} baseImageUrl={baseImageUrl} />)}
        </div>
    )
}

export default CardList

