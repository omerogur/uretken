import React, { useContext, useEffect, useState } from 'react'
import style from "./cart.module.css"
import { useCart } from "../../context/CardContext"
import { PlusOutlined, MinusOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import Raptor from '../utills/Raptor'
import FirebaseContext from '../../context/FirebaseContext'

const Cart = () => {
  const { user } = useContext(FirebaseContext)
  const { cart, setCart, addToCart } = useCart()
  const navigate = useNavigate()
  const [cartTotal, setCartTotal] = useState(0)
  // const navigateFunction = () => {
  //     navigate("/AllProduct")
  // }

  function handlePrice() {
    let total = 0
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].totalPrice

    }
    console.log(total);
    return total.toFixed(2);

  }

  // const handleIncrease = (item) =>{
  //   const filter = cart.find(x => x.id==item.id)
  //   filter.quantity +=1
  //   filter.totalPrice =(filter.quantity*filter.price)
  //   setCart([...cart])
  //   console.log(filter);
  // }      

  const handleDeCrease = (item) => {
    const filter = cart.find(x => x.id === item.id)
    if (filter.quantity > 1) {
      filter.quantity -= 1
      filter.totalPrice = (filter.quantity * filter.price)
      setCart([...cart])
    } else {
      const removeItem = cart.filter(x => {
        return x.id !== item.id
      })
      setCart([...removeItem])
    }
  }


  useEffect(() => {
    if (user) {
      const x = localStorage.setItem(JSON.stringify(user.uid), JSON.stringify(cart))
      console.log("add local storage cart");
    }
    console.log("1");
  }, [cart])


  return (
    <>
      {
        cart.length > 0 ?

          <div className={style.container}>
            <h1 className={style.title}>YOUR BAG</h1>
            <div className={style.topContainer}>

              <button className={style.continue_btn} onClick={() => navigate("/products")}>Continue Shopping</button>

            </div>
            <div className={style.bottom}>
              <div className={style.info}>
                {cart.map((item, key) => (
                  <>
                    <div key={key} className={style.product}>
                      <div className={style.productDetail}>
                        <img src={item.image} className={style.productImg} />
                        <div className={style.details}>
                          <span className={style.productName}><b>Product: </b>{item.title} </span>
                          <span className={style.productId}><b>Barcode</b> {item.id} </span>
                          <div className={style.productColor} color="black" />
                          <span className={style.productSize}></span>
                        </div>
                      </div>
                      <div className={style.priceDetail}>
                        <div className={style.ProductAmountContainer}>
                          <PlusOutlined onClick={() => addToCart(item)} />
                          <div className={style.productAmount}>{item.quantity}</div>
                          <MinusOutlined onClick={() => handleDeCrease(item)} />
                        </div>
                        <div className={style.productPrice}>${item.totalPrice}</div>
                      </div>
                    </div>
                    <hr />
                  </>
                ))}
                <hr />
                <h1 className={style.totalPrice}> TOTAL PRİCE : ${handlePrice()}  </h1>
              </div>

            </div>

          </div>

          :
          <div className={style.emptyCard}>YOUR CART'S EMPTY
            <div className={style.shopbtn}>  <Raptor /></div>

          </div>
      }
    </>
  )
}

export default Cart
