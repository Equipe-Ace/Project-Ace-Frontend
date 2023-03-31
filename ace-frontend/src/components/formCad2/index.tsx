import React, {useState} from 'react';
import './styles.css'
import BotaoAvancar from '../botaoAvan';
import { Link } from 'react-router-dom';

const FormCadCom2: React.FC = () => {    const [DadosUsuario, setDadosUsuario] = useState({
    nome:'',
    telefone:'',
    cpf:'',
    cep:'',
    rua:'',
    bairro:'',
    numero:'',
    complemento:'',
    cidade:'',
    uf:'',
});




const CadastroUsuario = {"nome":DadosUsuario.nome,"telefone":DadosUsuario.telefone,"cpf":DadosUsuario.cpf,"endereco":{"cep":DadosUsuario.cep,"rua":DadosUsuario.rua,"bairro":DadosUsuario.bairro,"numero":DadosUsuario.numero,"complemento":DadosUsuario.complemento,"cidade":DadosUsuario.cidade,"uf":DadosUsuario.uf},"servicos":[{"parcelas":[{"numeroParcelas":null,"dataVencimento":null,"dataPagamento":null,"dataCredito":null,"valorParcela":50.0,"valorPago":null}],"preco":500.0}]}

const handleChange =(e: { target: { name: any; value: any; }; })=>{
    const name = e.target.name;
    const value = e.target.value;
    setDadosUsuario((prev)=> {
        return{...prev,[name]:value}
    })
    console.log(DadosUsuario)
};


const handleSubimit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    fetch('http://localhost:8080/Cliente/inserir',{
        method: 'POST',
        headers: { "Content-Type":"application/json"},
        body: JSON.stringify(CadastroUsuario)
    }).then(() =>{
        console.log(CadastroUsuario.nome);
    })
    
}
    return (
        <>
         <h1> Cadastro de Cliente</h1>
            <div className="bg" >
                <div className="coluna">
                    <div className="inputBoxCADCLI">
                        <input type="text" name='nome' onChange={handleChange}/>
                        <span>Nome</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='telefone' onChange={handleChange}/>
                        <span>telefone</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cpf' onChange={handleChange}/>
                        <span>CPF</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cep' onChange={handleChange}/>
                        <span>CEP</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='rua' onChange={handleChange}/>
                        <span>Rua</span>
                    </div>
                </div>
                <div className='coluna2'>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='bairro' onChange={handleChange}/>
                        <span>Bairro</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='numero' onChange={handleChange}/>
                        <span>numero</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='complemento' onChange={handleChange}/>
                        <span>Complemento</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cidade' onChange={handleChange}/>
                        <span>Cidade</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='uf' onChange={handleChange}/>
                        <span>Estado</span>
                    </div>
                </div>
            </div>
           <div className='botaoA' onClick={handleSubimit }>
           {/* <Link to="/cadastroCLI2"> 
                <BotaoAvancar />
            </Link> */}
                <div className="containerbuttonAVC">
                    <button className="btn btn1" onClick={handleSubimit}> Cadastrar ▸</button>
                    </div>
                </div>
            
        </>
    );
}

export default FormCadCom2;