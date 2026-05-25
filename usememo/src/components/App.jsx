import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import Products from './Products';

const allProducts = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 699 },
  { id: 3, name: 'Shirt', category: 'Clothing', price: 29 },
  { id: 4, name: 'Jeans', category: 'Clothing', price: 59 },
  { id: 5, name: 'Headphones', category: 'Electronics', price: 199 },
  { id: 6, name: 'Sneakers', category: 'Footwear', price: 89 }
];

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [count, setCount] = useState(0);

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center mb-4">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control form-control-lg shadow-sm"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <Products products={allProducts} searchTerm={searchTerm} />

      <hr className="my-5" />

      <div className="text-center">
        <p className="fs-5">
          Count: <strong>{count}</strong>
        </p>
        <button
          className="btn btn-secondary btn-lg shadow-sm"
          onClick={() => setCount((c) => c + 1)}
        >
          Increment Counter
        </button>
      </div>
    </div>
  );
};

export default App;
