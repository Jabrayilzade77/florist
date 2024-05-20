import React, { createContext, useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { BasketContext } from "../context/BasketProvider";

function Home() {

  const [products, setProducts] = useState([])

  const {addBasket} = useContext(BasketContext)


  getAllProducts()
  useEffect(() => {
    
  }, [])

  async function getAllProducts() {
    const res = await fetch("http://localhost:3002/myapp/")
    const data = await res.json()

    setProducts(data)
  }
  
  return (
    <>
      <main>
        <section>
          <div className={styles.flowers_background}>
            <div className={styles.fresh_flower}>
              <div className={styles.fresh_middle}>
                <p>Fresh Flower & Gift Shop</p>
                <span>Making beautiful flowers a part of your life.</span>
                <button>SHOP NOW</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className={styles.header_container}>
            <div className={styles.icon_and_cards_container}>
              <div className={styles.img_div}>
                <img
                  src="https://preview.colorlib.com/theme/florist/img/benefit/benefit-1.png"
                  alt=""
                />
              </div>
              <div className={styles.freshness_container}>
                <p>100% Freshness</p>
                <span>Most people are unaware of the less common flower</span>
              </div>
            </div>
            <div className={styles.icon_and_cards_container}>
              <div className={styles.img_div}>
                <img
                  src="	https://preview.colorlib.com/theme/florist/img/benefit/benefit-2.png"
                  alt=""
                />
              </div>
              <div className={styles.freshness_container}>
                <p>Made by artist</p>
                <span>Most people are unaware of the less common flower</span>
              </div>
            </div>
            <div className={styles.icon_and_cards_container}>
              <div className={styles.img_div}>
                <img
                  src="	https://preview.colorlib.com/theme/florist/img/benefit/benefit-3.png"
                  alt=""
                />
              </div>
              <div className={styles.freshness_container}>
                <p>Own courier</p>
                <span>Most people are unaware of the less common flower</span>
              </div>
            </div>
            <div className={styles.icon_and_cards_container}>
              <div className={styles.img_div}>
                <img
                  src="	https://preview.colorlib.com/theme/florist/img/benefit/benefit-4.png"
                  alt=""
                />
              </div>
              <div className={styles.freshness_container}>
                <p>100% Freshness</p>
                <span>Most people are unaware of the less common flower</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.flower_and_buttons_container}>
            <div className={styles.red_flower}>
              <div className={styles.fresh_flower_div}>
                <p>Fresh Flower</p>
                <span>( 25 items )</span>
              </div>
            </div>
            <div className={styles.succulent}>
              <div className={styles.fresh_flower_div}>
                <p>Succulent plants</p>
                <span>( 162 items )</span>
              </div>
            </div>
            <div className={styles.cactus}>
              <div className={styles.fresh_flower_div}>
                <p>Cactus plants</p>
                <span>( 58 items )</span>
              </div>
            </div>
            <div className={styles.funiture}>
              <div className={styles.fresh_flower_div}>
                <p>Funiture tree</p>
                <span>( 25 items )</span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.api_arrivals_container}>
            <div className={styles.div_and_links}>
              <div className={styles.our_flower_arrival}>
                <p>OUR FLOWER</p>
                <span>New Arrivals</span>
              </div>
              <div>
                <ul className={styles.api_navbar_lists}>
                  <li>All</li>
                  <li>Bouquet</li>
                  <li>Flower box</li>
                  <li>Flower shelf</li>
                  <li>Basket of flower</li>
                  <li>Gift combos</li>
                </ul>
              </div>
            </div>

            <div className={styles.api_data_container}>

        {products.map(x=>(
          <>
          <div className={styles.map_cards}>
            <img src={x.image} alt="" />
            <div className={styles.api_title_price}>
            <p>{x.title}</p>
            <span>${x.price}</span>
            <button onClick={()=>addBasket(x)}>add basket</button>
            </div>
          </div>
          </>
        ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
