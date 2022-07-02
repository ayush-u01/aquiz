import styles from './Header.module.css';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{props.heading}</h1>
      {props.description && (
        <p className={styles.description}>{props.description}</p>
      )}
    </header>
  );
};

export default Header;
