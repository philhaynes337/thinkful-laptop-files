import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FEATURES from './files/Features';




ReactDOM.render(
	
  <React.Fragment>
    
    
    <App features={FEATURES} />
     
      
  </React.Fragment>,
   document.getElementById('root')



  );
