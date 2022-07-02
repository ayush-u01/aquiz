import { useDispatch } from 'react-redux';

import QuizProgressEach from './QuizProgressEach';
import styles from './QuizProgress.module.css';
import quizActions from '../../store/quiz-actions';

const QuizProgress = (props) => {
  const dispatch = useDispatch();

  const clickHandler = (questionNum) => {
    dispatch(quizActions.changeCurrent(questionNum));
  };

  return (
    <div className={styles.progress}>
      {props.progress.map((progress, idx) => (
        <QuizProgressEach
          progress={progress}
          key={idx + 1}
          onClick={clickHandler.bind(null, idx + 1)}
        >
          {idx + 1}
        </QuizProgressEach>
      ))}
    </div>
  );
};

export default QuizProgress;
