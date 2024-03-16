import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import "./main.scss";
import planetData from "../data.json";
import { Route, Routes } from "react-router-dom";

const allPlanets = planetData;

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PlanetPage planet={allPlanets[0]} />} />
        {allPlanets.map((planet) => (
          <Route
            path={`/${planet.name.toLowerCase()}`}
            element={<PlanetPage planet={planet} />}
            key={planet.name}
          />
        ))}
      </Routes>
    </>
  );
}
export default App;
