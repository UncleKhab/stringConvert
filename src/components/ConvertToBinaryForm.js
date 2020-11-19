import React, {useState, useEffect} from 'react'
import ConvertToBinary from './ConvertToBinary'

function ConvertToBinaryForm(props){
    const [userInputText, setUserInputText] = useState()
    const [data, setData] = useState({})
    const [load, setLoad] = useState(false)
    function handleSubmit(e){
        e.preventDefault()
        e.target.reset()
        setData({
            inputText : userInputText
        })
        setLoad(true)
    }

    function handleChange(e){
        
        setUserInputText(e.target.value)
    }
    return(<div>
        <h1 className="main-header">Text Converter</h1>
        <h3 className="sub-header">Convert your text to ASCII and Binary Code</h3>
        <form onSubmit={handleSubmit}>
            <textarea
                type="text"
                onChange={(e) => handleChange(e)}
                placeholder="Your Text Here"
                className="text-area full-width"
            />
            <input 
                type="submit"
                className="btn btn-submit"
            />
        </form>

        {load ? <ConvertToBinary data={data}/> : null}
    </div>)
}

export default ConvertToBinaryForm