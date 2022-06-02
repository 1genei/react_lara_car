import Nav from '../layouts/nav'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {useEffect} from 'react';
import { useSelector } from 'react-redux';

function Register() {

  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const auth  = useSelector( (state) =>state.auth);
  
  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const newUser = {
      name : e.target.name.value,
      email : e.target.email.value,
      password : e.target.password.value    
    };
    const userLogin = {
      email : e.target.email.value,
      password : e.target.password.value  
    }
    
    axios.post('http://127.0.0.1:8000/api/register', newUser).then( (res) => {
    
      if(res.data.status === 400){
        document.getElementById('error_name').innerText = res.data.error.name ? res.data.error.name : ""   
        document.getElementById('error_email').innerText = res.data.error.email ? res.data.error.email : ""   
        document.getElementById('error_password').innerText = res.data.error.password ? res.data.error.password : ""   
      }
    
      if(res.data.status === 200){
        document.getElementById('message').innerText = res.data.message
        axios.post('http://127.0.0.1:8000/api/login', userLogin).then( (res) => {
          const userPayload = res.data.user;
          const tokenPayload = res.data.token;
          dispatch({
            type: "auth/login",
            payload: {userPayload, tokenPayload}
          })
        })
        navigate('/')
      }
    })
  }
  
  useEffect( () => {
    if (auth.user) {
      navigate('/')
    }    
  }, []);
  
  return (
    <div className="container mt-5" >
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'center'}}>
            <fieldset >
                <legend>Inscription</legend>
                <span id='message' className='text-danger'> </span>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Nom d'utilisateur</label>
                <input type="text" id="registerName" className="form-control" name="name" />
                <span className='text-danger' id='error_name'> </span>
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Adresse mail</label>
                <input type="text" id="registerMail" className="form-control" name="email" />
                <span className='text-danger' id='error_email'> </span>
                
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Mot de passe</label>
                <input type="password" autoComplete="on" id="registerPassword" className="form-control" name="password" />
                <span className='text-danger' id='error_password'> </span>
                </div>
                <button type="submit" className="btn btn-primary btn-lg mt-3 mb-3">S'inscrire</button>
            </fieldset>
          </form>
        </div>
      </div>
  </div>
  );
}

export default Register;
