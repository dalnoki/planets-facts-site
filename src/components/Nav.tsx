import "../main.scss";
import hamburger from "../../public/assets/icon-hamburger.svg"
import chevron from "../../public/assets/icon-chevron.svg"
import { Link } from "react-router-dom";
import planetData from "../../data.json";
import { useRef, useState } from "react";
import clsx from "clsx";

const allPlanets = planetData;

export default function Nav() {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [currentMenuElement, setCurrentMenuElement] = useState("mercury");

  const spanRef = useRef<Map<string, HTMLDivElement | null>>(new Map());
 // console.log(spanRef.current.get("Venus"))

  function getMap() {
    if (!spanRef.current && spanRef) {
      // Initialize the Map on first usage.
      spanRef.current = new Map();
    }
    return spanRef.current;
  }

  
  const handleToggle: () => void = () => 
  setIsMenuToggled(!isMenuToggled);

  const handleElementSelection: (name: string) => void = (name) =>
  setCurrentMenuElement(name.toLowerCase());


  const hamburgerMenuStyle = clsx({
    ["nav-planets"]: true,
    ["menu-toggled"]: isMenuToggled,
  });

  const menuStyle = clsx({
    ["nav-planets--desktop"]: true,
  });

  const spanStyle = clsx({
    ['nav-span'] : true,
    [`planet-${currentMenuElement}-color`]: true
  })

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
          alt="Open menu"
        ></img>
      </label>
      <input className="nav-checkbox" id="menu" type="checkbox" />
      <div>
        <ul className={hamburgerMenuStyle}>
          {allPlanets.map((planet) => (
            <li key={planet.name} className="nav-planets-container" onClick={handleToggle}>
              <div className="nav-planets--planet">
              <span
                className={`planet-theme planet-${planet.name.toLowerCase()}-color`}
              ></span>
              <Link to={`${planet.name.toLowerCase()}`}>{planet.name}</Link>
              </div>
              <div className="nav-planets--chevron">
              <img src={chevron} alt=""/>
              </div>
            </li>
       
          ))}
        </ul>
      </div>
<div>
  <ul className={menuStyle}>
    {allPlanets.map((planet) => (
      <li key={planet.name}>
      <div ref={(node) => {
        const map = getMap();
        if (node && spanRef) {
          map.set(planet.name, node);
        } else {
          map.delete(planet.name);
        }
      }}>
        <Link to={`/${planet.name.toLowerCase()}`} onClick={() => handleElementSelection(planet.name)}>{planet.name}</Link>
        {currentMenuElement === planet.name.toLowerCase() && spanRef.current ? <span className={spanStyle} style={{ width: spanRef.current.get(planet.name)?.offsetWidth}}></span> : null}
        {currentMenuElement === planet.name.toLowerCase() && !spanRef.current ? <span className={spanStyle} style={{ width: 74 }}></span> : null}
      </div>
      </li>
    ))}
  </ul>
</div>
    </nav>
  );
}
