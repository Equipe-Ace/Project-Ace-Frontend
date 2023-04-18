import React from 'react';
import Header from '../../components/header/index'
import './styles.css'


const SelectCli: React.FC = () => {
    return (
        <>
            <Header />
            <div className="bgSelect" >
                <h1> Clientes Cadastrados </h1>
            </div>
            <div className='CenterSelect'>
                <div className="boxSelect">
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

export default SelectCli;