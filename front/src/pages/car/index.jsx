import Nav from '../layouts/nav';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';



function IndexCar() {

    const [cars, setCars] = useState([]);
  
    useEffect( () => {
    
        axios.get('http://127.0.0.1:8000/api/cars').then( (res) => {
            
            setCars(res.data.cars);
        
        })
        
    }, []);
  

  return (
    <div className="container mt-5" >
      
      <div className="row" > 
        <div className="col-12" style={{border:'2px solid grey'}}>
        
        <Nav/>
        
        <h2 className="h2 mt-3">Liste des véhicules</h2>
      
        
      
        <table className="table mt-3">
            <thead>
              <tr>
                <th scope="col">Marque</th>
                <th scope="col">Modèle</th>
                <th scope="col">Type</th>
                <th scope="col">Kilométrage</th>
                <th scope="col">Modifier</th>
                <th scope="col">Supprimer</th>
              </tr>
            </thead>
            <tbody>
            
            {
              cars.map( (car ) => (
              
                <tr key={car.id}>
                <th scope="row">{car.brand}</th>
                <td>{car.modele}</td>
                <td>{car.type}</td>
                <td>{car.kilometrage}</td>
                <td><Link type="button" to={"/edit-car/"+car.id} className="btn btn-success btn-sm">Modifier</Link></td>
                <td><button type="button" className="btn btn-danger btn-sm">Supprimer</button></td>
              </tr>
              
              
              ))
            }
      
            </tbody>
          </table>
        
        </div>
      </div>
      
      
  </div>
  );
}

export default IndexCar;
