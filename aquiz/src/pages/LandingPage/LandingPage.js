import { useState } from 'react';
import { useDispatch } from 'react-redux';

import Main from '../../layouts/Main/Main';
import Header from '../../components/Header/Header';
import LandingPageOptions from '../../components/LandingPage/LandingPageOptions';
import Button from '../../utils/Button/Button';
import Actions from '../../layouts/Actions/Actions';
import quizActions from '../../store/quiz-actions';
import { useAuth0 } from "@auth0/auth0-react";

import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";

const LandingPage = () => {
  const [selectedQuiz, setSelectedQuiz] = useState('');
  const dispatch = useDispatch();

  const selectQuizHandler = (quiz) => {
    setSelectedQuiz(quiz);
  };

  // const submitHandler = () => {
  //   dispatch(quizActions.startQuiz(selectedQuiz));
  // };

  return (
    <Main>
        {/* <LoginButton />
       <LogoutButton /> */}
      <Header
        heading='Pick a quiz to begin'
      />
      <LandingPageOptions
        selectedQuiz={selectedQuiz}
        onSelectQuiz={selectQuizHandler}
      />
      {/* <Actions> */}
        {/* <Button
          disabled={selectedQuiz === ''}
          onClick={submitHandler}
          color='yellow'
          // style={'background-color : #e17d00; color:#e17d00'}
        >
          Start Quiz&nbsp;&nbsp;&nbsp;&#10148;
        </Button> */}
      {/* </Actions> */}
    </Main>
  );
};

export default LandingPage;
