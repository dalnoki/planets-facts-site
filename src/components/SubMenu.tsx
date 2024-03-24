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
  return (
    <ul className="sub-menu">
      <li className={currentPage === "overview" ? `sub-menu-current` : ""}>
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
      <li className={currentPage === "structure" ? `sub-menu-current` : ""}>
        <a onClick={() => setCurrentPage("structure")}>Structure</a>
        <span
          className={
            currentPage === "structure"
              ? `sub-menu-current--${name.toLowerCase()}`
              : ""
          }
        ></span>
      </li>
      <li
        className={
          currentPage === "surface"
            ? `sub-menu-current sub-menu-current--${name.toLowerCase()}`
            : ""
        }
      >
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
