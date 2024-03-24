import clsx from "clsx";

type SubMenuProps = {
  setCurrentPage: (currentPage: string) => void;
  currentPage: string;
  name: string;
};

export default function SubMenu({
  setCurrentPage,
  currentPage,
  name,
}: SubMenuProps) {

  const subMenuStyleOverView = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "overview",
    ["sub-menu-current--mercury"]: name.toLowerCase() === "mercury" && currentPage === "overview",
    ["sub-menu-current--venus"]: name.toLowerCase() === "venus" && currentPage === "overview",
    ["sub-menu-current--earth"]: name.toLowerCase() === "earth" && currentPage === "overview",
    ["sub-menu-current--mars"]: name.toLowerCase() === "mars" && currentPage === "overview",
    ["sub-menu-current--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "overview",
    ["sub-menu-current--saturn"]: name.toLowerCase() === "saturn" && currentPage === "overview",
    ["sub-menu-current--uranus"]: name.toLowerCase() === "uranus" && currentPage === "overview",
    ["sub-menu-current--neptune"]: name.toLowerCase() === "neptune" && currentPage === "overview"
  });
  const subMenuStyleStructure = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "structure",
    ["sub-menu-current--mercury"]: name.toLowerCase() === "mercury" && currentPage === "structure",
    ["sub-menu-current--venus"]: name.toLowerCase() === "venus" && currentPage === "structure",
    ["sub-menu-current--earth"]: name.toLowerCase() === "earth" && currentPage === "structure",
    ["sub-menu-current--mars"]: name.toLowerCase() === "mars" && currentPage === "structure",
    ["sub-menu-current--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "structure",
    ["sub-menu-current--saturn"]: name.toLowerCase() === "saturn" && currentPage === "structure",
    ["sub-menu-current--uranus"]: name.toLowerCase() === "uranus" && currentPage === "structure",
    ["sub-menu-current--neptune"]: name.toLowerCase() === "neptune" && currentPage === "structure"
  });
  const subMenuStyleSurface = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "surface",
    ["sub-menu-current--mercury"]: name.toLowerCase() === "mercury" && currentPage === "surface",
    ["sub-menu-current--venus"]: name.toLowerCase() === "venus" && currentPage === "surface",
    ["sub-menu-current--earth"]: name.toLowerCase() === "earth" && currentPage === "surface",
    ["sub-menu-current--mars"]: name.toLowerCase() === "mars" && currentPage === "surface",
    ["sub-menu-current--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "surface",
    ["sub-menu-current--saturn"]: name.toLowerCase() === "saturn" && currentPage === "surface",
    ["sub-menu-current--uranus"]: name.toLowerCase() === "uranus" && currentPage === "surface",
    ["sub-menu-current--neptune"]: name.toLowerCase() === "neptune" && currentPage === "surface"
  });

  return (
    <ul className="sub-menu">
      <li className={subMenuStyleOverView}>
        <p className="sub-menu--index">01</p>
        <a onClick={() => setCurrentPage("overview")}>Overview</a>
        <span
          className={
            currentPage === "overview"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
      <li className={subMenuStyleStructure}>
      <p className="sub-menu--index">02</p>
        <a onClick={() => setCurrentPage("structure")}>Structure</a>
        <span
          className={
            currentPage === "structure"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
      <li className={subMenuStyleSurface}>
          <p className="sub-menu--index">03</p>
        <a onClick={() => setCurrentPage("surface")}>Surface</a>
        <span
          className={
            currentPage === "surface"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
    </ul>
  );
}
