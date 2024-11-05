import { useState, useEffect } from "react";

const API_KEY = "41d2dff6-e2ac-4365-ba97-8c792f3cd280";

{
  /* <ul id="cards">
      {loadedCards.map((card) => (
        <li key={card.id}>
          <img src={card.images.small} alt="" />
          <p>{card.tcgplayer.prices.market}</p>
        </li>
      ))}
    </ul> */
}

export default function Cards() {
  const [loadedCards, setLoadedCards] = useState();

  useEffect(() => {
    try {
      async function fetchCards() {
        const response = await fetch("https://api.pokemontcg.io/v2/cards");
        if (!response.ok) {
          //...
        }
        const cards = await response.json();
        setLoadedCards(cards.data);
      }

      fetchCards();
      console.log(loadedCards);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <ul id="cards">
      {loadedCards &&
        loadedCards.slice(0, 20).map((card) => (
          <li key={card.id} className="card-item">
            <img src={card.images.small} alt="" />
            <div>
              <h3>{card.name}</h3>
              <p className="card-item-price">
                {card.cardmarket.prices.averageSellPrice}
              </p>
              <p className="card-item-description">
                level: {card.level} hp: {card.hp} types: {card.types[0]}
              </p>
            </div>
            <p className="card-item-actions">
              <button>Add To Cart</button>
            </p>
          </li>
        ))}
    </ul>
  );
}
