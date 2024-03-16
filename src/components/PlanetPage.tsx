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
    <div className="planet-page">
      <SubMenu setCurrentPage={setCurrentPage} />
      {currentPage === "overview" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.planet}
          description={planet.overview.content}
          source={planet.overview.source}
        />
      ) : null}
      {currentPage === "structure" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.internal}
          description={planet.structure.content}
          source={planet.structure.source}
        />
      ) : null}
      {currentPage === "surface" ? (
        <SubPage
          alt={planet.name}
          image={planet.images.planet}
          description={planet.geology.content}
          source={planet.geology.source}
        />
      ) : null}
      <div className="planet--facts">
        <div className="planet--facts-row">
          <p className="planet--facts-title">Rotation time</p>
          <p className="planet--facts-data">{planet.rotation}</p>
        </div>
        <div className="planet--facts-row">
          <p className="planet--facts-title">Revolution time</p>
          <p className="planet--facts-data">{planet.revolution}</p>
        </div>
        <div className="planet--facts-row">
          <p className="planet--facts-title">Radius</p>
          <p className="planet--facts-data">{planet.radius}</p>
        </div>
        <div className="planet--facts-row">
          <p className="planet--facts-title">Average temp.</p>
          <p className="planet--facts-data">{planet.temperature}</p>
        </div>
      </div>
    </div>
  );
}
