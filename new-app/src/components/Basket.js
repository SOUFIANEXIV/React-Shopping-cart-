import React from 'react';


export default function Basket(props){
    const {cartItems,onAdd,onRemove}=props;
    const itemsPrice =cartItems.reduce((a,c) => a+c.price * c.qty,0);
    

    return  ( <aside className="block col-1  aside ">
        <h2>Cart Items</h2>
        <div>
            {cartItems.length=== 0 && <div>cart is empty </div>}</div>
  {cartItems.map((item) =>(
    <div key={item.id} className="row">
        <div className="col-2">{item.name}</div>
    <div className="col-2">
    <button  onClick={()=>onAdd(item)} className="add">+</button>
    <button  onClick={()=>onRemove(item)} className="remove">-</button>

    </div>
    <div className="col-2 text-right">
        {item.qty} x${item.price.toFixed(2)}
    </div>
    </div>
  ))}
  {cartItems.length !== 0 && (
    <>
    <hr></hr>
    <div className="row">
        <div className="col-2"> <strong>TOTAL</strong> </div>
    <div className="col-1  text-right  color font "  >{itemsPrice.toFixed(2)}$</div>
    </div>
    <hr/>
    <div className="row  chek ">
        <button onClick={()=>alert('Chekout')}  > Chekout</button>
    </div>
    </>
  )}
 </aside>);      
   
   
    
} 