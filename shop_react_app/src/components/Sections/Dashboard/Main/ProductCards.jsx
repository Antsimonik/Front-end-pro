// import React, { Fragment, useEffect, useState } from "react";

// function ProductCards(props) {
//   const [products, setProducts] = useState([]);
//   const API = "https://634e9f834af5fdff3a625f84.mockapi.io/products";

//   useEffect(() => {
//     (async () => {
//       let data = await fetch(API).then(data => data.json());
//       setProducts(data);
//     })()
//   }, [])

//   return (
//     <Fragment>
//       {products.map(product => <div data-id key ={product.id}
//       <section className="category" data-name="Boat">
//       <h2>Boat</h2>
//       <div className="category__container">
//         <div data-id="1" className="product">
//           <img src={aircraftCarrier} alt="Aircraft Carrier" height="80" />
//           <p className="product__title">Aircraft Carrier</p>
//           <div className="product__sale">
//             <span className="product__sale--old">$30000</span>
//             <span className="product__sale--percent">-2%</span>
//           </div>
//           <div class="product__info">
//             <span class="product__price">$30000</span>
//             <button class="product__cart">
//               <img src={shoppingCart} alt="shopping cart" height="20" />
//             </button>
//           </div>
//         </div>
//         <div data-id="2" class="product">
//           <img src={boat} class="product__img" alt="Boat" height="80" />
//           <p class="product__title">Boat</p>
//           <div class="product__info">
//             <span class="product__price">$700</span>
//             <button class="product__cart">
//               <img src={shoppingCart} alt="shopping cart" height="20" />
//             </button>
//           </div>
//         </div>
//         <div data-id="16" class="product">
//           <img
//             src={speedBoat}
//             class="product__img"
//             alt="Speed Boat"
//             height="80"
//           />
//           <p class="product__title">Speed Boat</p>
//           <div class="product__sale">
//             <span class="product__sale--old">$2000</span>
//             <span class="product__sale--percent">-34%</span>
//           </div>
//           <div class="product__info">
//             <span class="product__price">$1998</span>
//             <button class="product__cart">
//               <img src={shoppingCart} alt="shopping cart" height="20" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>)}
//     </Fragment>

//   );
// }

// export default ProductCards;
