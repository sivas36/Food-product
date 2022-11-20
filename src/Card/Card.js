import React, { useState } from "react"

function Card(props){
     let [cart,setCart]=useState(0);

     function cartHandler(){
          setCart(++cart);

          props.onAdd(cart);
     }
     
     function removeHandler(){
          setCart(--cart);
          props.onRemove();
     }
    return(
     <>
     <div className="col-md-6 col-lg-3 col-sm-6">
     <div className="card" style={{marginBottom:"20px"}}>
     <img className="card-img-top" style={{height:"250px"}} src={props.src} alt="Card image cap"></img>
     <div className="card-body">
     <h5 className="card-title">{props.name}</h5>
     
      {(props.name==='Special item' || props.name==='Popular item' )?<span>⭐⭐⭐⭐⭐</span> :<br/> } 

     <p className="card-text">{props.price}</p>
     {cart=== 0?<a className="btn btn-primary" onClick={cartHandler}>Add to cart</a>:<a className="btn btn-primary" onClick={removeHandler}>Remove</a> } 
     
     </div>
     </div>
     </div>
     </>


    )
}


export default Card;


