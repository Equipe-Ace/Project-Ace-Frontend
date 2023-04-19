import React from 'react';
import Header from '../../../components/header/index'
import './styles.css'


const RelatorioPag: React.FC = () => {


    return (
        <>
            <Header />
            <div className="bgboxPag" >
                <h1> Relatório de Pagamento: </h1>
            </div>

            <div className="boxDate">
                <div className='row'>
                    <span>Data de Início: </span>
                    <input type="date" />
                </div>
                <div className='row'>
                    <span>Data de Término: </span>
                    <input type="date" />
                </div>
            </div>

            <div className='CenterDetails'>
                <div className="DetailsDate">
                    <details>
                        <summary> Nome do Cliente </summary>
                            <p>informações do clientinho</p>
                    </details>
                    <details>
                        <summary> Nome do Cliente </summary>
                            <p>informações do clientinho2</p>
                    </details>
                    <details>
                        <summary> Nome do Cliente </summary>
                            <p>informações do clientinho3</p>
                    </details>
                </div>
            </div>


        </>
    );
}

export default RelatorioPag;