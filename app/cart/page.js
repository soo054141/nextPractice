"use client";

import itemList from "./data.js";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      {itemList.map((el, i) => {
        return <CartItem key={i} name={el.name} price={el.price} />;
      })}
    </div>
  );
}

const CartItem = ({ name, price }) => {
  return (
    <div className="cartItem">
      <p>{name}</p>
      <p>${price}</p>
      <p>1개</p>
    </div>
  );
};
