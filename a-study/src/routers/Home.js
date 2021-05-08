import React, {useEffect} from 'react';
export default function Home(props) {

    useEffect(()=>{
      console.log('props is ', props)
    },[])

    return <h2>Home</h2>;
  }