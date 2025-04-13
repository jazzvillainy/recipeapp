import React, { useEffect, useState } from "react";
import Ingr from "./Ingr";


function ItemDetail({ itemId }) {
  const URL = `https://api.spoonacular.com/recipes/${itemId}/information`;
  const API_KEY = "b2687234ad7a4a189bd27cef33c47587";
  const [item, setItem] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setItem(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [itemId]);
  return (
    <div>
      {isLoading ? (
        <p>...Loading</p>
      ) : (
        <>
          <div>
            <h1>{item.title}</h1>
            <img src={item.image} alt="" />
            <div>
              {/* <span>{item.servings} serving</span> */}
              <span>
                <strong>ready in {item.readyInMinutes} Minutes,</strong>
              </span>
              <span>{/* <span>  {item.servings}</span> */}</span>
              <span>{item.vegetarian ? "Vegetarian" : "Non-vegetarian"}</span>
              <span>{item.vegan ? "Vegan" : ""}</span>
            </div>
            <div>
              <span>Price per serving: {item.pricePerServing}</span>
            </div>
            <h2 >Ingredients</h2>
            <Ingr item={item} isLoading={isLoading} />
            <h2>Instructions</h2>
            <div>
              <ol>
                {isLoading ? (
                  <p>Loading...</p>
                ) : (
                  item.analyzedInstructions[0].steps.map((step) => (
                    <li>{step.step}</li>
                  ))
                )}
              </ol>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ItemDetail;
