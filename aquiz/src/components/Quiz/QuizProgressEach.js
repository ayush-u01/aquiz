import styles from './QuizProgressEach.module.css';

const QuizProgressEach = (props) => {
  let className = styles.progressEach;

  if (props.progress === 'current') {
    className += ' ' + styles.progressEachCurrent;
  } else if (props.progress === 'attempted') {
    className += ' ' + styles.progressEachAttempted;
  } else if (props.progress === 'visited') {
    className += ' ' + styles.progressEachVisited;
  }

  return (
    <span className={className} onClick={props.onClick}>
      {props.children}
    </span>
  );
};

export default QuizProgressEach;
