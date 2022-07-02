import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Main from '../../layouts/Main/Main';
import QuizProgress from '../../components/Quiz/QuizProgress';
import Timer from '../../components/Timer/Timer';
import QuizQuestion from '../../components/Quiz/QuizQuestion';
import QuizOptions from '../../components/Quiz/QuizOptions';
import Button from '../../utils/Button/Button';
import Actions from '../../layouts/Actions/Actions';
import useTimer from '../../hooks/useTimer';
import quizActions from '../../store/quiz-actions';

import Disqus from "disqus-react"
import { DiscussionEmbed } from 'disqus-react';


const Quiz = () => {
  const {
    startTimestamp,
    durationMs,
    currentQuestion,
    currentQuestionNum,
    totalCnt,
    progress,
  } = useSelector((state) => {
    return {
      startTimestamp: state.startTimestamp,
      durationMs: state.durationMs,
      currentQuestion: state.questions[state.currentQuestionNum - 1],
      currentQuestionNum: state.currentQuestionNum,
      totalCnt: state.questions.length,
      progress: state.questions.map((question, idx) => {
        if (idx === state.currentQuestionNum - 1) return 'current';
        if (question.selectedOption) return 'attempted';
        if (question.visited) return 'visited';
        return '';
      }),
    };
  });

  const options = currentQuestion.options.map((option, idx) => ({
    text: option,
    status: idx === currentQuestion.selectedOption - 1 ? 'selected' : '',
    alias: String.fromCharCode(idx + 65),
  }));

  const dispatch = useDispatch();
  const timer = useTimer(durationMs, startTimestamp);

  useEffect(() => {
    if (timer <= 0) {
      dispatch(quizActions.endTest());
    }
  }, [timer, dispatch]);

  const selectOptionHandler = (option) => {
    dispatch(
      quizActions.markOption({
        questionNum: currentQuestionNum,
        option,
      })
    );
  };

  const moveToPrevHandler = () => {
    dispatch(quizActions.changeCurrent(currentQuestionNum - 1));
  };

  const moveToNextHandler = () => {
    dispatch(quizActions.changeCurrent(currentQuestionNum + 1));
  };

  const endTestHandler = () => {
    if (window.confirm('Are you sure you want to end the quiz?')) {
      dispatch(quizActions.endTest());
    }
  };


  return (
    <Main>
      <QuizProgress progress={progress} />
      <Timer timer={timer} alertThreshold={5 * 60 * 1000} />
      <QuizQuestion
        text={currentQuestion.question}
        currentNum={currentQuestionNum}
        totalCnt={totalCnt}
      />
      <QuizOptions options={options} onSelectOption={selectOptionHandler} />
      <Actions align='right'>
        {currentQuestionNum > 1 && (
          <Button color='red' onClick={moveToPrevHandler}>
            &larr; Prev
          </Button>
        )}
        {currentQuestionNum < totalCnt && (
          <Button color='blue' onClick={moveToNextHandler}>
            Next &rarr;
          </Button>
        )}
        {currentQuestionNum === totalCnt && (
          <Button color='blue' onClick={endTestHandler}>
            End Quiz
          </Button>
        )}
      </Actions>

      <DiscussionEmbed
        shortname='aquiz'
        config={
            {
                url:'http://localhost:3000/',
                identifier: '',
                title: '',
                language: 'en' //e.g. for Traditional Chinese (Taiwan)	
            }
      }/>

    </Main>
  );
};

export default Quiz;
