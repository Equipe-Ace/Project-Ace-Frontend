import React, { ReactNode, useEffect, useState } from 'react';
import Header from '../../../components/header/index'
import { api } from '../../../service/api';
import './styles.css'
import editPen from "../../../img/EditPencil.svg"
import next from "../../../img/NextBt.svg"
import back from "../../../img/BackBt.svg"
import { useNavigate } from 'react-router-dom';
import Dados from '../../../components/dadosRelatorio'
import a_z from "../../../img/a-z.svg"
import z_a from "../../../img/z-a.svg"
import { ReactElement } from 'react-imask/dist/mixin';




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
	    valorPago: number,
        statusVencida: string
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
    const [formatedTipoData, setFormatedTipoData]= useState('Crédito');
    const [sort, setSort] = useState<'a-z' | 'z-a'>('a-z');
    const [imageSrc, setImageSrc] = useState(a_z);
    const navigate = useNavigate();



    const ITEMS_PER_PAGE = 5;
    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counterr = 0;

    const userToken = localStorage.getItem("token")

    const handleSort = () => {
        
        setSort(sort === 'a-z' ? 'z-a' : 'a-z');

        if (imageSrc === a_z) {
          setImageSrc(z_a);
        } else {
          setImageSrc(a_z);
        }
        console.log('a')
      };

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

    const [coluna2, setColuna2] = useState("dados1")
    const [coluna3, setColuna3] = useState("dados2")
    const [coluna4, setColuna4] = useState("dados3")
    const [coluna5, setColuna5] = useState("dados4")
    
 
    function fazerBusca(){
        setTipodata(selectedOption)
        const ConvDataIni = new Date(dataInicio)
        const ConvDataFin = new Date(dataFinal)
        
        if(tipodata === "vencer"){
            setColuna2("Data de Vencimento")
            setColuna3("Valor da parcela")
            setColuna4("Valor tal")
            setColuna5("Status")
        }
        if(tipodata === "paga"){
            setColuna2("Data de Pagamento")
            setColuna3("Data de Vencimento")
            setColuna4("Valor Parcela")
            setColuna5("Status")
        }
        if(tipodata === "creditada"){
            setColuna2("Data de Pagamento")
            setColuna3("Data de Crédito")
            setColuna4("Valor Pago")
            setColuna5("Status")
        }
        if(tipodata === "atraso"){
            setColuna2("Data de Vencimento")
            setColuna3("Data de Pagamento")
            setColuna4("Valor da Parcela")
            setColuna5("Status")
        }
        console.log(`/Parcela/buscarParcelas/${selectedOption}/${dataInicio}/${dataFinal}`)
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

    const sortedList = ListaJson
                .filter((parcela: {nomeCliente: string}) => {
                    if (Pesquisa === "") {
                    return parcela.nomeCliente;
                    } else if (parcela.nomeCliente.toLowerCase().includes(Pesquisa.toLowerCase())) {
                    return parcela.nomeCliente;
                    }
                })
                .sort((a: Parcela, b: Parcela) => {
                    if (sort === 'a-z') {
                    return a.nomeCliente.localeCompare(b.nomeCliente);
                    } else {
                    return b.nomeCliente.localeCompare(a.nomeCliente);
                    }
                });

const slicedData = sortedList.slice(startIndex, endIndex);

function toBrDate(date:Date){
    var formattedDate = new Date(date).toLocaleDateString('pt-BR');
    return formattedDate
  }

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
                            <option value="vencer">A vencer</option>
                            <option value="paga">Pagas</option>
                            <option value="creditada">Creditadas</option>
                            <option value="atraso">Em atraso</option>

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
                                <th>Nome do cliente</th>
                                <th>{coluna2}</th>
                                <th>{coluna3}</th>
                                <th>{coluna4}</th>
                                <th>{coluna5}</th>
                            </tr>
                            {/* <tr>
                                <th>Nome do Cliente</th>
                                <th>Data de {tipodata.charAt(0).toUpperCase() +tipodata.slice(1)}</th>
                                <th>Valor da parcela</th>
                                <th>Valor pago</th>
                            </tr> */}
                        </thead>    
                                    
                    {slicedData.
                        map((parcela: any, index: number) => {
                            counterr++
                            if(tipodata==='vencer'){
                            return (                
                                <tr key={index}>
                                    <td>{parcela.nomeCliente}</td>  
                                    <td>{toBrDate(parcela.dataVencimento)}</td>
                                    <td>R$:{parcela.valorParcela.toFixed(2)}</td>
                                    <td>{parcela.valorPago}</td>
                                    <td>{parcela.statusVencida}</td>


                                </tr>                               
                            )}
                            if(tipodata==="paga"){
                                return(                   
                                    <tr key={index}>
                                        <td>{parcela.nomeCliente}</td>  
                                        <td>{toBrDate(parcela.dataPagamento)}</td>
                                        <td>{toBrDate(parcela.dataVencimento)}</td>
                                        <td>R$:{parcela.valorParcela.toFixed(2)}</td>
                                        <td>{parcela.statusVencida}</td>
                                        
                                    </tr>                                       
                                )
                            }
                            if(tipodata==="creditada"){
                                return(                                  
                                    <tr key={index}>
                                        <td>{parcela.nomeCliente}</td>  
                                        <td>{toBrDate(parcela.dataPagamento)}</td>
                                        <td>{toBrDate(parcela.dataCredito)}</td>
                                        <td>R$:{parcela.valorPago.toFixed(2)}</td>
                                        <td>{parcela.statusVencida}</td>
                                    </tr>                                        
                                )
                            }
                            if(tipodata==="atraso"){
                                return(                                  
                                    <tr key={index}>
                                        <td>{parcela.nomeCliente}</td>  
                                        <td>{toBrDate(parcela.dataVencimento)}</td>
                                        <td>{toBrDate(parcela.dataPagamento)}</td>
                                        <td>R$:{parcela.valorPago.toFixed(2)}</td>
                                        <td>{parcela.statusVencida}</td>
                                       
  
                                    </tr>                                        
                                )
                            }


                        })}
                                
                                <div className='arruma'>
                                    <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick}/></a>
                                    {page+1}
                                    <a className='button-1'> <img src={next} alt="botão de edição"  onClick={handleNextPageClick} /></a>
                                </div>

                            <div className='arruma'>  
                                <img src={imageSrc} alt="Ordem"  onClick={handleSort} className=' sortBtn '/>
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