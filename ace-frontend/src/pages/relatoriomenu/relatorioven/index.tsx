import React, { ReactNode, useState } from 'react';
import Header from '../../../components/header/index'
import { api } from '../../../service/api';
import './styles.css'


const RelatorioVen: React.FC = () => {
    
    interface Parcela{
        id: number,
	    idCliente: number,
        nomeCliente: string,
	    numeroParcela: number,
	    dataVencimento: ReactNode,
	    dataPagamento: ReactNode,
	    dataCredito: ReactNode,
	    valorParcela: number,
	    valorPago: number
    }
    
    const [dataInicio, setDataInicio] = useState("")
    const [dataFinal, setDataFinal] = useState("")
    
    //listaParcela é uma lista de objetos
    //cada objeto da listaParcela é uma parcela buscada
    const [listaParcela, setListaParcela] = useState([])

    function fazerBusca(e: React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()

        api.get(`/Parcela/buscarParcelas/vencimento/${dataInicio}/${dataFinal}`)
        .then(response => {
            const resposta = response.data
            console.log(resposta)
            setListaParcela(resposta)
        })
    }

    
    return (
        <>
            <Header />
            <div className="bgboxVen" >
                <h1> Relatório de Vencimento: </h1>
            </div>

            <div className="boxDate">
                <div className='row'>
                    <span>Data de Início: </span>
                    <input type="date" onChange={(e) => setDataInicio(e.target.value)}/>
                </div>
                <div className='row'>
                    <span>Data de Término: </span>
                    <input type="date" onChange={(e) => setDataFinal(e.target.value)}/>
                </div>

                <button onClick={fazerBusca}>Buscar</button>
            </div>

            <div className='CenterDetails'>
                <div className="DetailsDate">
                    <details>
                        <summary> Nome do Cliente </summary>
                        <p>informações do clientinho</p>
                    </details>
                    <details>
                        <summary> Nome do Cliente </summary>
                        <p>informações do clientinho2</p>
                    </details>
                    <details>
                        <summary> Nome do Cliente </summary>
                        <p>informações do clientinho3</p>
                    </details>
                </div>
            </div>
        </>
    );
}

export default RelatorioVen;