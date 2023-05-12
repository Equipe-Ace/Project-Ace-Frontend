import React, { useEffect, useState } from 'react';
import Header from '../../components/header/index'
import TitReceber from '../../components/TitReceber';



//if(userPermissao === "ADMIN" || userPermissao === "COMERCIAL" || userPermissao === "FINANCEIRO"){
const CtrFIN: React.FC = () => {

    let paginaRetornada = null;
const [userPermissaoo, setUserPermissaoo] = useState<string | null>(null)

useEffect(() =>{
    const userPermissao = localStorage.getItem("role");
    setUserPermissaoo(userPermissao)
}, [])
    const pagina = 
        <>   
            <Header />
            <TitReceber/>    
        </>
    
    const paginaVazia = 
    <>

    </>
    if(userPermissaoo === "ADMIN" || userPermissaoo === "COMERCIAL" || userPermissaoo === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
       
     paginaRetornada
 
    );
    
}


export default CtrFIN;