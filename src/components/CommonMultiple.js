import React, {useState , useEffect} from "react"
import CommonCalcul from "./CommonCalcul"

function CommonMultiple(props){
    const [valOne, setValOne] = useState('')
    const [valTwo, setValTwo] = useState('')
    const [data, setData] = useState('')


    function handleChange(e){
        const {name, value} = e.target
        switch(name){
            case "valOne": setValOne(value); break;
            case "valTwo": setValTwo(value); break;
        }
    }

    function handleSubmit(e){
        setData({
            valOne: valOne,
            valTwo: valTwo,
        })
        e.preventDefault();
    }

    
    
    return(
        <div>
            <h2>Input 2 number to check the smallest common multiple</h2>
            <form onSubmit={handleSubmit}>
                <input type="number"
                        onChange={handleChange}
                        value={valOne}
                        name="valOne"/>
                <input type="number"
                        onChange={handleChange}
                        value={valTwo}
                        name="valTwo"/>
                <input type="submit"/>
            </form>
            {data === '' ? null :<CommonCalcul data={data}/>}
            
        </div>
    )
}

export default CommonMultiple