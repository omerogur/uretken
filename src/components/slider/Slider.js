import React, { useEffect, useState } from 'react'
import './slider.css'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Link, NavLink } from 'react-router-dom';

const Slider = () => {
   const [data, setData] = useState(0)
   const [counter, setCounter] = useState(0)
   const [status, setStatus] = useState(true)
   const sliderItems = [
      {
         id: 1,
         img: "https://img.freepik.com/premium-vector/modern-sale-banner-website-slider-template-design_54925-46.jpg?w=1380",
         title: "SUMMER SALE",
         desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
         bg: "#FFFAFA",
      },
      {
         id: 2,
         img: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/136962209/original/2080c4d81e5ce3d398948d591e50ad45a4ef7aa1/design-your-shopping-store-banner-sliders.jpg",
         title: "AUTUMN COLLECTION",
         desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
         bg: "FFFAFA",
      },
      {
         id: 3,
         img: "https://i.ibb.co/cXFnLLV/3.png",
         title: "LOUNGEWEAR LOVE",
         desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
         bg: "FFFAFA",
      },
      {
         id: 4,
         img: "https://img.freepik.com/free-vector/floral-new-collection-banner-template_1361-1251.jpg?w=1380&t=st=1660407233~exp=1660407833~hmac=be1afe5dda755fa8ddad555d7eb7f8a86d85ca2761b8762c1f5f25ce302aef40",
         title: "LOUNGEWEAR LOVE",
         desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
         bg: "FFFAFA",
      },
   ];

   const playSliderForward = () => {
      if (data >= 3) {
         setData(0)
      } else {
         setData(prev => prev + 1)
      }
   }
   const playSliderBack = () => {
      if (data <= 0) {
         setData(0)
      } else {
         setData(prev => prev - 1)
      }
   }

   useEffect(() => {
      setTimeout(() => {
         playSliderForward()
         setCounter(prev => prev + 1)
      },2000)

   }, [counter])

   return (
      <div>
         <div className='slider-container'>
            <CaretRightOutlined className='right' onClick={playSliderForward}>right</CaretRightOutlined>
            <div className='wrapper'>
               {data <= 8 ?
                  <div className='slide' style={{ backgroundColor: "#FFFAFA" }}  >
                     <div className='imageContainer d-flex'>
                        {
                           data <= 3 ?
                              <img src={sliderItems[data].img} />
                              :
                              <h1>loading</h1>
                        }


                        <div className='button-container'>
                           <Link to={"/products"}>    <button className='shop-btn'>SHOP NOW</button></Link>
                        </div>
                     </div>



                  </div>
                  : <h1>LOADİNG ... </h1>
               }
            </div>

            <CaretLeftOutlined className='left' onClick={playSliderBack}>left</CaretLeftOutlined>
         </div>

         <hr />

      </div>
   )
}

export default Slider
