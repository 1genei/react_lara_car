import Nav from '../layouts/nav';
import axios from 'axios';

import {useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';

function EditCar() {

 
  const navigate = useNavigate();  
  const param = useParams();
  
  
  const [car, setCar] = useState([]);

  
  useEffect( () => {
  
    axios.get('http://127.0.0.1:8000/api/car/'+param.id).then( (res) => {
      if(res.data.status === 200){ 
         setCar(
          {
            marque : res.data.car.brand ,
            modele : res.data.car.modele,
            type : res.data.car.type,
            kilometrage : res.data.car.kilometrage
          }
         );
        //  setCar(res.data.car); //ne marche pas car brand != marque
      }
    });
    
  },[]);
  
  const handleSubmit = (e) =>{
  
    e.preventDefault();
    const car = {
      brand : e.target.marque.value ,
      modele : e.target.modele.value,
      type : e.target.type.value,
      kilometrage : e.target.kilometrage.value
    };
    
    axios.put('http://127.0.0.1:8000/api/car/'+param.id, car).then( (res) => {
      if(res.data.status === 400){
        document.getElementById('error_marque').innerText = res.data.error.brand ? res.data.error.brand : ""   
        document.getElementById('error_modele').innerText = res.data.error.modele ? res.data.error.modele : ""   
        document.getElementById('error_type').innerText = res.data.error.type ? res.data.error.type : ""   
        document.getElementById('error_kilometrage').innerText = res.data.error.kilometrage ? res.data.error.kilometrage : ""   
      }
      if(res.data.status === 200){
        document.getElementById('message').innerText = res.data.message
        navigate('/')
      }
    })
    
  
  }

  const handleInput = (e) => {

   
    const {name, value} = e.target;
    setCar({...car, [name]:value});

  }


  return (
    <div className="container mt-5" >
      
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Modifier la voiture </legend>
                    <span id='message' className='text-success'> </span>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Marque</label>
                    <input type="text" id="disabledTextInput" className="form-control" value={car.marque ?? ''} onChange={handleInput} name="marque" />
                    <span className='text-danger' id='error_marque'> </span>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Modèle</label>
                    <input type="text" id="disabledTextInput" className="form-control"  value={car.modele ?? ''}  onChange={handleInput} name="modele" />
                    <span className='text-danger' id='error_modele'> </span>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Type</label>
                        <select id="disabledSelect" onChange={handleInput} name='type'  value={car.type ?? ''} className="form-select" >
                            <option value="SUV">SUV</option>
                            <option value="Compacte">Compacte</option>
                            <option value="Familliale">Familliale</option>
                            <option value="Berline">Berline</option>
                            <option value="Sportive">Sportive</option>
                        </select>
                        <span className='text-danger' id='error_type'> </span>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Kilométrage</label>
                    <input type="number" step="any" id="disabledTextInput" className="form-control"  value={car.kilometrage ?? ''} onChange={handleInput} name="kilometrage" />
                    <span className='text-danger' id='error_kilometrage'> </span>
                    </div>
                    
                   
                    <button type="submit" className="btn btn-primary btn-lg mt-5 mb-5">Modifier</button>
                </fieldset>
            </form>
        </div>
      </div>
  </div>
  );
}

export default EditCar;
