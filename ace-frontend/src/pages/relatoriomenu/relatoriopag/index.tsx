import React from 'react';
import Header from '../../../components/header/index'
import './styles.css'


const RelatorioPag: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bgboxSelect" >
                <h1> Selecione um tipo de relatório: </h1>
            </div>

            <div className="boxButtons">
            <button className='DtPag' >Data de Pagamento</button>
            <button className='DtCre' >Data de Crédito</button>
            <button className='DtVen' >Data de Vencimento</button>

            </div>

        </>
    );
}

export default RelatorioPag;