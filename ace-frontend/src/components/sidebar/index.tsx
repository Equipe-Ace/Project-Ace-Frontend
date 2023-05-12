import React, { useEffect } from "react";
import "./styles.css";
import { FaTimes, FaUserPlus, FaIdCard,FaChartBar} from "react-icons/fa";
import SidebarItem from "./sidebaritem";
import { Link } from 'react-router-dom';
import logo from "../../img/logo.png";

interface SidebarProps {
  active: boolean;
  close: () => void;
}

// useEffect(() => {}, [])// 

const userPermissao = localStorage.getItem("role");
const Sidebar: React.FC<SidebarProps> = ({ active, close }) => {
  if (userPermissao == "ADMIN") {
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

            <Link to="/relatoriomenu">
              <SidebarItem Icon={FaChartBar} Text="Relatórios" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else if (userPermissao == "COMERCIAL") {
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
  } else if (userPermissao == "FINANCEIRO") {
    return (
      <div className="sidebar">
        <div className={`Container2 ${active ? "active" : ""}`}>
          <FaTimes onClick={close} />

          <img className="logo" src={logo} alt=""></img>
          <div className="Content">
            <Link to="/ControleTitulosFIN">
              <SidebarItem Icon={FaIdCard} Text="Controle de Títulos" />
            </Link>

            <Link to="/relatoriomenu">
              <SidebarItem Icon={FaChartBar} Text="Relatórios" />
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return <>
    </>;
  };
};

export default Sidebar;
