import { useState } from 'react';

export default function Counter() {
  console.log('Component1 rendered');
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);

  return (
    <>
      <h1>{firstNumber}</h1>
      <h1>{secondNumber}</h1>
      <button onClick={() => {
        setFirstNumber(firstNumber + 1);
        setSecondNumber(secondNumber + 1);
      }}>Click Me!</button>
    </>
  )
}