import { useState } from 'react';

export default function Counter() {
  console.log('Component2 rendered');
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber(number + 1);
        setNumber(number + 1);
        setNumber(number + 1);
      }}>Click Me!</button>
    </>
  )
}