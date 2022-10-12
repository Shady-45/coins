import React from "react";
import "../App.css";

const CoinItem = ({
  name,
  image,
  current_price,
  market_cap_rank,
  high_24h,
  low_24h,
}) => {
  return (
    <div className="coin-item">
      <p>{market_cap_rank}</p>
      <h1>{name}</h1>

      <img className="coin-image" src={image} alt="" />
      <p> {current_price}</p>
      <p>{high_24h}</p>
      <p>{low_24h}</p>
    </div>
  );
};

export default CoinItem;
