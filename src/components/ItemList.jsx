import React from 'react'
import ItemComp from './ItemComp';
function ItemList({foodData,setItemId}) {
  return (
    <div>
        {foodData.map((food) => {return <ItemComp setItemId={setItemId} key={food.id} food={food}/>})}
    </div>
  );
}

export default ItemList 