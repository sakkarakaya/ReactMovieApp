import React from 'react'
import { useLocation } from 'react-router-dom'

const Detail = () => {
    const data = useLocation();
    
    return (
        <div>
            <p>{data.state.original_title}</p>
        </div>
    )
}

export default Detail
