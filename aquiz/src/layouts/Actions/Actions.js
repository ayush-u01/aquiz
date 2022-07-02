import styles from './Actions.module.css';

const Actions = (props) => {
  let className = styles.actions;

  if (props.align === 'left') {
    className += ' ' + styles.actionsLeft;
  } else if (props.align === 'right') {
    className += ' ' + styles.actionsRight;
  }

  return <div className={className}>{props.children}</div>;
};

export default Actions;
