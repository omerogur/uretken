import React from 'react'
import Raptor from '../utills/Raptor'
import style from './content.module.css'
const Content = () => {
  return (
    <div>
             <div className={style.container}>
             <img className={style.img} style={{minWidth:"400px"}} src="https://cdn.shopify.com/s/files/1/0597/3567/0975/collections/banner_web_bg_gray_f2ce04b5-ab94-4165-9380-4d5a42e829c8_1200x1200.png?v=1633693075"/>
             <div className={style.paragraf}>
             <h1>Hemen Evini Dizayn Et</h1>
             <p >Uzun bir yaz tatilinden sonra evini yenile</p>
             <Raptor  />
             </div>
             </div>
    </div>
  )
}

export default Content
