import styles from './Main.module.css';

const Main = (props) => {
  let outerClassName = styles.mainOuter;

  if (props.colored) {
    outerClassName += ' ' + styles.colored;
  }

  return (
    <div className={outerClassName}>
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export default Main;
