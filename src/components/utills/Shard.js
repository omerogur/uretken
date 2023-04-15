import React from 'react'
import{useNavigate} from "react-router-dom"
const Shard = ({category}) => {
    let navigate = useNavigate()

    const goPro =(category) => {
    navigate(`/product/${category}`)


    }

  return (
    <div>
            <button onClick={() =>goPro(category)} style={{color:"black"}}>GO NOW</button>
    </div>
  )
}

export default Shard
