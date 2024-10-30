import React from "react";

function Ingr({ item, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        item.extendedIngredients.map((item) => (
          <div>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`}
              alt=""
            />
            <h3>{item.name}</h3>
            <h3>{item.unit}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default Ingr;
