import "./ImageCarousal.css"

import React from 'react'

function ImageCarousal(props) {
  return (
    <div className='mycard'>
        <img  src={props.image}/>
    </div>
  )
}

export default ImageCarousal