import Logo from'../../assets/logo.png';
import './style.css'

function Navbar(){
    return <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light ps-3 pe-3">
    <div className="container-fluid">
            <a className="navbar-brand" href="#"><img className="mt-1" src={Logo} /></a>
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <div className="ms-auto me-auto mt-1">
                    <div className="input-group">
                        <input type="search" class="form-control" placeholder="Procurar Restaurante..." aria-label="Search"/>
                        <button className="btn btn-danger" type="button" id="button-addon2"><i className="fas fa-search"></i> Buscar</button>
                    </div>
                </div>

               <div className="mt-1">
               <button className="btn btn-outline-danger me-3"><i className="fas fa-map-marker-alt"></i> Entrega: Rio de Janeiro</button>
              {
               //<button className="btn btn-outline-danger me-3"><i className="fas fa-sign-in-alt"></i> Acessar</button>
              }

                <div className="btn-group">     
                        <button type="button" className="btn btn-outline-danger me-3 dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-user"></i>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a href="/pedidos" className="dropdown-item">Pedidos</a></li>
                            <li><a href="/favoritos" className="dropdown-item">Favoritos</a></li>
                            <li><a href="/perfil" className="dropdown-item">Perfil</a></li>
                            <li><a href="/enderecos" className="dropdown-item">Meus Endereços</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a  href="/"  className="dropdown-item">Sair</a></li>
                        </ul>
                </div>


                </div>

            </div>    
        </div>
    </nav>
}
export default Navbar;