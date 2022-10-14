import React from 'react'
import './Product.css'
function Product({info,prize,image}) {
  return (
    <div className='product'>
         {/* <Zoom left> */}
         <div className="containerproduct">
        <div className="smallContainerproduct">
          <img className='productimg' src={image} alt="" />
        </div>
        <div className="headingnameproduct"> 
          <div className="head"><span>{info}</span></div>
          <div className="button"><button>{prize}</button></div>
        </div>
      </div>
    {/* </Zoom> */}
    </div>
  )
}

export default Product