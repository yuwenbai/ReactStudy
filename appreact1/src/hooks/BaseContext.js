import React, {useState} from 'react'
import ChildContext from './ChildContext'
import MyContext from './MyContext'

const fetchData = () => {
    return new Promise((resoleve, reject) => {
        setTimeout(()=> {
            resoleve(1)
        })
    })
}

const BaseContext = (props = {}) => {
    const [step, setStep] = useState(0)
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(0)
    return (
        <MyContext.Provider value={{setStep, setCount, setNumber, fetchData}}>
            <ChildContext step={step} number={number} count={count}/>
        </MyContext.Provider>
        // <div>

        // </div>
    )
}
export default BaseContext