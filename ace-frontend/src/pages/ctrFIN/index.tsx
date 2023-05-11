import React from 'react';
import Header from '../../components/header/index'
import TitReceber from '../../components/TitReceber';

const userPermissao = localStorage.getItem("role");
let paginaRetornada = null;

//if(userPermissao === "ADMIN" || userPermissao === "COMERCIAL" || userPermissao === "FINANCEIRO"){
const CtrFIN: React.FC = () => {
    const pagina = 
        <>   
            <Header />
            <TitReceber/>    
        </>
    
    const paginaVazia = 
    <>

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