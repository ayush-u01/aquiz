import svgSprite from './icomoon/symbol-defs.svg';

const SvgIcon = (props) => {
  return (
    <svg className={props.className}>
      <use xlinkHref={`${svgSprite}#icon-${props.icon}`}></use>
    </svg>
  );
};

export default SvgIcon;
