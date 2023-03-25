/**
- Clicking Buy should create a new row for Bids (buys)
- Clicking Sell should create a new row for Asks (sells)
- For Size, generate a random number between 0 to 2
- For Price, generate a random number between 37000 and 38000
- Green = rgb(45,175,52)
- Orange = rgb(250,103,45)
- You can use pure black and white for the other colors

{
  price: 37904.34,
  size: 0.2134
}
**/

import { useState, memo, useCallback } from "react";
import { generateNewOrder } from "./utils";
import "./styles.css";

function Button({ text = "Button", onClick, type = "" }) {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {text}
    </button>
  );
}

//eslint-disable-next-line no-func-assign
Button = memo(Button);

function OrderLineItem({ price, size, type = "" }) {
  const formattedPrice = price.toFixed(2);
  const formattedSize = size.toFixed(4);
  return (
    <div className="order-line-item-wrapper">
      <span className="order-line-item size">{formattedSize}</span>
      <span className={`order-line-item  price ${type}`}>{formattedPrice}</span>
    </div>
  );
}

//eslint-disable-next-line no-func-assign
OrderLineItem = memo(OrderLineItem);

export default function App() {
  const [buyOrders, setBuyOrders] = useState([]);
  const [sellOrders, setSellOrders] = useState([]);

  const handleBuyClick = useCallback(() => {
    const newBuyOrder = generateNewOrder();
    setBuyOrders((prevBuyOrders) => [...prevBuyOrders, newBuyOrder]);
  }, [setBuyOrders]);

  const handleSellClick = useCallback(() => {
    const newSellOrder = generateNewOrder();
    setSellOrders((prevSellOrders) => [...prevSellOrders, newSellOrder]);
  }, [setSellOrders]);

  return (
    <div className="App">
      <div className="btn-container">
        <Button text="Buy" onClick={handleBuyClick} type="buy" />
        <Button text="Sell" onClick={handleSellClick} type="sell" />
      </div>
      <div className="order-container">
        {sellOrders.map((order) => {
          return <OrderLineItem type="sell" key={order.id} {...order} />;
        })}

        <hr />
        {buyOrders.map((order) => {
          return <OrderLineItem type="buy" key={order.id} {...order} />;
        })}
      </div>
    </div>
  );
}
