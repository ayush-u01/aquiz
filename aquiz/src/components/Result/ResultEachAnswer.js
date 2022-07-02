import QuizQuestion from '../../components/Quiz/QuizQuestion';
import QuizOptions from '../Quiz/QuizOptions';

const getStatus = (currentOption, correctOption, selectedOption) => {
  if (currentOption === selectedOption) {
    if (currentOption === correctOption) {
      return 'selected';
    }
    return 'rejected';
  }
  if (currentOption === correctOption) {
    return 'actual';
  }
  return '';
};

const getFeedback = (correctOption, selectedOption) => {
  const correctOptionAlias = String.fromCharCode(correctOption + 64);

  if (selectedOption === 0) {
    return {
      type: 'normal',
      text: `Unattempted! Option '${correctOptionAlias}' is the answer.`,
    };
  }

  if (correctOption === selectedOption) {
    return {
      type: 'success',
      text: `Correct! Option '${correctOptionAlias}' is correct.`,
    };
  }

  const selectedOptionAlias = String.fromCharCode(selectedOption + 64);

  return {
    type: 'danger',
    text: `Wrong! Option '${selectedOptionAlias}' is incorrect, Option '${correctOptionAlias} is the answer.`,
  };
};

const ResultEachAnswer = (props) => {
  const options = props.question.options.map((option, idx) => ({
    text: option,
    status: getStatus(
      idx + 1,
      props.question.correctOption,
      props.question.selectedOption
    ),
    alias: String.fromCharCode(idx + 65),
  }));

  const feedback = getFeedback(
    props.question.correctOption,
    props.question.selectedOption
  );

  return (
    <>
      <QuizQuestion
        text={props.question.question}
        currentNum={props.currentNum}
        totalCnt={props.totalCnt}
      />
      <QuizOptions options={options} feedback={feedback} white unclickable />
    </>
  );
};

export default ResultEachAnswer;
