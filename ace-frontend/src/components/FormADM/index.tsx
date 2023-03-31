import React from 'react';
import './styles.css'
import Dropdown from '../dropdown';
import BotaoAvancar from '../botaoAvan';
import { Link } from 'react-router-dom';

const OpcDrop: React.FC = () => {
  const options = ['Financeiro', 'Comercial'];

  return <Dropdown options={options} />;
};



const FormADM: React.FC = () =>{
    return(
        <>
        
            <div className="bgformadm" >
            <h1> Cadastro de usuários</h1>
                <div className="inputBoxformadm">
                    <input type="text" />
                    <span>Nome</span>
                </div>
                <div className="inputBoxformadm">
                    <input type="text" />
                    <span>Email</span>
                </div>
                <div className="inputBoxformadm">
                    <input type="text" />
                    <span>senha</span>
                </div>
                <OpcDrop />
                
            <div className="containerbuttonAVC">
                <button className="btn btn1"> Avançar ▸</button>
            </div>

            </div>
            
        </>
    );
}

export default FormADM;