import React, { useCallback } from "react";
const RequestAnimation = () => {
    const [count, setCount] = React.useState(0)
    
    // Use useRef for mutable variables that we want to persist
    // without triggering a re-render on their change
    const requestRef = React.useRef();
    const previousTimeRef = React.useRef();
    
    const animate = useCallback(time => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;
        
        // Pass on a function to the setter of the state
        // to make sure we always have the latest state
        setCount(prevCount => (prevCount + deltaTime * 0.01) % 100);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    })
    
    React.useEffect(() => {
      requestRef.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(requestRef.current);
    }, [animate]); // Make sure the effect runs only once
    
    return <div>{Math.round(count)}</div>
  }

//   const useAnimationFrame = callback => {
//     // Use useRef for mutable variables that we want to persist
//     // without triggering a re-render on their change
//     const requestRef = React.useRef();
//     const previousTimeRef = React.useRef();
    
//     const animate = time => {
//       if (previousTimeRef.current != undefined) {
//         const deltaTime = time - previousTimeRef.current;
//         callback(deltaTime)
//       }
//       previousTimeRef.current = time;
//       requestRef.current = requestAnimationFrame(animate);
//     }
    
//     React.useEffect(() => {
//       requestRef.current = requestAnimationFrame(animate);
//       return () => cancelAnimationFrame(requestRef.current);
//     }, []); // Make sure the effect runs only once
//   }
  
//   const Counter = () => {
//     const [count, setCount] = React.useState(0)
    
//     useAnimationFrame(deltaTime => {
//       // Pass on a function to the setter of the state
//       // to make sure we always have the latest state
//       setCount(prevCount => (prevCount + deltaTime * 0.01) % 100)
//     })
      
//     return <div>{Math.round(count)}</div>
//   }

export default RequestAnimation
