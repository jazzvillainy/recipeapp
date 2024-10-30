import React from 'react';
import styles from "./itemcomp.module.css";

function ItemComp({food,setItemId}) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.img} src={food.image} alt="" />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={()=>{console.log(food.id)
        setItemId(food.id);
        }} className={styles.itemButton}>View Recipe</button>
      </div>
    </div>
  );
}

export default ItemComp