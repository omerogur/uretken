import React from 'react'
import Categories from '../components/categories/Categories'
import Content from '../components/content/Content'
import Content2 from '../components/content/Content2'
import Navbar from '../components/navbar/Navbar'
import Slider from '../components/slider/Slider'


const HomePage = () => {


  return (
    <div>
      <Slider />
      <div style={{ margin: "0 10%" }}>
        <Categories />
        <Content />
      </div>
      <Content2 />




    </div>
  )
}

export default HomePage
