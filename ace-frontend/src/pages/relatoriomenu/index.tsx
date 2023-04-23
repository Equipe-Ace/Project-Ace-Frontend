import React from 'react';
import Header from '../../components/header/index'
import './styles.css'


import { Link } from 'react-router-dom';

const RelatorioMenu: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bgboxSelect" >
                <h1> Selecione um tipo de relatório: </h1>
            </div>

            <div className="boxButtons">
                <div className='alinhar'>
                    
                    <Link to="/relatoriopag">
                        <button className='button' >Data de Pagamento</button>
                    </Link>

                    <Link to="/relatoriocre">
                        <button className='button' >Data de Crédito</button>
                    </Link>

                    <Link to="/relatorioven">
                        <button className='button' >Data de Vencimento</button>
                    </Link>
                </div>
            </div>
            

        </>
    );
}

export default RelatorioMenu;