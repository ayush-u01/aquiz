import styles from './QuizEachOption.module.css';

const QuizEachOption = (props) => {
  let className = styles.option;

  if (props.unclickable) {
    className += ' ' + styles.optionUnclickable;
  }

  if (props.option.status === 'selected') {
    className += ' ' + styles.optionSelected;
  } else if (props.option.status === 'rejected') {
    className += ' ' + styles.optionRejected;
  } else if (props.option.status === 'actual') {
    className += ' ' + styles.optionActual;
  }

  return (
    <button
      key={className}
      className={className}
      onClick={props.onSelectOption}
    >
      <div className={styles.optionCnt}>{props.option.alias}</div>
      <div className={styles.optionValue}>{props.option.text}</div>
    </button>
  );
};

export default QuizEachOption;
