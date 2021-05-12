import React, { useRef, useContext } from 'react'
import {MovieContext} from '../../context/MovieContext'
import './style.css'

const Searchbox = () => {
    // const [inputText, setInputText] = useState("")
    const inputRef = useRef()
    
    // const getInput = (v) => {
    //     setInputText(v) 
    //  }
    
    const {setSearchText} = useContext(MovieContext)

    return (

        <div className="searchbox">
            {/* <input onChange={e => getInput(e.target.value)}/> */}
            <input ref={inputRef}/>
            <button onClick={() => setSearchText(inputRef?.current?.value)}>Search</button>
        </div>
    )
}

export default Searchbox
