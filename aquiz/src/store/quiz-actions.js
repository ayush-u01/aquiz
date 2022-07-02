import DbmsQuiz from '../data/DbmsQuiz.json';
import DsAlgoQuiz from '../data/DsAlgoQuiz.json';
import HtmlQuiz from '../data/HtmlQuiz.json';
import NodeQuiz from '../data/NodeQuiz.json';
import OsQuiz from '../data/OsQuiz.json';
import ReactQuiz from '../data/ReactQuiz.json';

import { quizActions } from './quiz-slice';

const quizData = (quizName) => {
  if (quizName === 'DBMS') {
    return DbmsQuiz;
  }
  if (quizName === 'Ds and Algo') {
    return DsAlgoQuiz;
  }
  if (quizName === 'HTML') {
    return HtmlQuiz;
  }
  if (quizName === 'Node.js') {
    return NodeQuiz;
  }
  if (quizName === 'OS') {
    return OsQuiz;
  }
  return ReactQuiz;
};

const actions = {
  ...quizActions,

  startQuiz(quizName) {
    return (dispatch) => {
      dispatch(
        quizActions.startQuiz({
          quizName,
          ...quizData(quizName),
        })
      );
    };
  },
};

export default actions;
