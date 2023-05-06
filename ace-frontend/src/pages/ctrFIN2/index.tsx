import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/header/index'
import TitReceber2 from '../../components/Titreceber2';
import { api } from '../../service/api';


const CtrFIN2: React.FC = () => {
    const { idCliente } = useParams();
    let paginaRetornada = null;
    const [ parcela, setParcela] = useState()
    const userPermissao = localStorage.getItem("role");

    useEffect(()=>{
        getParcela()
    }, [])

    const userToken = localStorage.getItem("token")
    async function getParcela(){
        api.get(`/Parcela/buscarParcela/${idCliente}`, {
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
        {parcela && <TitReceber2 parcela={parcela}/>}
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

export default CtrFIN2;