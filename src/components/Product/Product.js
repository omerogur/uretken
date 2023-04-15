import React, { useContext, useEffect, useState, } from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { baseService } from "../../network/service/baseService"
import { Card, List, Button, Row, Col } from 'antd'
import style from "./product.module.css"
import { useCart } from '../../context/CardContext'
import Load from '../loading/Load'
import FirebaseContext from '../../context/FirebaseContext'
const Product = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const { addToCart,cart } = useCart()
  const {user} = useContext(FirebaseContext)
  const navigate = useNavigate()
  useEffect(() => {
    getData()

  }, [])

  const getData = async () => {

    try {
      const data = await baseService.get(`/products/category/${category}`)
      setProducts(data)
      console.log("update");
    } catch (error) {
      console.log("Categories list error", error);
    }
  }

  const goDetail = (id) => {
    navigate(`/products/${id}`)
  }

  useEffect(() => {
    if(user){
      const x = localStorage.setItem(JSON.stringify(user.uid),JSON.stringify(cart))
      console.log("add local storage cart");
    }
   console.log("1");
  },[cart])

  return (

    <>
          {products.length > 0 ?   
        <div className={style.flexContainer}>
        {products.map((item, key) => (
          <div key={key} className='col-md-3 mb-5 justify-content-center '   >
            <div className="card h-100 text-center p-4"  >
              <img src={item.image} className="card-img-top" alt="..." height="150px" onClick={() => goDetail(item.id)} />
              <div className="card-body">
                <h5 className="card-title mb-3">{item.title}</h5>
                <p className="card-text lead fw-bold">${item.price}</p>
                <button onClick={() => addToCart(item)} className="btn btn-outline-dark">Add To Cart</button>
              </div>
            </div>
          </div>
        ))

        }
      </div> : <div className={style.load}><Load/></div>}
    </>

  )
}

export default Product
