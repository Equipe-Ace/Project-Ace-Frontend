import React from "react";
import "./styles.css";
import { FaTimes, FaUserPlus, FaUserFriends } from "react-icons/fa";
import SidebarItem from "./sidebaritem";
import logo from "../../img/logo.png";

interface SidebarProps {
  active: boolean;
  close: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ active, close }) => {
  return (
    <div className="sidebar">
      <div className={`Container2 ${active ? "active" : ""}`}>
        <FaTimes onClick={close} />
        <img className="logo" src={logo} alt=""></img>
        <div className="Content">
          <SidebarItem Icon={FaUserPlus} Text="Cadastro" />
          <SidebarItem Icon={FaUserFriends} Text="Meus Clientes" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
