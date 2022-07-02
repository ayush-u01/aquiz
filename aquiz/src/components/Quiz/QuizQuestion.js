import styles from './QuizQuestion.module.css';

const QuizQuestion = (props) => {
  return (
    <div className={styles.question}>
      <div className={styles.questionNum}>
        {props.currentNum} % {props.totalCnt}
      </div>
      {props.text}
    </div>
  );
};

export default QuizQuestion;
