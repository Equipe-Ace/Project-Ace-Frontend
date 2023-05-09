import React from 'react';
import Header from '../../components/header/index'
import './styles.css'


import { Link } from 'react-router-dom';
const userPermissao = localStorage.getItem("role")
let paginaRetornada = null;

const RelatorioMenu: React.FC = () => {
    const pagina = 
        <>
            <Header />
            <div className="bgboxSelect" >
                <h1> Selecione um tipo de relatório: </h1>
            </div>

            <div className="boxButtons">
                <div className='alinhar'>
                    
                    <Link to="/relatorioven">
                        <button className='button' >Data de Vencimento</button>
                    </Link>

                    <Link to="/relatoriocre">
                        <button className='button' >Data de Crédito</button>
                    </Link>

                    <Link to="/relatoriopag">
                        <button className='button' >Data de Pagamento</button>
                    </Link>




                </div>
            </div>
        </>
    const paginaVazia =<></>

    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }

    return (
        paginaRetornada
    );
}

export default RelatorioMenu;