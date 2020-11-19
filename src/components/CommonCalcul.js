import React, {useState , useEffect} from "react"

function CommonCalcul(props){
    const [valOne, setValOne] = useState(props.data.valOne)
    const [valTwo, setValTwo] = useState(props.data.valTwo)
    let min = Math.min(valOne, valTwo)
    let max = Math.max(valOne, valTwo)
    let arr = arrayConstructor(min,max)
    let multiple = min;
    useEffect(() => {
        setValOne(props.data.valOne)
        setValTwo(props.data.valTwo)
    }, [props])
    
    function gcd(a,b){
        if (b === 0){
            return a;
        }
        else{
            return gcd(b, a % b)
        }
    }
    function lcm(a, b) {
        return (a * b) / gcd(a, b);   
    }
    
    arr.forEach(n => {
        multiple = lcm(multiple, n);
    })
    function arrayConstructor(min,max){
        let tmparr = []
        for(let i = max; i>=min ; i--){
            tmparr.push(i)
        }
        return tmparr;
    }
    return(
        <div>
            <div>Values {valOne} - {valTwo} </div>
            <br/>
            Values Array: <div id="array">{
             arr.map((item, index) => {
                return index === arr.length - 1 ? <span key={index}>{item}</span> : <span key={index}>{item}-</span>
             })  
            }</div>
            <br/>
            Lowest Common Multiple: {multiple}
        </div>
    )
}

export default CommonCalcul