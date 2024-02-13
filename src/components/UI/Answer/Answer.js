import { useState, useEffect } from 'react';
import AnswerButton from './AnswerButton/AnswerButton';

const Answer = ({ answer, quizAnswer, page }) => {
  const [playerAnswer, setPlayerAnswer] = useState('undecided');
  const [currPage, setCurrPage] = useState(1);

  useEffect(() => {
    if (currPage !== page) {
      setPlayerAnswer('undecided');
      setCurrPage(page);
    }
  }, [page])

  const checkAnswer = () => {
    const isCorrect = quizAnswer.title === answer || quizAnswer.artist === answer;
    setPlayerAnswer(isCorrect ? 'correct' : 'wrong');
  };

  return (
    <AnswerButton
      answer={answer}
      checkAnswer={checkAnswer}
      playerAnswer={playerAnswer}
    />
  );
};

export default Answer;