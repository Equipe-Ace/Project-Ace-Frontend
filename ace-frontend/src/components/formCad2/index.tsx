import React, {useState} from 'react';
import './styles.css'
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import { useHistory } from "react-router-dom";






const FormCadCom2: React.FC = () => {    /*const [DadosUsuario, setDadosUsuario] = useState({
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
*/

const [nome, setNome] = useState("")
const [telefone, setTelefone] = useState("")
const [cpf, setCpf] = useState("")
const [cep, setCep] = useState("")
const [rua, setRua] = useState("")
const [bairro, setBairro] = useState("")
const [numero, setNumero] = useState(0)
const [complemento, setComplemento] = useState("")
const [cidade, setCidade] = useState("")
const [uf, setUf] = useState("")
const [preco, setPreco] = useState(0)

const userCadastrado = {
    nome: nome,
    cpf: cpf,
    telefone: telefone,
    endereco: {
        cep:cep, 
        rua: rua,
        bairro:bairro,
        cidade: cidade,
        numero: numero,
        complemento: complemento,
        uf:uf
    },
    servico: {
     preco: preco,
     parcelas: [{}]
    }
 }

//const CadastroUsuario = {"nome":DadosUsuario.nome,"telefone":DadosUsuario.telefone,"cpf":DadosUsuario.cpf,"endereco":{"cep":DadosUsuario.cep,"rua":DadosUsuario.rua,"bairro":DadosUsuario.bairro,"numero":DadosUsuario.numero,"complemento":DadosUsuario.complemento,"cidade":DadosUsuario.cidade,"uf":DadosUsuario.uf},"servicos":[{"parcelas":[{"numeroParcelas":null,"dataVencimento":null,"dataPagamento":null,"dataCredito":null,"valorParcela":50.0,"valorPago":null}],"preco":500.0}]}

/*const handleChange =(e: { target: { name: any; value: any; }; })=>{
    const name = e.target.name;
    const value = e.target.value;
    setDadosUsuario((prev)=> {
        return{...prev,[name]:value}
    })
    console.log(DadosUsuario)
};
*/

const urlPost = "http://localhost:8080/Cliente/inserir"
const handleSubimit = (e: { preventDefault: () => void; })=>{
    e.preventDefault();
    
    axios.post(urlPost, userCadastrado).then((response) => {
        console.log(response) 
        alert("Usuário cadastrado com sucesso!")
        navigate("/ControleTitulosFIN")})
        .catch(error => console.log(error))
        
    }

    const navigate = useNavigate();
   
return (
        <>
         <h1> Cadastro de Cliente</h1>
            <div className="bg" >
                <div className="coluna">
                    <div className="inputBoxCADCLI">
                        <input type="text" name='nome' onChange={(e) => setNome(e.target.value)}/>
                        <span>Nome</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='telefone' onChange={(e) => setTelefone(e.target.value)}/>
                        <span>telefone</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cpf' onChange={(e) => setCpf(e.target.value)}/>
                        <span>CPF</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cep' onChange={(e) => setCep(e.target.value)}/>
                        <span>CEP</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='rua' onChange={(e) => setRua(e.target.value)}/>
                        <span>Rua</span>
                    </div>
                </div>
                <div className='coluna2'>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='bairro' onChange={(e) => setBairro(e.target.value)}/>
                        <span>Bairro</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="number" name='numero' onChange={(e) => setNumero(parseInt(e.target.value))}/>
                        <span>numero</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='complemento' onChange={(e) => setComplemento(e.target.value)}/>
                        <span>Complemento</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='cidade' onChange={(e) => setCidade(e.target.value)}/>
                        <span>Cidade</span>
                    </div>
                    <div className="inputBoxCADCLI">
                        <input type="text" name='uf' onChange={(e) => setUf(e.target.value)}/>
                        <span>Estado</span>
                    </div>
                </div>
                
            </div>
            <div className="coluna3">
                <div className="inputBoxCADCLI">
                    <input type="number" placeholder='R$: 00,00' onChange={(e) => setPreco(parseInt(e.target.value, 10))}/>
                    <span>valor serviço:</span>
                 </div>
            </div>
           <div className='botaoA'>
            
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