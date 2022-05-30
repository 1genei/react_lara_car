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
    
      if(res.data.status == 200){
         console.log(res.data.car);
         setCar(res.data.car);
      }
    });
    
  },[]);
  
  const handleSubmit = (e) =>{
  
    e.preventDefault()
    const car = {
      marque : e.target.marque.value ,
      modele : e.target.modele.value,
      type : e.target.type.value,
      kilometrage : e.target.kilometrage.value
    };
    
    axios.post('http://127.0.0.1:8000/api/car'+param.id, car).then( (res) => {
    
      if(res.data.status == 200){
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
                    <legend>Modifier la voiture </legend>
                    <span id='message' className='text-danger'> </span>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Marque</label>
                    <input type="text" id="disabledTextInput" className="form-control" value={car.brand} name="marque"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Modèle</label>
                    <input type="text" id="disabledTextInput" className="form-control"  value={car.modele}  name="modele"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Type</label>
                        <select id="disabledSelect" name='type'  value={car.type} className="form-select">
                            <option value="SUV">SUV</option>
                            <option value="Compacte">Compacte</option>
                            <option value="Familliale">Familliale</option>
                            <option value="Berline">Berline</option>
                            <option value="Sportive">Sportive</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Kilométrage</label>
                    <input type="number" step="any" id="disabledTextInput" className="form-control"  value={car.kilometrage} name="kilometrage"/>
                    </div>
                    
                   
                    <button type="submit" className="btn btn-primary btn-lg mt-5 mb-5">Submit</button>
                </fieldset>
            </form>
        </div>
      </div>
  </div>
  );
}

export default EditCar;
