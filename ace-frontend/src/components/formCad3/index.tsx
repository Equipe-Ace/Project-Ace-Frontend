import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';


const FormCadCom3: React.FC = () => {
    return (
        <>
         <h1> Cadastro de Cliente</h1>
            <div className="bg" >
                <div className="coluna">
                    <div className="inputBox">
                        <input type="text" placeholder='R$: 00,00'/>
                        <span>valor serviço:</span>
                    </div>
                </div>
            </div>
           <div className='botaoA'> <BotaoAvancar /> </div> 
        </>
    );
}

export default FormCadCom3;