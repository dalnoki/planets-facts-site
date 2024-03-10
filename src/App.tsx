import Header from "./components/Header";
import PlanetPage from "./components/PlanetPage";
import "./main.scss";
import planetData from "../data.json";

const allPlanets = planetData;

function App() {
  return (
    <>
      <Header />
      <PlanetPage planet={allPlanets[0]} />
    </>
  );
}
export default App;
