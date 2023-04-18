import React from "react";
import "./styles.css";
import { FaTimes, FaUserPlus, FaIdCard } from "react-icons/fa";
import SidebarItem from "./sidebaritem";
import { Link } from 'react-router-dom';
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
        <Link to="/cadastroCLI">
          <SidebarItem Icon={FaUserPlus} Text="Cadastro" />
        </Link>
        <Link to="/ControleTitulosFIN">
          <SidebarItem Icon={FaIdCard} Text="Controle de Títulos" />
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
