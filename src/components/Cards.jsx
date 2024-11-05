import { useState, useEffect } from "react";

import CardItem from "./CardItem";

const API_KEY = "41d2dff6-e2ac-4365-ba97-8c792f3cd280";

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
