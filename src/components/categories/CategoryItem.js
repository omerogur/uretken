import React from 'react'
import Raptor from '../utills/Raptor'
import Shard from '../utills/Shard'
import './categoryItem.css'
const CategoryItem = ({ data }) => {
    

    return (
    
            <div className="position-relative  w-max" style={{width:"100%"}}>
               <img src={data.img} className=" w-75 rounded-circle categories-img" style={{objectFit:"cover"}}/>
                    <div className="position-absolute d-flex flex-column  justify-content-center align-items-center" style={{top:"40%" ,left:"10%"}}>
                        <h3 className='text-center fs-6' style={{color:"whitesmoke"}}>{data.title}</h3>
                        <Shard category={data.category}/>
                       
                    </div>
                </div>
        
       
    )
}

export default CategoryItem
