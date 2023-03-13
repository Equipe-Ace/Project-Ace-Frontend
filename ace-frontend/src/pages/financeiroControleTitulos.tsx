import "../styles/pages/financeiroControleTitulos.css"

export function ControleTitulos(){
    return (
        <div className="container">
            <section>
                <label>
                    <h1 className="tituloPagina">
                        Controle de Títulos a Receber
                    </h1>
                </label>
            </section>
            
            <form className="procurarCliente">
                <div>
                    <input className="inputPegarCliente" placeholder="Digite o nome do cliente"></input>
                </div>

                <div>
                    <button className="botaoGerenciarTitulos">
                        Gerenciar títulos
                    </button>
                </div>
            </form>
        </div>
    )
}