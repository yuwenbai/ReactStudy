import React, {useEffect} from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
  useLocation
} from "react-router-dom";

// export default function Topics() {
//     useEffect(() => {
//         return () => {
//           console.log('componentWillUnmount...');
//         };
//       }, []);
//       const location = useLocation();
// return <h2>{location.pathname}</h2>;
//   }
export default function Topics() {
  // let location = useLocation();

  return (
    <div>
      <h3>
        {/* No match for <code>{location.pathname}</code> */}
      </h3>
    </div>
  );
}
