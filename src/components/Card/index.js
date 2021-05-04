import React from 'react'

import './style.css'

const Card = ({ baseImageUrl, data }) => {
    return (
        <div className='card-wrapper'>
            <img src={baseImageUrl + data.poster_path} alt="img" />
            <p>{data.original_title}</p>
        </div>
    )
}

export default Card
