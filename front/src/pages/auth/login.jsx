import Nav from '../layouts/nav'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function Login() {

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const car = {
      marque : e.target.marque.value ,
      modele : e.target.modele.value,
      type : e.target.type.value,
      kilometrage : e.target.kilometrage.value
    };
    
    axios.post('http://127.0.0.1:8000/api/car', car).then( (res) => {
    
      if(res.data.status === 200){
        document.getElementById('message').innerText = res.data.message  }
        navigate('/')
    })
    
    

  }

  return (
    <div className="container mt-5" >
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Connexion</legend>
                <span id='message' className='text-danger'> </span>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Adresse mail</label>
                <input type="text" id="loginMail" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Mot de passe</label>
                <input type="password" autoComplete="on" id="loginPassword" className="form-control" name="password" required/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-3 mb-3">Se connecter</button>
            </fieldset>
          </form>
        </div>
      </div>
  </div>
  );
}

export default Login;
