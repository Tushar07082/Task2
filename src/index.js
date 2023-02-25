import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {Route,Routes} from 'react-router-dom';
ReactDOM.render(
   < BrowserRouter>
    <Routes>
      <Route  path="/" element={<App/>}/>
      </Routes>
    </BrowserRouter>  
  ,
  document.getElementById('root')
);
