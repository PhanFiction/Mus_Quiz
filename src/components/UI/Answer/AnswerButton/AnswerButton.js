const AnswerButton = ({ answer, checkAnswer, playerAnswer }) => {
  const answerColor = {
    'wrong': 'bg-dark-red',
    'correct': 'bg-green',
    'undecided': 'bg-cinereous',
  }

  return (
    <button
      onClick={() => checkAnswer(answer)}
      className={`text-left text-white 
        p-3 sm:p-2 rounded-lg drop-shadow-custom text-sm
        truncate
        ${answerColor[playerAnswer]}
      `}
    >
      { answer }
    </button>
  );
};

export default AnswerButton;