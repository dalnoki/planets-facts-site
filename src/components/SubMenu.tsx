export default function SubMenu({ setCurrentPage }: any) {
  return (
    <ul className="sub-menu">
      <li>
        <a onClick={() => setCurrentPage("overview")}>Overview</a>
      </li>
      <li onClick={() => setCurrentPage("structure")}>Structure</li>
      <li onClick={() => setCurrentPage("surface")}>Surface</li>
    </ul>
  );
}
