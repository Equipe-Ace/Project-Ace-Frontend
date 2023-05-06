import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/index'
import TitReceber3 from '../../components/Titreceber3';
import { api } from '../../service/api';


const CtrFIN3: React.FC = () => {

    const { idCliente } = useParams();

    const [ parcela, setParcela] = useState()
    let paginaRetornada = null;

    const userPermissao = localStorage.getItem("role");

    useEffect(()=>{
        getParcela()
    }, [])

    const userToken = localStorage.getItem("token")

    async function getParcela(){
        api.get(`/Parcela/buscarParcela/${idCliente}` ,{
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        })
        .then(response => {
            setParcela(response.data)
        })
    }  

    const pagina = 
    <>
      <Header />
        {parcela && <TitReceber3 parcela={parcela}/>}  
    </>

    const paginaVazia = 
    <>

    </>

    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
       paginaRetornada
    );
}

export default CtrFIN3;