import React from "react";

export default function ProductList({products, onAddToCart , onSelectProduct}){
    return(
        <div className="product-list">
            {products.map((product)=> (
                <div
                  key ={product.id}
                  className="product-card"
                  onClick = {()=> onSelectProduct(product)}
                  tabIndex={0}
                  role = "button"
                  onKeyDown={(e)=>{
                    if(e.key === "Enter" ) onSelectProduct(product);
                  }}
               >
                <img src={product.image} alt ={product.title}/>
                <h3> {product.title}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAddToCart(product);
                  }}
                >
                    Add To Cart
                    </button>  
        </div>
            ))}
            </div>
    );
}