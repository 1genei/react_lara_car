import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddCar from './pages/car/add';
import EditCar from './pages/car/edit';
import Login from './pages/auth/login';
import Register from './pages/auth/register';


     
  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
    <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<App/>} />
          <Route path='/add-car' element={<AddCar/>} />
          <Route path='/edit-car/:id' element={<EditCar/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
      </Routes>
    </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals