import css from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={css.container}>
      <h1>404 - Page Not Found</h1>
      <p>We're sorry, but the page you are looking for cannot be found.</p>
    </div>
  );
}

export default NotFound;