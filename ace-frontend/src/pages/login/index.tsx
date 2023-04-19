import React from 'react';
import Logo from '../../img/logo.png'
import './styles.css'
import { Link } from 'react-router-dom';

const LoginADM: React.FC = () => {
    return (
        <>
            <form action="">
                <div className="container">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className="titulo">
                        <h1>Bem Vindo!</h1>
                        <p>Entre na sua conta:</p>
                    </div>

                    <div className="inputs">
                        <input type="text" placeholder="digite seu login..." />
                        <input type="password" placeholder="digite sua senha..." />
                    </div>
                    <Link to="/cadastrocli">
                        <button className="Botao"> <p> Entrar </p></button>
                    </Link>
                </div>
            </form>
        </>
    );
}

export default LoginADM;