import React, { ReactNode, useState } from 'react';
import Header from '../../../components/header/index'
import { api } from '../../../service/api';
import './styles.css'
import editPen from "../../../img/EditPencil.svg"
import next from "../../../img/NextBt.svg"
import back from "../../../img/BackBt.svg"
import { useNavigate } from 'react-router-dom';
import Dados from '../../../components/dadosRelatorio'




const RelatorioPag: React.FC = () => {

    
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
    const [listaParcela, setListaParcela] = useState([])
    const Listastr = JSON.stringify(listaParcela)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const [page, setPage] = useState(0);
    const [selectedOption, setSelectedOption] = useState('credito');
    const [tipodata,setTipodata] = useState('Crédito');
    const [formatedTipoData, setFormatedTipoData]= useState('Crédito')
    const navigate = useNavigate();


    const ITEMS_PER_PAGE = 5;
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counterr = 0;

    const userToken = localStorage.getItem("token")

    const handleNextPageClick = () => {
        if (page >= (ListaJson.length/5-1) ) {
            alert("Não há mais clientes!")
          }
        else{
            setPage(page + 1);      
        }
        
    };
    const resetPage = () => {
        setPage(0)
    }

    const handlePrevPageClick = () => {
        if (page > 0) {
            setPage(page - 1);
          }
        else{
            alert("A página já está no começo")
        }
        
    };

    function handleEditClick(id: number) {
        return () => handleClick(id);
    }

    function handleClick(id: any) {
    navigate(`/ControleTitulosFIN2/${id}`);
    }

    function handleChangeOption(event: any) {
    setSelectedOption(event.target.value);
    }

    function fazerBusca(){
        setTipodata(selectedOption)
        const ConvDataIni = new Date(dataInicio)
        const ConvDataFin = new Date(dataFinal)


        if (ConvDataFin<ConvDataIni){
                alert(' \nErro: Filtro invalido!\nData final deve ser maior que a inicial.')
        }   

        else{
            setPage(0)
        
            api.get(`/Parcela/buscarParcelas/${selectedOption}/${dataInicio}/${dataFinal}`,
            {
                headers: {
                    Authorization: `Bearer ${userToken}` 
                }
            })
            .then(response => {
                const resposta = response.data
                console.log(resposta)
                setListaParcela(resposta)
            })
        }
    }
    
    let paginaRetornada = null;
    const userPermissao = localStorage.getItem("role")

    const pagina = 
        <>
            <Header />
            <div className='allthings1'>
            <div className="bgboxCre" >
                <h1> Relatório Geral: </h1>
            </div>

            <div className="boxFiltro">
                <div className='filtroRow'>
                    <span>Filtro: </span>
                    <select value={selectedOption} onChange={handleChangeOption} className='btn btn1'>          
                            <option value="vencimento">Vencimento</option>
                            <option value="pagamento">Pagamento</option>
                            <option value="credito">Crédito</option>
                    </select>
                </div>
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
            </div>  



            <div className='caixaDasParcelas'>
            <div className='boxSelect'>
            { <tbody>
                        <thead>
                            <tr>
                                <th>Nome do Cliente</th>
                                <th>Data de {tipodata.charAt(0).toUpperCase() +tipodata.slice(1)}</th>
                                <th>Valor da parcela</th>
                                <th>Valor pago</th>
                            </tr>
                        </thead>    
                                    
                        {ListaJson.filter((parcela: {nomeCliente : string}) => {
                            if (Pesquisa === "") {
                                return parcela.nomeCliente
                            }
                            else if (parcela.nomeCliente.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())) {
                                return parcela.nomeCliente
                            }
                        }).slice(startIndex, endIndex)
                        .map((parcela: Parcela, index: number) => {
                            counterr++
                            if(tipodata==='vencimento'){
                            return (                
                                <tr key={index}>
                                    <td>{parcela.nomeCliente}</td>  
                                    <td>{parcela.dataVencimento}</td>
                                    <td>{parcela.valorParcela}</td>
                                    <td>{parcela.valorPago}</td>

                                </tr>                               
                            )}
                            if(tipodata==="pagamento"){
                                return(                   
                                    <tr key={index}>
                                        <td>{parcela.nomeCliente}</td>  
                                        <td>{parcela.dataPagamento}</td>
                                        <td>{parcela.valorParcela}</td>
                                        <td>{parcela.valorPago}</td>
                                        
                                    </tr>                                       
                                )
                            }
                            if(tipodata==="credito"){
                                return(                                  
                                    <tr key={index}>
                                        <td>{parcela.nomeCliente}</td>  
                                        <td>{parcela.dataCredito}</td>
                                        <td>{parcela.valorParcela}</td>
                                        <td>{parcela.valorPago}</td>
  
                                    </tr>                                        
                                )
                            }


                        })}
                                
                                <div className='arruma'>
                                    <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick}/></a>
                                    {page+1}
                                    <a className='button-1'> <img src={next} alt="botão de edição"  onClick={handleNextPageClick} /></a>
                                </div>

                            <Dados></Dados>
                    </tbody> } 
                    
            </div>
            
            </div>
            <div className='btn-1-center'>
            <button className='btn btn1 btn-1-center' onClick={fazerBusca}>Buscar</button></div>
            </div>
        </>

    const paginaVazia = <></>
    
    if(userPermissao === "ADMIN" || userPermissao === "FINANCEIRO"){
        paginaRetornada = pagina;
    }else{
        paginaRetornada = paginaVazia;
    }
    return (
        paginaRetornada
    );
}

export default RelatorioPag;