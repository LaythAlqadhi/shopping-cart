import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './ShopCard.module.css';

const ShopCard = ({
  imgSrc,
  title,
  price,
  rating,
  onClick
}) => {
  return (
    <div className={css.container}>
      <img
        src={imgSrc}
        alt=""
        className={css.img}
      />
      <p>{title}</p>
      <div className={css.innerContainer}>
        <p>${price}</p>
        <p className={css.rating}>
          {rating}
          <span className="material-symbols-outlined">
            star
          </span>
        </p>
      </div>
      <button className={css.button} onClick={onClick}>
        Add to cart
      </button>
    </div>
  );
}

  ShopCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default ShopCard;