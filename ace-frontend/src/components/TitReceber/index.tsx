import React, { useState, } from 'react';
import './styles.css'
import { FaSearch } from 'react-icons/fa';
import BotaoGT from '../botaoAvan';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { api } from '../../service/api';
//import { createContext } from 'vm';

import { useNavigate } from "react-router-dom";

//const infoContext = createContext()

//function infoProvider(){}



    
    


const TitReceber: React.FC = () => {
   
    const [clienteNome, setClienteNome] = useState("")
    const navigate = useNavigate();
    
   const selectClienteFunction = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        console.log("algo")
        const nome = clienteNome
        api.get(`/Cliente/pegarNome/${nome}`)
        .then(response=> {
            const clienteSelecionado = response.data
            console.log(clienteSelecionado)
            if(clienteSelecionado){
                navigate(`/ControleTitulosFIN2/${clienteSelecionado.id}`);  
            }else{
                alert("cliente não encontrado")
            }
        })
        
    }
    
    
    return (
        <>

            <div className="bgTRAFIN" >
                <h1> Controle de Títulos a Receber </h1>
                <div className="inputBoxTRAFIN">
                    <input type="text" placeholder='⌕ pesquisar: ' onChange={(e) => setClienteNome(e.target.value)}/>
                    <span>Cliente</span>
                </div>
                
                    <BotaoGT onClick={(e) =>selectClienteFunction(e)} />
            
            </div>

        </>
    );
}

export default TitReceber;