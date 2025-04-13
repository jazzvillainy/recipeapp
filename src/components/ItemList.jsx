import React from 'react'
import ItemComp from './ItemComp';
function ItemList({ foodData, setItemId, setShowModal }) {
  return (
    <div>
      {foodData.map((food) => {
        return (
          <ItemComp
            setShowModal={setShowModal}
            setItemId={setItemId}
            key={food.id}
            food={food}
          />
        );
      })}
    </div>
  );
}

export default ItemList 