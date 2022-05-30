import React from "react";
import {
  Link
} from "react-router-dom";

const Nav = () => {

    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
              <Link className="nav-link" to="/add-car">Ajouter une voiture</Link>
              <Link className="nav-link "  to="/login">Connexion</Link>
              <Link className="nav-link" to="/register">Inscription</Link>
            </div>
          </div>
        </div>
      </nav>
    )
}

export default Nav;