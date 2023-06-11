import React, { useState } from "react";

// import {
//   AiOutlineHome,
//   IoBookSharp,
//   MdAdminPanelSettings,
//   AiOutlineBars,
// } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      //   icon: <AiOutlineHome />,
    },
    {
      path: "/userView",
      name: "Propuestas",
      //   icon: <IoBookSharp />,
    },
    {
      path: "/adminView",
      name: "Admin",
      //   icon: <MdAdminPanelSettings />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <AiOutlineBars onClick={toggle} />
          </div>

          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeclassName="active"
            >
              {/* <div className="icon">{item.icon}</div> */}
              <div
                style={{ display: isOpen ? "block" : "none" }}
                className="link_text"
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Sidebar;
