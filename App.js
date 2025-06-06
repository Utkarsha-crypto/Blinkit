import React,{useState, useEffect} from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductDetails from "./ProductDetails";
import logo from './logo.svg';


export default function App() {
  const [ products , setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [selectedProduct ,setSelectedProduct]= useState(null);

  useEffect (() => {
    const fetchProducts = async () =>{
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if(!res.ok) {
           throw new Error("failed to fetch");
        }
        const data = await res.json();
        setProducts(data)
      } catch(error){
        console.error("Error featching");
      }
    };
    fetchProducts();
  }, []);


  const addToCart= (product) => {
    setCartItems ((prev) => {
      const exist =prev.find((item)=>item.id === products.id);
      if(exist){
        return prev.map((item)=>
          item.id === product.id ? { ...item ,qty: item.qty + 1} : item
        );
        }
        return [...prev ,{ ...product, qty:1}];
    });;
    
    const removeFromCart = (product)=>{
      setCartItems((prev)=>{
        const exist = prev.find((item)=> item.id === product.id);
        if (exist.qty  === 1){
          return prev.filter((item) => item.id !== product.id);
        }
        return prev.map ((item) =>
          item.id === product.id ? { ...item ,qty: item.qty - 1} : item
        );
    });
  };

  return (
    <div>
      <header className = "header">
        <h1>Blinkit</h1>
          <button
          className="cart-button"
          on-Click ={()=> setSelectedProduct(null)}
          aria-label ="View Cart"
          >
            Cart({cartItems.reduce((a,c)=>a + c.qty, 0)})
          </button>
      </header>
      <main>
        {!selectedProduct ? ( 
            <ProductList
             products = {products}
             onAddToCart ={addToCart}
             onSelectProduct ={setSelectedProduct}
          />
        ):(
          <ProductDetails
            product={selectedProduct}
            onAddToCart={addToCart}
            onBack ={()=> setSelectedProduct(null)}
          />  
          )}
          {cartItems.length > 0 && (
            <Cart
            cartItems={cartItems}
            onAdd ={addToCart}
            onRemove={removeFromCart}
            onSelectProduct={setSelectedProduct}
            />
          )}
      </main>
    </div>
  );
}}
