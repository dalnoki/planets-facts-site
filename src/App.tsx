import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import "./main.scss";
import planetData from "../data.json";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const allPlanets = planetData;

function App() {
  return (
    <>
      <Header />
      <BrowserRouter
      basename={import.meta.env.DEV ? '/' : '/planets-facts-site/'}
    >
      <Routes>
        <Route path="/" element={<PlanetPage planet={allPlanets[0]} />} />
        {allPlanets.map((planet) => (
          <Route
            path={`/planets-facts-site/${planet.name.toLowerCase()}`}
            element={<PlanetPage planet={planet} />}
            key={planet.name}
          />
        ))}
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
