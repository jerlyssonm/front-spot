import "./index.css"


export function Header(){
    return(
        <header className="header-box">
            <div className="header-content">
                <div className="logo">
                    <p>Logo</p>
                </div>
                <nav className="navigate">
                    <a href="/">INICIO</a>
                    <a href="/pontos/novo">CADASTRAR NOVO PONTO</a>
                </nav>
            </div>
        </header>
    )
}