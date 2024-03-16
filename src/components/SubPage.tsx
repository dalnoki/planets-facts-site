import iconSource from "../assets/icon-source.svg";

interface SubPageProps {
  image: string;
  alt: string;
  description: string;
  source: string;
}

export default function Overview({
  alt,
  image,
  description,
  source,
}: SubPageProps) {
  return (
    <>
      <div className="planet--img">
        <img src={image} alt={alt}></img>
      </div>
      <h1 className="planet--name">{alt}</h1>
      <div className="planet--description">
        <p>{description}</p>
      </div>
      <div className="planet--source">
        <p>
          Source: <a href={source}>Wikipedia</a>
          <img src={iconSource} />
        </p>
      </div>
    </>
  );
}
