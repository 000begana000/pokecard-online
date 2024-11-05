import logoImg from "../assets/logo.png";
export default function Header() {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="pikachu" />
        <h1>Pokecard Online</h1>
      </div>
      <nav>
        <button>Cart(0)</button>
      </nav>
    </header>
  );
}
