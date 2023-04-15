import React, { useContext } from 'react'
import { ShoppingCartOutlined  } from '@ant-design/icons'
import {  Badge } from 'antd';
import {Link,NavLink} from 'react-router-dom'
import "../../App.css"
import { useCart } from '../../context/CardContext';
import FirebaseContext from '../../context/FirebaseContext';
import { auth } from  "../../firebase"
const Navbar = () => {

 const {cart} = useCart()
   const {handleLogout,user} = useContext(FirebaseContext)
  return (
    <div>
           <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">YOUR STORE</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav mx-auto my-2 my-lg-0 navbar-nav-scroll" style={{bsScrollHeight: '100px'}}>
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={"/products"} className="nav-link" >Products</Link>
              </li>
              <li className="nav-item">
                <Link to={"/about"} className="nav-link" >About</Link>
              </li>
             
              
            </ul>
            
            <div className='buttons'>
             <Link to="/login">   <div  className='btn btn-outline-dark'><i className='fa fa-sign-in me-1'></i>LOGIN</div></Link>
             <Link to="/register">  <div  className='btn btn-outline-dark ms-2'><i className='fa fa-user-plus me-1'></i>Register</div></Link> 
             <Link to= {"/cart"}>  <div  className='btn btn-outline-dark ms-2'><i className='fa fa-shopping-cart me-1'></i>Cart ({cart.length})</div></Link>
           
             {
              user &&
             <>
              <button onClick={handleLogout} style={{marginLeft:"8px"}} className='btn btn-outline-dark'><i class="fa fa-sign-out" aria-hidden="true"></i>LOGOUT</button>
              <h3>Hoş Geldin {user?.displayName?.toUpperCase()}</h3>
             </>
              
             }
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
