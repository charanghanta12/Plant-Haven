import React, { useState, useEffect, useContext } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { cartItems } = useContext(ShopContext);

  useEffect(() => {
    // Check if user is already logged in
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginLogout = () => {
    // Toggle between login and logout actions based on isLoggedIn state
    if (isLoggedIn) {
      // Clear token from local storage
      localStorage.removeItem('token');
      // Update state to reflect logout
      setIsLoggedIn(false);
    } else {
      // Redirect to login page
      window.location.href = '/login'; // Update with your login page URL
    }
  };

  const cartCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>Plant Haven</p>
      </div>
      <ul className='nav-menu'>
        <li><Link style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to='/Plant'>Plant</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to='/Seeds'>Seeds</Link></li>
        <li><Link style={{ textDecoration: 'none' }} to='/Pots'>Pots</Link></li>
      </ul>
      <div className='nav-login-cart'>
        <Link to='/Cart'>
          <img src={cart_icon} alt="Cart" />
        </Link>
        <div className='nav-cart-count'>{cartCount}</div>
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');
      window.location.replace('/')}}>Logout</button>
    :<Link to='/login'><button>Login</button></Link>}
        
      </div>
    </div>
  );
}

export default Navbar;
