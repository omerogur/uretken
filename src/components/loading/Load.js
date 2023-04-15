import React from 'react'
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
const Load = () => {
    const antIcon = (
        <LoadingOutlined
          style={{
            fontSize: 200,
            color:"green"
          }}
          spin
        />
      );
      

    
    
  return (
    <div>
        
       <Spin indicator={antIcon} />
    
    </div>
  )
}

export default Load
