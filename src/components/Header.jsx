import logoImg from "../assets/logo.png";
import Button from "./UI/Button";

export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="pikachu" />
        <h1>Pokecard Online</h1>
      </div>
      <nav>
        <Button>Cart(0)</Button>
      </nav>
    </header>
  );
}
