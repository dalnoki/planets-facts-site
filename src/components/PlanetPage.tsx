import { useState } from "react";
import SubMenu from "./SubMenu";
import SubPage from "./SubPage";

export type PlanetType = {
  planet: {
    name: string;
    overview: {
      content: string;
      source: string;
    };
    structure: {
      content: string;
      source: string;
    };
    geology: {
      content: string;
      source: string;
    };
    rotation: string;
    revolution: string;
    radius: string;
    temperature: string;
    images: {
      planet: string;
      internal: string;
      geology: string;
    };
  };
};
export default function PlanetPage({ planet }: PlanetType) {
  const [currentPage, setCurrentPage] = useState("overview");

  return (
    <>
      <SubMenu setCurrentPage={setCurrentPage} />
      <div className="planet-page"></div>
      <h1>{planet.name}</h1>
      {currentPage === "overview" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.planet}
          description={planet.overview.content}
        />
      ) : null}
      {currentPage === "structure" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.internal}
          description={planet.structure.content}
        />
      ) : null}
      {currentPage === "surface" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.planet}
          description={planet.geology.content}
        />
      ) : null}
      <p>{planet.rotation}</p>
      <p>{planet.revolution}</p>
      <p>{planet.radius}</p>
      <p>{planet.temperature}</p>
      <p>{planet.rotation}</p>
    </>
  );
}
