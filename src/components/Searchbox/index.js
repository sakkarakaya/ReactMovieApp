import React, { useState } from 'react'
import './style.css'

const Searchbox = ({setSearchText}) => {
    const [inputText, setInputText] = useState("")
    const getInput = (v) => {
        setInputText(v) 
     }
    
    return (

        <div className="searchbox">
            <input onChange={e => getInput(e.target.value)}/>
            <button onClick={() => setSearchText(inputText)}>Search</button>
        </div>
    )
}

export default Searchbox
