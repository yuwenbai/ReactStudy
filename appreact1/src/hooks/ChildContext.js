import React, {useContext, useEffect, memo} from 'react'
import MyContext from './MyContext'
const ChildContext =  memo((props = {}) => {
    const {setStep, setNumber, setCount, fetchData} = useContext(MyContext)
    useEffect(()=>{
        fetchData().then((res) => {
            console.log(` fetch data : ${res}`)
        })
    }, [])
    return (        <div>
        <p>step is : {props.step}</p>
        <p>number is : {props.number}</p>
        <p>count is : {props.count}</p>
        <hr />
        <div>
            <button onClick={() => { setStep(props.step + 1) }}>step ++</button>
            <button onClick={() => { setNumber(props.number + 1) }}>number ++</button>
            <button onClick={() => { setCount(props.step + props.number) }}>number + step</button>
        </div>
    </div>)
});
export default ChildContext