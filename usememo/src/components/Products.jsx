import { useMemo } from 'react';

const Products = ({ products, searchTerm }) => {
  console.log('Filtering products...');

  // Consider this an expensive operation
  // const filteredProducts = products.filter(product =>
  //   product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  const filteredProducts = useMemo(() => {
    console.log('Filtering Logic!');
    return products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [products, searchTerm])

  return (
    <div className="row justify-content-center">
      <div className="col-md-6">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-muted">No products found.</p>
        ) : (
          <ul className="list-group shadow-sm">
            {filteredProducts.map((product) => (
              <li
                key={product.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  <strong>{product.name}</strong>
                  <span className="text-muted ms-2 small">{product.category}</span>
                </div>
                <span className="badge bg-success rounded-pill">
                  ${product.price}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;
