import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './Navbar.module.css';




const Navbar = () => {
  return (

    <nav className={styles.nav}>
      <SvgIcon icon='map' className={styles.icon} />
      <div className={styles.text}>Aquiz - The Ultimate Quiz App</div>
    </nav>
  );
};

export default Navbar;
