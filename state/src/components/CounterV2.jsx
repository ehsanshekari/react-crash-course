import { useReducer } from 'react';

function counterReducer(count, action) {
  console.log('action', action);
  switch (action.type) {
    case 'increase':
      return count + 1;
    case 'increaseBy': 
      return count + action.payload;  
    case 'decrease':
      return count - 1;
    default:
      return count;
  }
}

function CounterV2() {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const increase = () => {
    dispatch({ type: 'increase' })
  };

  const decrease = () => {
    dispatch({ type: 'decrease' })
  };

  const increaseBy = () => {
    dispatch({type: 'increaseBy', payload: 5})
  }

  return (
    <div className="text-center mt-5">
      <p>
        The current value of the counter is: {''}
        <span className="fw-bold">{count}</span>
      </p>
      <button className="btn btn-success me-3" onClick={increase}>
        Increase
      </button>
      <button className="btn btn-success me-3" onClick={increaseBy}>
        Increase by 5
      </button>
      <button className="btn btn-danger" onClick={decrease}>
        Decrease
      </button>
    </div>
  );
}

export default CounterV2;
