import React from 'react';
import Header from '../../components/header/index'
import erro404 from '../../img/erro404.png'
import TitReceber from '../../components/TitReceber';

const userPermissao = localStorage.getItem("role");
let paginaRetornada = null;

const CtrFIN: React.FC = () => {
    const pagina = 
        <>   
            <Header />
            <TitReceber/>    
        </>
    
    const paginaVazia = 
    <>
    <div className='pge' >
        <div className='info' >
        <h1>Erro 404</h1>
        <h2> Ooops, A rota não foi encontrada</h2>
        </div>
        <div className="errinho">
            <img src={erro404} alt="erro" />
        </div>
    </div>
    </>
    if(userPermissao === "ADMIN" || userPermissao === "COMERCIAL" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
       
     paginaRetornada
 
    );
    
}


export default CtrFIN;