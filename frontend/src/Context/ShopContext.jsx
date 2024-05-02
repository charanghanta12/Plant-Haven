// ShopContextProvider.js
import React, { createContext, useEffect, useState } from 'react';
import all_product from '../Components/Assets/all_product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  all_product.forEach(product => {
    cart[product.id] = 0;
  });
  return cart;
}

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(()=>{
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:4000/getcart',{
        method:'POST',
        headers:{
          Accept:'application/form-data',
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':'application/json',
        },
        body:"",
      }).then((response)=>response.json())
      .then((data=>setCartItems));
    }
  },[])

  const addToCart = (itemId) => {
    setCartItems(prev => {
      if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart',{
          method:'POST',
          headers:{
            Accept:'application/form-data',
            'auth-token':`${localStorage.getItem('auth-token')}`,
            'Content-Type':'application/json',
          },
          body:JSON.stringify({"itemId":itemId})
          
        })
        .then((response)=>response.json())
        .then((data)=>console.log(data));
      }
      return { ...prev, [itemId]: prev[itemId] + 1 }
      
    });
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => {
      if (prev[itemId] > 0) {
        if (localStorage.getItem('auth-token')) {
          fetch('http://localhost:4000/removefromcart', {
            method: 'POST',
            headers: {
              Accept: 'application/form-data',
              'auth-token': `${localStorage.getItem('auth-token')}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ itemId: itemId })
  
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
        }
        return { ...prev, [itemId]: prev[itemId] - 1 };
      }
      return prev;
    });
  };

  const contextValue = { all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
}

export default ShopContextProvider;
