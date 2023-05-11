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

                <div className='rolebox' >
                    <div>
                        <span>Comercial</span>
                        <input type='radio' className='comercial'>
                        </input>

                        <span>Financeiro</span>
                        <input type='radio' className='financeiro'>
                        </input>
                    </div>





                </div>
                <div className="containerbuttonAVC">
                    <button className="btn btn1"> Avançar ▸</button>
                </div>

            </div>

        </>
    );
}

export default FormADM;