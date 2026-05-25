import { useState } from 'react';

export default function Counter() {
  console.log('Component3 rendered');
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
        setNumber((prevNumber) => prevNumber + 1);
        setNumber((prevNumber) => prevNumber + 1);
        setNumber((prevNumber) => prevNumber + 1);
      }}>Click Me!</button>
    </>
  )
}