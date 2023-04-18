import React from 'react';
import Header from '../../components/header/index'
import './styles.css'


const RelatorioMenu: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bgboxSelect" >
                <h1> Selecione um tipo de relatório: </h1>
            </div>

            <div className="boxButtons">
            <Link to="/relatoriopag">
            <button className='DtPag' >Data de Pagamento</button>
            </Link>

            <Link to="/relatoriocre">
            <button className='DtCre' >Data de Crédito</button>
            </Link>

            <Link to="/relatorioven">
            <button className='DtVen' >Data de Vencimento</button>
            </Link>
            </div>
        </>
    );
}

export default RelatorioMenu;