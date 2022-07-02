import { useSelector } from 'react-redux';
import ResultEachAnswer from './ResultEachAnswer';

const ResultAnswers = () => {
  const questions = useSelector((state) => state.questions);

  return (
    <>
      {questions.map((question, idx) => (
        <ResultEachAnswer
          key={idx + 1}
          question={question}
          currentNum={idx + 1}
          totalCnt={questions.length}
        />
      ))}
    </>
  );
};

export default ResultAnswers;
