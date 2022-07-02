import styles from './Button.module.css';

const Button = (props) => {
  const style = {};

  if (props.color) {
    style['--current-color'] = `var(--color-${props.color})`;
    style['--current-color-lighter'] = `var(--color-${props.color}-lighter)`;
    style['--current-color-darker'] = `var(--color-${props.color}-darker)`;
  }

  let className = styles.button;
  if (props.white) {
    className += ' ' + styles.buttonWhite;
  }
  if (props.big) {
    className += ' ' + styles.buttonBig;
  }
  if (props.className) {
    className += ' ' + props.className;
  }

  return (
    <button
      className={className}
      style={style}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
