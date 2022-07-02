import { useState } from 'react';
import { useDispatch } from 'react-redux';


import Main from '../../layouts/Main/Main';
import Header from '../../components/Header/Header';
import LandingPageOptions from '../../components/LandingPage/LandingPageOptions';

import SvgIcon from '../../utils/SvgIcon/SvgIcon';
import styles from './LandingPageCard.module.css';

import Button from '../../utils/Button/Button';
import Actions from '../../layouts/Actions/Actions';
import quizActions from '../../store/quiz-actions';
import {LandingPage} from "../../pages/LandingPage/LandingPage";

const LandingPageCard = (props) => {

  const [selectedQuiz, setSelectedQuiz] = useState('');
  const dispatch = useDispatch();

  const selectQuizHandler = (quiz) => {
    setSelectedQuiz(quiz);
  };


  const submitHandler = () => {
    dispatch(quizActions.startQuiz(selectedQuiz));
  };


  return (
    <div
      className={`${styles.card} ${props.selected ? styles.cardSelected : ''}`}
      onClick={props.onClick}
    >
      <div className={`${styles.topic}`}>
        <SvgIcon icon={props.icon} className={styles.icon} />
        <p className='text'>{props.text}</p>
      </div>
      <div className={`${styles.start}`}>
      <Actions>
        <Button
          disabled={props.selectedQuiz === ''}
          onClick={submitHandler}
          color='yellow'
          // style={'background-color : #e17d00; color:#e17d00'}
        >
          Start Quiz&nbsp;&nbsp;&nbsp;&#10148;
        </Button>
      </Actions>
      </div>
    </div>
  );
};

export default LandingPageCard;
