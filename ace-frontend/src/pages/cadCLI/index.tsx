import React from 'react';
import Header from './../../components/header/index'
import FormCadCom2 from '../../components/formCad2';

const CadCLI: React.FC = () => {
    const userPermissao = localStorage.getItem("role")
    let paginaRetornada = null;

    const pagina = 
    <>
        <Header />
        <FormCadCom2/>
    </>
    
    const paginaVazia = 
    <></>

    if(userPermissao === "ADMIN" || userPermissao === "COMERCIAL"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
        paginaRetornada
    );
}

export default CadCLI;