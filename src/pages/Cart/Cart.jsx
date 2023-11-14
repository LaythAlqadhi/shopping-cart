import { useContext } from 'react';
import CartCard from '../../components/CartCard/CartCard';
import { CartContext } from '../../App'
import css from './Cart.module.css';

const Cart = () => {
  const { cart, productCounts } = useContext(CartContext);
  
  const calculateTotalPrice = () => {
    if (cart.length === 0) {
      return 0;
    }

    const totalPrice = cart.reduce((total, product) => {
      const productTotal = product.price * (productCounts[product.id] || 1);
      return total + productTotal;
    }, 0);

    return totalPrice.toFixed(2);
  };
  
  return (
    <div className={css.container}>
      <h1>Total Price: ${calculateTotalPrice()}</h1>
      <button>Submit</button>
      <ul className={css.list}>
        {cart.map((project) => (
          <CartCard
            key={project.id}
            id={project.id}
            imgSrc={project.image}
            title={project.title}
            price={project.price}
            quantity={project.quantity}
            project={project}
          />
        ))}
      </ul>
    </div>
  );
}

export default Cart;