import React, {useState, useEffect} from 'react'

function ConvertToBinary(props){
    const {inputText} = props.data
    const asciiText = toAscii(inputText)
    const binaryText = toBinary(inputText)
    function toAscii(str) {
        return str.split('')
                .map(item => {
                    return item.charCodeAt()
                })
                .join(' ')
    }
    function toBinary(str){
        return str.split('')
                  .map(item => {
                      return item.charCodeAt().toString(2)
                  })
                  .join(' ')
    }
    function fromAscii(str){
        return str.split(' ')
                  .map(item => {
                      return String.fromCharCode(item)
                  })
                  .join("")
    }
    return(
        <div className="container">
            <div>
                <h2>Input Text:</h2>
                <p>{inputText}</p>
            </div>
            
            <div>
                <h2>Ascii Text</h2>
                <p>{asciiText}</p>
            </div>
            
            <div>
                <h2>Binary Text</h2>
                <p>{binaryText}</p>
            </div>
        </div>
    )
}

export default ConvertToBinary