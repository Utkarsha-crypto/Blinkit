import React from "react";


export default function ProductDetails({product, onAddToCart , onBack}){
    if (!product) return null;

    return (
        <div className="product-deatails">
            <button onClick={onBack} className="back-button">
                Back
            </button>
            <img src ={product.image} alt={product.title}/>
            <h2>{product.title}</h2>
            <p className="price">${product.price.toFixed(2)}</p>
            <p> {product.description}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart </button>
        </div>
    );
}