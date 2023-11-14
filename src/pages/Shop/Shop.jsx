import { useContext } from 'react';
import useFakeStoreAPI from '../../hooks/useFakeStoreAPI';
import ShopCard from '../../components/ShopCard/ShopCard';
import Loading from '../../components/Loading/Loading';
import { CartContext } from '../../App'
import css from './Shop.module.css';

const Shop = () => {
  const { data, error, loading } = useFakeStoreAPI();
  const { cart, setCart } = useContext(CartContext);

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex((item) => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className={css.container}>
      {data ?
        data.map((project) => (
          <ShopCard
            key={project.id}
            imgSrc={project.image}
            title={project.title}
            price={project.price}
            rating={project.rating.rate}
            onClick={() => addToCart(project)}
          />
        )) : <Loading />}
    </div>
  );
}

export default Shop;