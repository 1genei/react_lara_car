import Nav from '../layouts/nav';
import axios from 'axios';

import {useNavigate} from 'react-router-dom';

function AddCar() {

 
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
  
    e.preventDefault()
    const car = {
      marque : e.target.marque.value ,
      modele : e.target.modele.value,
      type : e.target.type.value,
      kilometrage : e.target.kilometrage.value
    };
    
    axios.post('http://127.0.0.1:8000/api/car', car).then( (res) => {
    
      if(res.data.status == 200){
        document.getElementById('message').innerText = res.data.message  }
        navigate('/')
    })
    
    
    console.log(car);
  }


  return (
    <div className="container mt-5" >
      
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Ajouter une voiture</legend>
                    <span id='message' className='text-danger'> </span>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Marque</label>
                    <input type="text" id="disabledTextInput" className="form-control" name="marque"/>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Modèle</label>
                    <input type="text" id="disabledTextInput" className="form-control" name="modele"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="disabledSelect" className="form-label">Type</label>
                        <select id="disabledSelect" name='type' className="form-select">
                            <option value="SUV">SUV</option>
                            <option value="Compacte">Compacte</option>
                            <option value="Familiale">Familiale</option>
                            <option value="Berline">Berline</option>
                            <option value="Sportive">Sportive</option>
                        </select>
                    </div>
                    <div className="mb-3">
                    <label htmlFor="disabledTextInput" className="form-label">Kilométrage</label>
                    <input type="number" step="any" id="disabledTextInput" className="form-control" name="kilometrage"/>
                    </div>
                    
                   
                    <button type="submit" className="btn btn-primary btn-lg mt-5 mb-5">Submit</button>
                </fieldset>
            </form>
        </div>
      </div>
  </div>
  );
}

export default AddCar;