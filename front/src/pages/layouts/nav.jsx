import React from "react";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const Nav = () => {

  const navigate = useNavigate();
  const auth  = useSelector( (state) =>state.auth);
  const dispatch  = useDispatch();

  const handleLogout = () =>{
    dispatch({
      type: "auth/logout"
    })
    navigate('/')
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link active" aria-current="page" to="/">Accueil</Link>
            {auth.user ? <Link className="nav-link" to="/add-car">Ajouter une voiture</Link> : ""}
            {auth.user ? "" : <Link className="nav-link"  to="/login">Connexion</Link>}
            {auth.user ? "" : <Link className="nav-link" to="/register">Inscription</Link>}
            {auth.user ? <button type="button" onClick={handleLogout} className="btn btn-secondary btn-sm"> Déconnexion</button> : ""}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav;