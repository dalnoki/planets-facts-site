import "../main.scss";
import hamburger from "../assets/icon-hamburger.svg";
import { Link } from "react-router-dom";
import planetData from "../../data.json";

const allPlanets = planetData;

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
      <ul className="nav-planets">
        {allPlanets.map((planet) => (
          <div className="nav-planets-container">
            <span
              className={`planet-theme planet-${planet.name.toLowerCase()}-color`}
            ></span>
            <Link to={`${planet.name.toLowerCase()}`}>{planet.name}</Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}
