import { useEffect, useRef, useState } from "react";

const UseRefPersistenceDemo = () => {
  const [count, setCount] = useState(0);
  const refValue = useRef(0);
  let simpleVariable = 0;

  const IncrementAll = () => {
    simpleVariable += 1;
    refValue.current += 1;
    setCount((currentCount) => currentCount + 1);
  };

  const IncrementRef = () => {
    refValue.current += 1;
  };

  return (
    <main className="container py-5">
      <div className="card shadow-sm mx-auto" style={{ maxWidth: "42rem" }}>
        <div className="card-body p-4">
          <h1 className="h3 card-title">useRef and re-renders</h1>
          <p className="text-secondary">
            A local variable is created again on every render. A ref keeps the
            same object, so its value survives re-renders. Changing A ref do not
            cause re-renders.
          </p>

          <div className="alert alert-info">
            Count: {count}
          </div>

          <div className="row g-3 mb-4">
            <div className="col-sm-6">
              <div className="border rounded p-3 h-100">
                <h2 className="h5">Simple variable</h2>
                <p className="display-6 mb-1">{simpleVariable}</p>
                <small className="text-secondary">
                  Resets to 0 during every re-render
                </small>
              </div>
            </div>

            <div className="col-sm-6">
              <div className="border rounded p-3 h-100">
                <h2 className="h5">useRef value</h2>
                <p className="display-6 mb-1">{refValue.current}</p>
                <small className="text-secondary">
                  Keeps its value between re-renders
                </small>
              </div>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-primary"
              type="button"
              onClick={IncrementAll}
            >
              Increment values and re-render by state update
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={IncrementRef}
            >
              Increment Ref
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UseRefPersistenceDemo;
