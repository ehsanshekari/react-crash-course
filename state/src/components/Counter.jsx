import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrease = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="text-center mt-5">
      <p>
        The current value of the counter is: {''}
        <span className="fw-bold">{count}</span>
      </p>
      <button className="btn btn-success me-3" onClick={increase}>
        Increase
      </button>
      <button className="btn btn-danger" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}

export default Counter;
