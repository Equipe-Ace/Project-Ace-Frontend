import React, { useState } from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { FaSearch } from 'react-icons/fa';
import BotaoPAG from '../botaoPAG';
import { api } from '../../service/api';


interface ParcelaInfo{
    parcela: {
        id: string,
        idCliente: number,
        numeroParcela?: number,
        dataVencimento?: Date,
        dataPagamento?: Date,
        dataCredito?: Date,
        valorParcela: number,
        valorPago: number
   }
}



const TitReceber3= ({
    parcela
}: ParcelaInfo) => {

    const [dataPagamentoParcela, setDataPagamentoParcela] = useState(Date)
    const [dataCreditoParcela, setDataCreditoParcela] = useState(Date)
    const [valorPagoParcela, setValorPagoParcela] = useState(Number)

    const parcelaAtualizada = {
        id: parcela.id,
        idCliente:parcela.idCliente ,
        numeroParcela : parcela.numeroParcela,
        dataVencimento : parcela.dataVencimento,
        dataPagamento : dataPagamentoParcela,
        dataCredito : dataCreditoParcela,
        valorParcela : parcela.valorParcela,
        valorPago : valorPagoParcela
    }

    function handleFunction(e:React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault()
        api.put("/Parcela/atualizarParcela", parcelaAtualizada)
        .then(response => {
            const resposta = response.data
            console.log(resposta)
            if(resposta){
                alert("Parcela alterada com sucesso!");  
            }else{
                alert("Parcela não encontrada")
            }
        }).catch(error => console.log(error))    
    }

    
    return (
        <>

            <div className="bgTRAFIN3" >
                <h1> Pagamento </h1>
                
                <div className="inputBoxTRAFIN3">
                    <input type="date" onChange={(e) => setDataPagamentoParcela(e.target.value)} />
                    <span>Data de Pagamento</span>
                </div>
                <div className="inputBoxTRAFIN3">
                    <input type="date" onChange={(e) => setDataCreditoParcela(e.target.value)}/>
                    <span>Data de Crédito</span>
                </div>
                <div className="inputBoxTRAFIN3">
                    <input type="number" placeholder='R$: 00,00' onChange={(e) => setValorPagoParcela(parseInt(e.target.value, 10))} />
                    <span>Valor a Receber</span>
                </div>
                <BotaoPAG  onClick={(e) =>handleFunction(e)} />
                
            </div>

        </>
    );
}

export default TitReceber3;