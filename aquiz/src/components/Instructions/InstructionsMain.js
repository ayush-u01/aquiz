import { useSelector } from 'react-redux';
import ms from 'ms';
import QuizProgressEach from '../Quiz/QuizProgressEach';
import styles from './Instructions.module.css';

const InstructionsMain = () => {
  const { totalCnt, duration } = useSelector((state) => {
    return {
      totalCnt: state.questions.length,
      duration: ms(state.durationMs, { long: true }),
    };
  });

  return (
    <ol className={styles.list}>
      <li>This quiz consists of {totalCnt} questions.</li>
      <li>You have {duration} of time.</li>
      <li>
        The top panel displays your progress
        <ul className={styles.listInner}>
          <li>
            <QuizProgressEach>4</QuizProgressEach> is the question you have not
            visited.
          </li>
          <li>
            <QuizProgressEach progress='visited'>4</QuizProgressEach> is the
            question you have visited but not attempted.
          </li>
          <li>
            <QuizProgressEach progress='attempted'>4</QuizProgressEach> is the
            question you have attempted.
          </li>
          <li>
            <QuizProgressEach progress='current'>4</QuizProgressEach> is the
            question you are currently at.
          </li>
        </ul>
      </li>
      <li>Click on begin test to begin test.</li>
      <li>
        If you test was closed due to some uncertain circumstances, you can
        rebegin the test. But your time will not stop.
      </li>
      <li>All the best for your quiz.</li>
    </ol>
  );
};

export default InstructionsMain;
