import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { FaSearch } from 'react-icons/fa';
import BotaoAC from '../botaoAC';
import { Link } from 'react-router-dom';

const TitReceber2: React.FC = () => {
    return (
        <>

            <div className="bgTRAFIN2" >
                <h1> Gerenciamento de Títulos </h1>
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='⌕ pesquisar: '  />
                    <span>Usuário</span>
                </div>
                
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='parcela - 0 ' />
                    <span>Próxima Parcela</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input type="date" />
                    <span>Data de Vencimento</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='R$: 00,00' />
                    <span>Valor pago</span>
                </div>
                <BotaoAC />
                
                <Link to="/ControleTitulosFIN3">
                    <BotaoAvancar />
                </Link>
            </div>

        </>
    );
}

export default TitReceber2;