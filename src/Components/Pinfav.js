import React, { useState, useEffect } from "react";


const Pinfav = ({ cart, setCart, handleRemove,size}) => {






  return (
    <div className='results'>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="image">
            <img src={item.urls.regular} alt={item.alt_description} />
            <div className='pin' onClick={() => handleRemove(item.id)}> Remove</div>
            <div className='likes badge badge-light'>{item.likes} Likes</div>
          </div>
       

        </div>
      ))}
      <br></br>
      <div className="total">
        <h6>Total Favorite Item count is {size} </h6>

      </div>
    </div>
  );
};

export default Pinfav;

