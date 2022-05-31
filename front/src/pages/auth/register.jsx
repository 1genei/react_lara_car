import Nav from '../layouts/nav'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

function Register() {

  const navigate = useNavigate();
  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const newUser = {
      name : e.target.name.value,
      email : e.target.email.value,
      password : e.target.password.value    
    };
    
    axios.post('http://127.0.0.1:8000/api/register', newUser).then( (res) => {
    
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
                <legend>Inscription</legend>
                <span id='message' className='text-danger'> </span>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Nom de famille</label>
                <input type="text" id="resgisterName" className="form-control" name="name" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Adresse mail</label>
                <input type="text" id="registerMail" className="form-control" name="email" required/>
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Mot de passe</label>
                <input type="password" autoComplete="on" id="registerPassword" className="form-control" name="password" required/>
                <button type="submit" className="btn btn-primary btn-lg mt-3 mb-3">S'inscrire</button>
                </div>
            </fieldset>
          </form>
        </div>
      </div>
  </div>
  );
}

export default Register;
