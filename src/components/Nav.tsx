import "../main.scss";
import hamburger from "../assets/icon-hamburger.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a>THE PLANETS</a>
        </li>
      </ul>
      <label htmlFor="menu" tabIndex={0}>
        <img
          className="nav--hamburger"
          src={hamburger}
          width={24}
          height={17}
        ></img>
      </label>
      <input id="menu" type="checkbox" />
      <ul>
        <li>
          <a className="nav--planet" href="#">
            Mercury
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Venus
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Earth
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Mars
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Jupiter
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Saturn
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Uranus
          </a>
        </li>
        <li>
          <a className="nav--planet" href="#">
            Neptun
          </a>
        </li>
      </ul>
    </nav>
  );
}
