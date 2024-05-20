import React, { useContext } from "react";
import { BasketContext } from "../context/BasketProvider";
import styles from "./Basket.module.scss";


function Basket() {
  const { basket } = useContext(BasketContext);
  return (
    <>
      <div className={styles.api_data_container}>
        {basket.map((x) => (
          <>
            <div className={styles.map_cards}>
              <img src={x.image} alt="" />
              <div className={styles.api_title_price}>
                <p>{x.title}</p>
                <span>${x.price}</span>
                <button onClick={() => addBasket(x)}>add basket</button>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Basket;
