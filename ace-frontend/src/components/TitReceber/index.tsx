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


const ITEMS_PER_PAGE = 5;

const SelectCli: React.FC = () => {
    useEffect(() => {
        axios.get('http://localhost:8080/Cliente').then((Response) => { setLista(Response.data) })

    }, [])
    const [Lista, setLista] = useState([])
    const Listastr = JSON.stringify(Lista)
    const ListaJson = JSON.parse(Listastr);
    const [Pesquisa, setPesquisa] = useState("")
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [totalRowCount, setTotalRowCount] = useState(ListaJson.length);
    

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPesquisa(event.target.value);
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
                                    <td>{item.servico["preco"]}</td>
                                    <td className='button-1' onClick={handleEditClick(item.id)}><img src={editPen} alt="botão de edição"  /> </td>   
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