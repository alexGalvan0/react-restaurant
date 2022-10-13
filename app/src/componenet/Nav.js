function Nav(){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://google.com"><img src="https://cdn.worldvectorlogo.com/logos/friendly-s-restaurant.svg"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="https://google.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="https://google.com">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://google.com">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="https://google.com">Pricing</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled">Disabled</a>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}
export default Nav