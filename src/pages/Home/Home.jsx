import useFakeStoreAPI from '../../hooks/useFakeStoreAPI';
import headerImg from '../../assets/header.jpg';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <h1 className="logo">eShop</h1>
      <div className={css.innerContainer}>
        <p>Style that Speaks, Deals that Delight</p>
        <p>Your journey to fabulous finds begins here.<br />Happy Shopping!</p>
      </div>
      <img
        src={headerImg}
        alt=""
        className={css.img}
        aria-hidden="true"
      />
    </div>
  );
}

export default Home;