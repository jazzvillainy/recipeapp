import React, { useEffect, useState } from "react";
import styles from "../components/search.module.css"

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "b2687234ad7a4a189bd27cef33c47587";



function Search({foodData, setFoodData}) {
  const [query, setQuery] = useState("pizza");

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setFoodData(data.results)
    }
    fetchFood();
  }, [query]);
  return (
    <div className={styles.searchContainer}>
      <input className={styles.input}
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        type="text"
        name=""
        id=""
      />
    </div>
  );
}

export default Search;
