import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import { iconsImgs } from "../../utils/images.js";

const Sidebar = () => {
  const [activeLinkIdx] = useState(2);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);

  const navigationLinks = [
    { id: 1, title: "Dashboard", image: iconsImgs.home },
    { id: 2, title: "Skill Test", image: iconsImgs.budget },
    { id: 3, title: "Internships", image: iconsImgs.plane },
  ];

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
