import Navbar from "./Navbar";
import Search from "./Search";

function SideBar() {
  return (
    <div className="sidebar">
      <Navbar />
      <Search/>
    </div>
  );
}

export default SideBar;
