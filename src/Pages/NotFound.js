import React from 'react';
import { Link } from 'react-router-dom';
import r1 from './page404.jpg'
const NotFound = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center text-center">
        <div className="col-md-12">
          <img src={r1} alt="404" className="img-fluid" />
          <h1 className="mt-4">Sayfa Bulunamadı!</h1>
          
          <p>Aradığınız sayfa mevcut değil.</p>
          <Link to="/" className="btn btn-primary">Anasayfa'ya dön</Link>
        </div>
      </div>    
      
    </div>
  );
}

export default NotFound;
