import Nav from '../layouts/nav'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {useEffect} from 'react';
import { useSelector } from 'react-redux';


function Login() {

  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const auth  = useSelector( (state) =>state.auth);
  
  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const user = {
      email : e.target.email.value ,
      password : e.target.password.value
    };
    
    axios.post('http://127.0.0.1:8000/api/login', user).then( (res) => {
      if(res.data.status === 401){
        document.getElementById('message').innerText = res.data.message
        // document.getElementById('loginMail').value = ""
        document.getElementById('loginPassword').value = ""
      }
      if(res.data.status === 200) {

        const userPayload = res.data.user;
        const tokenPayload = res.data.token;
        
        dispatch({
            type: "auth/login",
            payload: {userPayload, tokenPayload}
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
            <fieldset>
                <legend>Connexion</legend>
                <span id='message' className='text-danger'> </span>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Adresse mail</label>
                <input type="text" id="loginMail" className="form-control" name="email" />
                </div>
                <div className="mb-3">
                <label htmlFor="disabledTextInput" className="form-label">Mot de passe</label>
                <input type="password" autoComplete="on" id="loginPassword" className="form-control" name="password" />
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
