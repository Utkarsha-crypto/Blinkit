import React from "react";

export default function Cart({cartItems, onAdd , onRemove , onSelectProduct}){
  const totalPrice = cartItems.Reduce(
    (a,c) => a + c.price * c.qty, 0 );

  return (
    <div className="cart">
        <h2>Yiur Cart</h2>
        {cartItems.length === 0 && <p> Cart is empty</p>}
        {cartItems.map((item)=>(
            <div key={item.id} className="cart-items">
                <img
                  src ={item.image}
                  alt ={item.title}
                  onClick={()=> onSelectProduct(item)}
                  style = {{cursor: "pointer", width: 50}}
                  />
                  <div
                   className="cart-item-info"
                   onClick={()=> onSelectProduct(item)}
                   style = {{cursor: "pointer"}}
                   >
                    <h4>{item.title}
                    </h4>
                    <p>${item.price.toFixed(2)}</p>
                   </div>
                   <div className="cart-item-controls">
                    <button onClick={()=> onRemove(item)}> - </button>
                    <span>{item.qty}</span>
                    <button onClick={()=> onAdd(item)}> + </button>
                   </div>
             </div>      
        ))}
        <h3>Total : $ {totalPrice.toFixed(2)}</h3>
        <button onClick={() => alert("Checkout")}>
            Checkout
        </button>
    </div>
  );
}



