import React, { useContext } from 'react';
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item'

// function ShoppingCart() {
//   const [products] = useState([
//     { id: 1, name: 'Product 1', price: 10 },
//     { id: 2, name: 'Product 2', price: 20 },
//     { id: 3, name: 'Product 3', price: 30 },
//   ]);

//   const [cart, setCart] = useState([]);

//   const addToCart = (product) => {
//     setCart([...cart, product]);
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter(item => item.id !== productId));
//   };

//   return (
//     <div>
//       <h1>Shopping Cart</h1>
//       <h2>Products</h2>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}{' '}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//       <h2>Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.id}>
//             {item.name} - ${item.price}{' '}
//             <button onClick={() => removeFromCart(item.id)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${cart.reduce((acc, curr) => acc + curr.price, 0)}</h3>
//     </div>
//   );
// }

const ShopCategory = (props) =>{
  const{all_product} = useContext(ShopContext);
  return(
    <div className='shop-category'>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category === item.category)
          {
            
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }
          else
          {
            return null;
          }
        })}
      </div>
    </div>
  )
}
export default ShopCategory;
