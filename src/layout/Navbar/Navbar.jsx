import { iconsImgs } from "../../utils/images";
import "./Navbar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { personsImgs } from "../../utils/images";

const Navbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.cuvette} alt="" />
        </button>
      </div>
      <div className="content-top-btns">
        <button type="button" className="search-btn content-top-btn">
          FAQ
        </button>
        <button type="button" className="search-btn content-top-btn">
          Feedback
        </button>
        <button className="notification-btn content-top-btn">
          <img src={iconsImgs.notification} />
          <span className="notification-btn-dot"></span>
        </button>
        <div className="user-info">
          <div className="info-img img-fit-cover notification-btn content-top-btn">
            <img src={personsImgs.person_two} alt="profile image" />
          </div>
          <span className="info-name ">shreya kumari</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
