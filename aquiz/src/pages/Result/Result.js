import { useState } from 'react';
import Main from '../../layouts/Main/Main';
import ResultMain from '../../components/Result/ResultMain';
import ResultAnswers from '../../components/Result/ResultAnswers';

const Result = () => {
  const [showAnswers, setShowAnswers] = useState(false);

  const toggleShowAnswersHandler = () => {
    setShowAnswers((prevShowAnswers) => !prevShowAnswers);
  };

  return (
    <Main colored>
      <ResultMain onToggleShowAnswers={toggleShowAnswersHandler} />
      {showAnswers && <ResultAnswers />}
    </Main>
  );
};

export default Result;
