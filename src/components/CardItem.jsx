import { currencyFormatter } from "../util/formatting";

import Button from "./UI/Button";

export default function CardItem({ card }) {
  return (
    <li className="card-item">
      <img src={card.images.small} alt={card.name} />
      <div>
        <h3>{card.name}</h3>
        <p className="card-item-price">
          {currencyFormatter.format(card.cardmarket.prices.averageSellPrice)}
        </p>
      </div>
      <p className="card-item-actions">
        <Button>Add To Cart</Button>
      </p>
    </li>
  );
}
