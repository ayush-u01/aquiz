import { useDispatch } from 'react-redux';

import Main from '../../layouts/Main/Main';
import Header from '../../components/Header/Header';
import Timer from '../../components/Timer/Timer';
import InstructionsMain from '../../components/Instructions/InstructionsMain';
import Button from '../../utils/Button/Button';
import Actions from '../../layouts/Actions/Actions';
import quizActions from '../../store/quiz-actions';
import useTimer from '../../hooks/useTimer';

const Instructions = () => {
  const dispatch = useDispatch();
  const timer = useTimer(15 * 1000);

  const submitHandler = () => {
    dispatch(quizActions.beginQuiz());
  };

  return (
    <Main>
      <Header
        heading='General Instructions'
        description='Please read the general instructions carefully and then click on begin quiz to begin'
      />
      <Timer timer={timer} text={'To Start'} />
      <InstructionsMain />
      <Actions>
        <Button disabled={timer > 0} color='blue' onClick={submitHandler}>
          Begin Quiz&nbsp;&nbsp;&nbsp;&#10148;
        </Button>
      </Actions>
    </Main>
  );
};

export default Instructions;
