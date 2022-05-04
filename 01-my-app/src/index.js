import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(//render:sanal domu oluşturuyor, document.getelementById("root")id si root olan elementi getirir
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

