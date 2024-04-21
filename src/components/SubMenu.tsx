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

  // TODO: remove code repetition.
  const subMenuStyleOverView = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "overview",
    ["sub-menu-current-desktop--mercury"]: name.toLowerCase() === "mercury" && currentPage === "overview",
    ["sub-menu-current-desktop--venus"]: name.toLowerCase() === "venus" && currentPage === "overview",
    ["sub-menu-current-desktop--earth"]: name.toLowerCase() === "earth" && currentPage === "overview",
    ["sub-menu-current-desktop--mars"]: name.toLowerCase() === "mars" && currentPage === "overview",
    ["sub-menu-current-desktop--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "overview",
    ["sub-menu-current-desktop--saturn"]: name.toLowerCase() === "saturn" && currentPage === "overview",
    ["sub-menu-current-desktop--uranus"]: name.toLowerCase() === "uranus" && currentPage === "overview",
    ["sub-menu-current-desktop--neptune"]: name.toLowerCase() === "neptune" && currentPage === "overview"
  });
  const subMenuStyleStructure = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "structure",
    ["sub-menu-current-desktop--mercury"]: name.toLowerCase() === "mercury" && currentPage === "structure",
    ["sub-menu-current-desktop--venus"]: name.toLowerCase() === "venus" && currentPage === "structure",
    ["sub-menu-current-desktop--earth"]: name.toLowerCase() === "earth" && currentPage === "structure",
    ["sub-menu-current-desktop--mars"]: name.toLowerCase() === "mars" && currentPage === "structure",
    ["sub-menu-current-desktop--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "structure",
    ["sub-menu-current-desktop--saturn"]: name.toLowerCase() === "saturn" && currentPage === "structure",
    ["sub-menu-current-desktop--uranus"]: name.toLowerCase() === "uranus" && currentPage === "structure",
    ["sub-menu-current-desktop--neptune"]: name.toLowerCase() === "neptune" && currentPage === "structure"
  });
  const subMenuStyleSurface = clsx({
    ["sub-menu--row"]: true,
    ["sub-menu-current"]: currentPage === "surface",
    ["sub-menu-current-desktop--mercury"]: name.toLowerCase() === "mercury" && currentPage === "surface",
    ["sub-menu-current-desktop--venus"]: name.toLowerCase() === "venus" && currentPage === "surface",
    ["sub-menu-current-desktop--earth"]: name.toLowerCase() === "earth" && currentPage === "surface",
    ["sub-menu-current-desktop--mars"]: name.toLowerCase() === "mars" && currentPage === "surface",
    ["sub-menu-current-desktop--jupiter"]: name.toLowerCase() === "jupiter" && currentPage === "surface",
    ["sub-menu-current-desktop--saturn"]: name.toLowerCase() === "saturn" && currentPage === "surface",
    ["sub-menu-current-desktop--uranus"]: name.toLowerCase() === "uranus" && currentPage === "surface",
    ["sub-menu-current-desktop--neptune"]: name.toLowerCase() === "neptune" && currentPage === "surface"
  });

  // TODO: generate list elements dynamically to remove repetition
  return (
    <ul className="sub-menu">
      <li className={subMenuStyleOverView} onClick={() => setCurrentPage("overview")}>
        <p className="sub-menu--index">01</p>
        <p><a>Overview</a></p>
        <span
          className={
            currentPage === "overview"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
      <li className={subMenuStyleStructure} onClick={() => setCurrentPage("structure")}>
      <p className="sub-menu--index">02</p>
        <p><a>Structure</a></p>
        <span
          className={
            currentPage === "structure"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
      <li className={subMenuStyleSurface} onClick={() => setCurrentPage("surface")}>
          <p className="sub-menu--index">03</p>
        <p><a>Surface</a></p>
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
