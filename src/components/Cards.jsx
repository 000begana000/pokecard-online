import { useState, useEffect } from "react";

import CardItem from "./CardItem";

const API_KEY = process.env.API_KEY;

export default function Cards() {
  const [loadedCards, setLoadedCards] = useState();

  // fetching pokemon card API
  useEffect(() => {
    async function fetchCards() {
      const response = await fetch("https://api.pokemontcg.io/v2/cards", {
        headers: {
          "X-Api-Key": API_KEY,
        },
      });
      if (!response.ok) {
        //...
      }
      const cards = await response.json();
      setLoadedCards(cards.data);
    }

    fetchCards();
  }, []);

  return (
    <ul id="cards">
      {loadedCards &&
        loadedCards
          .slice(0, 21)
          .map((card) => <CardItem key={card.id} card={card} />)}
    </ul>
  );
}
