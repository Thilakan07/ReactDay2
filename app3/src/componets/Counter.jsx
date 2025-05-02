import { Button } from '@mui/material';
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); 
  
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);


  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <Button  variant='contained' onClick={increment}>+</Button>
      <Button  variant='contained'onClick={decrement}>-</Button>
    </div>
  );
};

export default Counter;
