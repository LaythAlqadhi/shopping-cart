import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CartContext } from '../../App';
import css from './CartCard.module.css';

const CartCard = ({
  id,
  imgSrc,
  title,
  price,
}) => {
  const { cart, setCart, productCounts, setProductCount } = useContext(CartContext);
  const quantity = productCounts[id] || 1;

  const handleIncrement = () => {
    setProductCount(id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setProductCount(id, quantity - 1);
    }
  };

  const handleRemove = () => {
    const newCart = cart.filter((item) => item.id !== id);
    setProductCount(id, 1);
    setCart(newCart);
  };

  return (
    <div className={css.container}>
      <img
        src={imgSrc}
        alt=""
        className={css.img}
      />
      <div className={css.detailsContainer}>
        <p>{title}</p>
        <p className={css.price}>
          ${price}
        </p>
        <div className={css.countContainer}>
          <button onClick={handleIncrement}>
            +
          </button>
          <p>{quantity}</p>
          <button onClick={handleDecrement}>
            -
          </button>
        </div>
        <button onClick={handleRemove}>
          Remove
        </button>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  id: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default CartCard;
