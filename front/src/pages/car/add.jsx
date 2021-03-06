import Nav from '../layouts/nav';
import axios from 'axios';

import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

function AddCar() {

  const navigate = useNavigate();
  const auth  = useSelector( (state) =>state.auth);

  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const car = {
      brand : e.target.marque.value ,
      user_id: auth.user?.id,
      modele : e.target.modele.value,
      type : e.target.type.value,
      kilometrage : e.target.kilometrage.value
    };
    if (!auth.user) {
      document.getElementById('allowed').innerText = "Permission refusée"
      navigate('/login')
    }
    else {
      axios.post('http://127.0.0.1:8000/api/car', car).then( (res) => {
        if(res.data.status === 400){
            document.getElementById('error_marque').innerText = res.data.error.brand ? res.data.error.brand : ""   
            document.getElementById('error_modele').innerText = res.data.error.modele ? res.data.error.modele : ""   
            document.getElementById('error_type').innerText = res.data.error.type ? res.data.error.type : ""   
            document.getElementById('error_kilometrage').innerText = res.data.error.kilometrage ? res.data.error.kilometrage : ""   
          }
      
        if(res.data.status === 200){
          navigate('/')
        }
      })
    }
  }



  return (
    <div className="container mt-5"> 
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Ajouter une voiture</legend>
                    <span id='message' className='text-success'> </span>
                    <span id='allowed' className='text-warning fw-bold'> </span>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Marque</label>
                    <input type="text" id="disabledTextInput" className="form-control" name="marque" />
                    <span className='text-danger' id='error_marque'> </span>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Modèle</label>
                    <input type="text" id="disabledTextInput" className="form-control" name="modele" />
                    <span className='text-danger' id='error_modele'> </span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Type</label>
                        <select id="disabledSelect" name='type' className="form-select" >
                            <option value="SUV">SUV</option>
                            <option value="Compacte">Compacte</option>
                            <option value="Familiale">Familiale</option>
                            <option value="Berline">Berline</option>
                            <option value="Sportive">Sportive</option>
                        </select>
                        <span className='text-danger' id='error_type'> </span>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Kilométrage</label>
                    <input type="number" step="any" id="disabledTextInput" className="form-control" name="kilometrage" />
                    <span className='text-danger' id='error_kilometrage'> </span>
                    </div>
                    
                   
                    <button type="submit" className="btn btn-primary btn-lg mt-5 mb-5">Ajouter</button>
                </fieldset>
            </form>
        </div>
      </div>
  </div>
  );
}

export default AddCar;
