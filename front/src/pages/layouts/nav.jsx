import React from "react";

const Nav = () => {

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <a className="nav-link active" aria-current="page" href="#">Accueil</a>
                  <a className="nav-link" href="#">Ajouter une voiture</a>
                  <a className="nav-link "  href="#">Connexion</a>
                  <a className="nav-link" href="#">Inscription</a>
                </div>
              </div>
            </div>
        </nav>
    )
}

export default Nav;