import React, { useRef } from 'react'
import './style.css'

const Searchbox = ({setSearchText}) => {
    // const [inputText, setInputText] = useState("")
    const inputRef = useRef()
    
    // const getInput = (v) => {
    //     setInputText(v) 
    //  }
    
    return (

        <div className="searchbox">
            {/* <input onChange={e => getInput(e.target.value)}/> */}
            <input ref={inputRef}/>
            <button onClick={() => setSearchText(inputRef?.current?.value)}>Search</button>
        </div>
    )
}

export default Searchbox
