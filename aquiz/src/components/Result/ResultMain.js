import { useDispatch, useSelector } from 'react-redux';

import Progress from '../Progress/Progress';
import Button from '../../utils/Button/Button';
import styles from './ResultMain.module.css';
import quizActions from '../../store/quiz-actions';

const ResultMain = (props) => {
  const { quizName, totalCnt, correctCnt } = useSelector((state) => {
    return {
      quizName: state.quizName,
      totalCnt: state.questions.length,
      correctCnt: state.questions.reduce(
        (cnt, { correctOption, selectedOption }) =>
          cnt + (correctOption === selectedOption ? 1 : 0),
        0
      ),
    };
  });

  const dispatch = useDispatch();

  const playAgainHandler = () => {
    dispatch(quizActions.clearTest());
  };

  return (
    <>
      <h1 className={styles.heading}>
        <span className={styles.headingTop}>Kudos</span>
        <span className={styles.headingMain}>Completed</span>
        <span className={styles.headingBottom}>The {quizName} Quiz</span>
      </h1>
      <div className={styles.progress}>
        <Progress
          percentage={Math.round((correctCnt / totalCnt) * 100)}
          styles={{
            pathColor: 'var(--color-yellow-light)',
            trailColor: 'var(--color-grey-light-4)',
            textColor: 'var(--color-grey-light-1)',
          }}
        />
      </div>
      <div className={styles.summary}>
        Solved {correctCnt} / {totalCnt}
      </div>
      <div className={styles.actions}>
        <Button onClick={playAgainHandler} white big>
          Play Again
        </Button>
      </div>
      <button
        className={styles.showAnswers}
        onClick={props.onToggleShowAnswers}
      >
        See answers
      </button>
    </>
  );
};

export default ResultMain;
