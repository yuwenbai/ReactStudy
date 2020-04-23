import React from 'react';
// can also be an es6 arrow function

const OtherSnowy = React.memo(props => (
    <div>implicit memoized component</div>
  ));

export default OtherSnowy