import React, { useContext } from 'react'
import Card from '../Card'
import { MovieContext } from '../../context/MovieContext'
import './style.css'

const CardList = () => {
    const { movies, baseImageUrl } = useContext(MovieContext)
    return (
        <div className='cards'>
            {movies?.map((m, i) =>
                <Card
                    key={i}
                    data={m}
                    baseImageUrl={baseImageUrl}
                />)}
        </div>
    )
}

export default CardList

