import { Link } from 'react-router-dom';
import css from './Navbar.module.css';

const TopNavbar = () => {
  return (
    <nav className={css.nav}>
      <ul>
        <li className={css.logo}>
          <Link to="/">
            <h1 className="logo">
              eShop
            </h1>
          </Link>
        </li>
        <li>
          <Link to="/" className="material-symbols-outlined">
            home
          </Link>
        </li>
        <li>
          <Link to="shop" className="material-symbols-outlined">
            store
          </Link>
        </li>
        <li>
          <Link to="cart" className="material-symbols-outlined">
            shopping_cart
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default TopNavbar;