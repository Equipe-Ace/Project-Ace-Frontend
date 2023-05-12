import React from 'react';
import './styles.css'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios"
import editPen from "../../img/EditPencil.svg"
import next from "../../img/NextBt.svg"
import back from "../../img/BackBt.svg"
import { count } from 'console';
import Modal from '../modalCliente/modal';
import card from '../../img/Real sign.svg'


const ITEMS_PER_PAGE = 4;

const userToken =localStorage.getItem("token")

const SelectCli: React.FC = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/Cliente',
        {
            headers: {
                Authorization: `Bearer ${userToken}` 
            }
        }).then((Response) => { setLista(Response.data) })

    }, [])
    const [Lista, setLista] = useState([])
    const Listastr = JSON.stringify(Lista)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [totalRowCount, setTotalRowCount] = useState(ListaJson.length);
    const [id, setId] = useState(Number);
    const [nome, setNome] = useState(String);
    const [CPF, setCpf] = useState(String);
    const [Cliente, setCliente] = useState('');
    const [TotalParcelas, setTotalParcelas] = useState(Number);
    const [ParcelasPagas, setParcelasPagas] = useState(0);
    const [ParcelasPendentes,setParcelasPendentes] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [todasParcelas, setTodasParcelas] = useState(false);
    const [valorParcela, setValorParcela] = useState(0);
    const [valorServio, setValorServico] = useState(0);
    



    const Parcelas = (objParcelas: Array<any>) => {
        const newArray = objParcelas.reduce((acc, item) => {
            if (item.dataPagamento != null) {
              acc.pagos += 1;
            } else {
              acc.pendentes += 1;
            }
            return acc;
          }, { pagos: 0, pendentes: 0 });
          
        console.log(newArray);
        setParcelasPendentes(newArray['pendentes'])
        setParcelasPagas(newArray['pagos'])
    };



    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  


    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(event.target.value);
      };

    const handleNextPageClick = () => {
        if (page >= (ListaJson.length/4-1) ) {
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

    const startIndex = page * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    let counter = 0;

        

    function handleClick(id: any) {
        navigate(`/ControleTitulosFIN2/${id}`);
      }
    
      function handleEditClick(id: number) {
        return () => handleClick(id);
      }

    return (
        <>

                <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                    <div className='alignRight'>
                        <a className='button-close' onClick={handleCloseModal}>X</a>
                    </div>
                    <tr><td>Cpf</td> <td>{CPF}</td></tr>
                    <tr><td>Nome</td> <td>{nome}</td></tr>
                    <tr><td>Id</td> <td>{id}</td></tr>
                    <tr><td>Total de Parcelas</td> <td>{TotalParcelas}</td></tr>
                    <tr><td>Valor das Parcelas</td><td>R$:{valorParcela.toFixed(2)}</td></tr>
                    <tr><td>Parcelas Pendentes</td><td>{ParcelasPendentes}</td></tr>
                    <tr><td>Parcelas Pagas</td><td>{ParcelasPagas}</td></tr>
                    <tr><td>Valor Total</td><td>R$:{valorServio.toFixed(2)}</td></tr>
                </Modal>

            <div className="bgSelect" >
                <h1> Clientes Cadastrados </h1>
            </div>

            <div className='mybg'>
                <div className="inputBox">
                    <input type="text" placeholder='⌕ pesquisar: ' onChange={(e) => { setPesquisa(e.target.value); resetPage() }} />
                </div>

                <div className="boxSelect">
                    { <tbody>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>CPF</th>
                                <th>Valor do serviço</th>
                                <th>Pagamento</th>
                                <th></th>
                            </tr>
                        </thead>    
                                    
                        {ListaJson.filter((item: { nome: string; }) => {
                            if (Pesquisa === "") {
                                return item
                            }
                            else if (item.nome.toLocaleLowerCase().includes(Pesquisa.toLocaleLowerCase())) {
                                return item
                            }
                        }).slice(startIndex, endIndex)
                        .map((item: { id: number, nome: string, cpf: string, servico: any}, id: number) => {
                            counter++
                            return (
                                item?
                                (
                                <tr key={id}>
                                    <td>{item.nome}</td>  
                                    <td>{item.cpf}</td>
                                    <td>R$:{item.servico["preco"].toFixed(2)}</td>
                                    <td className='button-1' onClick={handleEditClick(item.id)}><img src={card} alt="botão de edição"  /> </td>
                                    <td className='button-1' onClick={() => {

                                            setId(item.id);
                                            setCpf(item.cpf)
                                            setNome(item.nome)
                                            setTotalParcelas(item.servico["parcelas"].length)
                                            Parcelas(item.servico["parcelas"]);
                                            setValorParcela(item.servico["parcelas"][1]['valorParcela'])
                                            setValorServico(item.servico['preco'])
                                            handleOpenModal();
                                        }}>
                                        <img src={editPen} />
                                    </td> 
                                </tr>
                                )
                                :
                                (
                                <></>
                                )
                            )
                        })}
                                <td colSpan={4}>
                                <div className='arruma'>
                                    <a className='button-1'> <img src={back} alt="botão de edição" onClick={handlePrevPageClick}/></a>
                                    {page+1}
                                    <a className='button-1'> <img src={next} alt="botão de edição"  onClick={handleNextPageClick} /></a>
                                </div>
                            </td>
                    </tbody> } 
                </div>
            </div>
        </>
    );
}

export default SelectCli;