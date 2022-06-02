import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AddCar from './pages/car/add';
import EditCar from './pages/car/edit';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import {Provider} from 'react-redux';
import { store } from './redux';
import { ProtectedRoute } from './services/auth/protectedRoute';
import { NotProtectedRoute} from './services/auth/notProtectedRoute';


  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <React.StrictMode >
      <Provider store={store}>
      
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<App/>} />
                <Route path='/add-car' element={<ProtectedRoute><AddCar/></ProtectedRoute> } />
                <Route path='/edit-car/:id' element={<ProtectedRoute><EditCar/></ProtectedRoute> } />
                <Route path='/login' element={<NotProtectedRoute><Login/></NotProtectedRoute>} />
                <Route path='/register' element={<NotProtectedRoute><Register/></NotProtectedRoute>} />
            </Routes>
          </BrowserRouter>
      </Provider>
    
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals