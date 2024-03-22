import "../main.scss";
import hamburger from "../assets/icon-hamburger.svg";
import chevron from "../assets/icon-chevron.svg"
import { Link } from "react-router-dom";
import planetData from "../../data.json";
import { useState } from "react";
import clsx from "clsx";

const allPlanets = planetData;

export default function Nav() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const handleToggle: () => void = () => 
  setIsMenuToggled(!isMenuToggled);

  const hamburgerMenuStyle = clsx({
    ["nav-planets"]: true,
    ["menu-toggled"]: isMenuToggled,
  });

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
          onClick={handleToggle}
        ></img>
      </label>
      <input className="nav-checkbox" id="menu" type="checkbox" />
      <div>
        <ul className={hamburgerMenuStyle}>
          {allPlanets.map((planet) => (
            <div className="nav-planets-container" onClick={handleToggle} key={planet.name}>
              <div className="nav-planets--planet">
              <span
                className={`planet-theme planet-${planet.name.toLowerCase()}-color`}
              ></span>
              <Link to={`${planet.name.toLowerCase()}`}>{planet.name}</Link>
              </div>
              <div className="nav-planets--chevron">
              <img src={chevron} />
              </div>
            </div>
       
          ))}
        </ul>
      </div>
    </nav>
  );
}
