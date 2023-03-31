import React from 'react';
import './styles.css'
import { FaSearch } from 'react-icons/fa';
import BotaoGT from '../botaoAvan';
import { Link } from 'react-router-dom';

const TitReceber: React.FC = () => {
    return (
        <>

            <div className="bgTRAFIN" >
                <h1> Controle de Títulos a Receber </h1>
                <div className="inputBoxTRAFIN">
                    <input type="text" placeholder='⌕ pesquisar: '  />
                    <span>Cliente</span>
                </div>
                <Link to="/ControleTitulosFIN2">
                    <BotaoGT />
                </Link>
            </div>

        </>
    );
}

export default TitReceber;