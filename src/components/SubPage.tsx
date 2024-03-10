interface SubPageProps {
  image: string;
  alt: string;
  description: string;
}

export default function Overview({ alt, image, description }: SubPageProps) {
  return (
    <div>
      <img src={image} alt={alt}></img>
      <p>{description}</p>
    </div>
  );
}
