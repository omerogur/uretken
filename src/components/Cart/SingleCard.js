import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CardContext'
import { baseService } from '../../network/service/baseService'
import Load from '../loading/Load'
import style  from "./singlecart.module.css"
const SingleCard = () => {

   const {id} = useParams()
   const [product,setProduct] = useState()
   const {addToCart} = useCart()
   
 useEffect(()=> {
    getData();
   
 },[])

 const getData = async () => {

     try {
       const data = await baseService.get(`/products/${id}`)
    
       setProduct(data)
       console.log("update");
     } catch (error) {
         console.log("Categories list error", error);
        }
        console.log(product);
   }
  
    
    
   return (
     <>
        {product ? 
        <div className="container">
          <hr className='text-danger'/>
          <div className='row' style={{paddingTop:"60px"}}>

            <div className='col-6'>
            <img src={product.image} className=""/>
            </div>
             
            <div className='col-6 d-flex flex-column' >
           <h1 className={style.title}>{product.title}</h1>
           <p>{product.description}</p>
           <span className={style.price}>${product.price}</span>

           <div className='mt-4'>
           <button className={style.btn} onClick={() => addToCart(product)}>ADD TO CART</button>
           </div>
            </div>


          </div>
        </div> 
    
    : 
    <div className={style.load}><Load/></div>}


     </>
  )
}

export default SingleCard
