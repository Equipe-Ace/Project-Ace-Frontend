import React from 'react';
import './styles.css'
import Dropdown from '../dropdown';
import BotaoAvancar from '../botaoAvan';
import { Link } from 'react-router-dom';




const FormADM: React.FC = () => {
    return (
        <>

            <div className="bgformadm" >
                <h1> Cadastro de usuários</h1>
                <div className="inputBoxformadm">
                    <input type="text" required />
                    <span>Email</span>
                </div>
                <div className="inputBoxformadm">
                    <input type="password" required />
                    <span>senha</span>
                </div>

                    <div>
                    <p>
                        <input type="checkbox" id="financeirobox" required />
                        <label htmlFor="financeirobox">Financeiro</label>
                    </p>
                    <p>
                        <input type="checkbox" id="comercialbox" required />
                        <label htmlFor="comercialbox">Comercial</label>
                    </p>
                    </div>

                <div className="containerbuttonAVC">
                    <button className="btn btn1"> Avançar ▸</button>
                </div>

            </div>

        </>
    );
}

export default FormADM;