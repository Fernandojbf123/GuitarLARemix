import { Link, useLocation } from "@remix-run/react"
import cartImg from "../../public/img/cart.png"

function Navigation() {

  const location = useLocation();

  return (
    <nav className="navigation">
          <Link 
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            >Index</Link>
          <Link 
            to="/aboutus"
            className={location.pathname === '/aboutus' ? 'active' : ''}
            >About us</Link>
          <Link 
            to="/products"
            className={location.pathname === '/products' ? 'active' : ''}
            >Store</Link>
          <Link 
            to="/blog"
            className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
          <Link 
            to="/cart"
            className="cart-img">
              <img src={cartImg} alt="shopping cart" />

            </Link>
        </nav>
  )
}

export default Navigation
