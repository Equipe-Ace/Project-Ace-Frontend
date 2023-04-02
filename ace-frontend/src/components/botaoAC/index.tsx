import React from 'react';
import './styles.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const BotaoAC= ({
    onClick
}: ButtonProps) =>{
    return(
        <>
            <div className="containerbuttonAVC">
                <button className="btn btn1" onClick={onClick}> Alterar Cliente ▸</button>
            </div>
        </>
    );
}

export default BotaoAC;