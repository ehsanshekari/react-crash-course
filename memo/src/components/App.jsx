import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Welcome from './Welcome';

function App() {
  const [term, setTerm] = useState('');

  return (
    <div className="container mt-5">
      <div>
        <Welcome welcomeMessage="Welcome to React Optimization!"/>
      </div>
      <div className="mb-3">
        <label htmlFor="searchInput" className="form-label">
          Search Term
        </label>
        <input
          id="searchInput"
          type="text"
          className="form-control"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Enter a term..."
        />
      </div>
    </div>
  );
}

export default App;
