import React from 'react'
import { useHistory } from "react-router-dom";
import './style.css'

const Card = ({ baseImageUrl, data }) => {
    const history = useHistory();
    return (
        <div className='card-wrapper' onClick={()=>{history.push({
            pathname: "/detail/" + data.id,
            state: data
          })}}>
            {
                data.poster_path ?
                <img src={baseImageUrl + data.poster_path} alt="img" /> :
                <img src="https://via.placeholder.com/70x113.png?text=No+Image" alt="img" />
            }
            <p>{data.original_title}</p>
        </div>
    )
}

export default Card
