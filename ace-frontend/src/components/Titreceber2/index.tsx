import React from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { FaSearch } from 'react-icons/fa';
import BotaoAC from '../botaoAC';
import { Link } from 'react-router-dom';

interface ParcelaInfo{
     parcela: {
        idCliente: number,
	    numeroParcela?: number,
	    dataVencimento?: Date,
	    dataPagamento?: Date,
	    dataCredito?: Date,
	    valorParcela: number,
	    valorPago: number
    }
}
const TitReceber2 = ({
    parcela
}: ParcelaInfo) => {
    return (
        <>

            <div className="bgTRAFIN2" >
                <h1> Gerenciamento de Títulos </h1>
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='⌕ pesquisar: ' value={parcela.idCliente} />
                    <span>Usuário</span>
                </div>
                
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='parcela - 0 ' value={parcela.numeroParcela + "°"}/>
                    <span>Próxima Parcela</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input type="date" value={parcela.dataVencimento?.toString()}/>
                    <span>Data de Vencimento</span>
                </div>
                <div className="inputBoxTRAFIN2">
                    <input type="text" placeholder='R$: 00,00' value={parcela.valorParcela}/>
                    <span>Valor a Pagar</span>
                </div>
                <BotaoAC />
                
                <Link to={`/ControleTitulosFIN3/${parcela.idCliente}`}>
                    <BotaoAvancar />
                </Link>
            </div>

        </>
    );
}

export default TitReceber2;