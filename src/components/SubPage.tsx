import iconSource from "../../public/assets/icon-source.svg"

interface SubPageProps {
  image: string;
  name: string;
  description: string;
  source: string;
  currentPage: string;
}

export default function Overview({
  name,
  image,
  description,
  source,
  currentPage
}: SubPageProps) {
  return (
    <>
      <div className={"planet--img"}>
        <img src={image} alt={name} className={`planet--img-${name.toLowerCase()}`} />
      { currentPage === "surface" ? 
      <div className="surface-img">
        
      <img src={`./assets/geology-${name.toLowerCase()}.png`} alt={name} />
      </div> : null
}
</div>
      <h1 className="planet--name">{name}</h1>
      <div className="planet--description">
        <p>{description}</p>
      </div>
      <div className="planet--source">
        <p>
          {/* TODO: source should come form the data json */}
          Source: <a href={source}>Wikipedia</a>
          <img src={iconSource} alt=""/>
        </p>
      </div>
    </>
  );
}
