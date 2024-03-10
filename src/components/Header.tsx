import "../main.scss";
import Nav from "../components/Nav.tsx";

export default function Header() {
  return (
    <header>
      <Nav />
      <hr className="nav--divider" />
    </header>
  );
}
