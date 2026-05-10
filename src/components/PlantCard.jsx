import { useState } from 'react';

function PlantCard({ plant }) {
  const [isInStock, setIsInStock] = useState(true);

  return (
    <div data-testid="plant-item">
      <h4>{plant.name}</h4>
      <img src={plant.image} alt={plant.name} />
      <p>Price: {plant.price}</p>
      <button onClick={() => setIsInStock(!isInStock)}>
        {isInStock ? 'In Stock' : 'Out of Stock'}
      </button>
    </div>
  );
}

export default PlantCard;