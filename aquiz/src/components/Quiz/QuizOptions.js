import QuizEachOption from './QuizEachOption';
import styles from './QuizOptions.module.css';

const Feeback = (props) => {
  let className = styles.feedback;

  if (props.type === 'danger') {
    className += ' ' + styles.feedbackDanger;
  } else if (props.type === 'success') {
    className += ' ' + styles.feedbackSuccess;
  }

  return <div className={className}>{props.children}</div>;
};

const QuizOptions = (props) => {
  let className = styles.options;

  if (props.white) {
    className += ' ' + styles.optionsWhite;
  }

  return (
    <div className={className}>
      <div className={styles.optionsMain}>
        {props.options.map((option, idx) => (
          <QuizEachOption
            key={idx + 1}
            option={option}
            onSelectOption={props.onSelectOption?.bind(null, idx + 1)}
            unclickable={props.unclickable}
          />
        ))}
      </div>
      {props.feedback && (
        <Feeback type={props.feedback.type}>{props.feedback.text}</Feeback>
      )}
    </div>
  );
};

export default QuizOptions;
