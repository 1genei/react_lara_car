import Nav from '../layouts/nav';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';


function IndexCar() {
    const [cars, setCars] = useState([]);
    
    const auth  = useSelector( (state) =>state.auth);
    
    console.log(auth);

    function deleteHandle(e){

      e.preventDefault();

      // On réccupère l'élément sur lequel on clique
      const ligne = e.currentTarget;

      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        }, 
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'êtes vous sûr ?',
        text: "Action irrévocable",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui',
        cancelButtonText: 'Non',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {

          axios.delete('http://127.0.0.1:8000/api/delete/'+e.target.id).then( (res) => {

            if(res.data.status === 200){
                
              swalWithBootstrapButtons.fire(
                'Supprimé!',
                '',
                'success'
              )
              ligne.closest('tr').remove();
                
            }
        })

        } else if (
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Annulé',
            'Non supprimé',
            'error'
          )
        }
      })
    }

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
        
       
            <h2> {auth.user ? `Bienvenue ${auth?.user?.name}`   : ""}   </h2>
       
        <h2 className="h2 mt-3">Liste des véhicules</h2>
      
        
      
        <table className="table mt-3">
            <thead>
              <tr>
                <th className='text-primary' scope="col">Marque</th>
                <th className='text-primary' scope="col">Modèle</th>
                <th className='text-primary' scope="col">Type</th>
                <th className='text-primary' scope="col">Kilométrage</th>
                <th scope="col"></th>
                <th scope="col"></th>
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
                  <td><button type="button" id={car.id} onClick={deleteHandle} className="btn btn-danger btn-sm">Supprimer</button></td>
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
