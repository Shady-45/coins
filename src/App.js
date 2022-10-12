import { useEffect, useState } from "react";
import "./App.css";
import CoinItem from "./Components/CoinItem";
import Loading from "./Components/Loading";

let url =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUserData = async () => {
    try {
      const response = await fetch(url);
      const coins = await response.json();
      setLoading(false);

      setCoins(coins);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <section>
        <Loading />
      </section>
    );
  }

  return (
    <>
      <div className="row-info">
        <h2>Rank</h2>
        <h2>Name</h2>
        <h2>Image</h2>
        <h2>Price</h2>
        <h2>High amount</h2>
        <h2>Low amount</h2>
      </div>
      <div className="coins">
        {coins.map((item) => {
          return (
            <CoinItem
              key={item.id}
              name={item.name}
              image={item.image}
              current_price={item.current_price}
              market_cap_rank={item.market_cap_rank}
              high_24h={item.high_24h}
              low_24h={item.low_24h}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
