import React, { useEffect, useState } from 'react';
import Header from './../../components/header/index'
import FormADM from '../../components/FormADM/index';
import './styles.css'
import BotaoAvancar from '../../components/botaoGT';
import erro404 from '../../img/erro404.png'


const CadADM: React.FC = () => {
    let paginaRetornada = null;
    const [userPermissaoo, setUserPermissaoo] = useState<string | null>(null)

    useEffect(() =>{
        const userPermissao = localStorage.getItem("role");
        setUserPermissaoo(userPermissao)
    }, [])

    const pagina = 
        <>   
            <Header />
            <FormADM/>
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

    if(userPermissaoo === "ADMIN"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    
    return (
    
        paginaRetornada

    
    );
}

export default CadADM;