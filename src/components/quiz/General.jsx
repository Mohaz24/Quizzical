import { React, useState, useEffect } from "react";
import { Link} from "react-router-dom";
import { nanoid } from "nanoid";
import { decode } from "html-entities";
import { InfinitySpin } from "react-loader-spinner";

export default function General() {
  const [quiz, setQuiz] = useState([]);
  const [isTrue, setisTrue] = useState(false);
  const [score, setScore] = useState(0);
  const [loadbtn, setloadbtn] = useState(false);
  const [showAnswers, setShowAnwers] = useState(false);



  useEffect(() => {
    handleClick();
  }, []);

  function allTypeOfAnswers(answers) {
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  }

  function handleClick() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => {
        setloadbtn(true);
        setQuiz(
          data.results.map((quiz) => {
            const correctAnswerObj = {
              id: nanoid(),
              answer: quiz.correct_answer,
            };
            const incorrectAnswerObj = quiz.incorrect_answers.map(
              (incorrectAnswerItem) => ({
                id: nanoid(),
                answer: incorrectAnswerItem,
              })
            );

            const answersArr = [correctAnswerObj, ...incorrectAnswerObj];
            const shuffleAnswers = allTypeOfAnswers(answersArr);

            return {
              id: nanoid(),
              questions: decode(quiz.question),
              answers: decode(shuffleAnswers),
              selectedAnswer: "",
              correctAnswer: correctAnswerObj,
            };
          })
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    const correctAnswers = quiz.filter((quiz) => quiz.isHeld);
    setScore(correctAnswers.length);
  }, [quiz]);

  function checkAnswer() {
    if (showAnswers) {
      setQuiz((oldValue) => {
        return oldValue.map((quiz) => {
          return quiz.selectedAnswer === quiz.correctAnswer.answer
            ? { ...quiz, isHeld: true }
            : quiz;
        });
      });
      setisTrue(true);
    }
  }

  function playAgain() {
    setQuiz([]);
    handleClick();
    setisTrue(false);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    if (value) {
      setQuiz((oldValue) => {
        return oldValue.map((quiz) => {
          return quiz.id === name
            ? { ...quiz, selectedAnswer: value }
            : { ...quiz, isHeld: false };
        });
      });
      setShowAnwers(true);
    }
  }

  const quizElement = quiz.map((ans) => {
    const answers = ans.answers.map((quiz) => {
      const styles = {
        backgroundColor:
          !isTrue && quiz.answer === ans.selectedAnswer
            ? "#D6DBF5"
            : isTrue && quiz.answer === ans.correctAnswer.answer
            ? "#94D7A2"
            : isTrue &&
              quiz.answer !== ans.correctAnswer.answer &&
              quiz.answer === ans.selectedAnswer
            ? "#F8BCBC"
            : isTrue &&
              quiz.answer !== ans.correctAnswer.answer &&
              quiz.answer !== ans.selectedAnswer
            ? "#F5F7FB"
            : "",

        border:
          (isTrue && quiz.isHeld === ans.correctAnswer.answer) ||
          (isTrue &&
            quiz.isHeld !== ans.correctAnswer.answer &&
            quiz.isHeld === ans.selectedAnswer)
            ? "none"
            : "",

        opacity:
          (isTrue &&
            quiz.answer !== ans.correctAnswer.answer &&
            quiz.answer !== ans.selectedAnswer) ||
          (isTrue &&
            quiz.answer !== ans.correctAnswer.answer &&
            quiz.answer === ans.selectedAnswer)
            ? "0.5"
            : "",
      };
      return (
        <div className="quiz-answers-ct" key={quiz.id}>
          <label style={styles} htmlFor={quiz.id}>
            {quiz.answer}

            <input
              type="radio"
              name={ans.id}
              value={quiz.answer}
              id={quiz.id}
              onChange={(event) => handleChange(event)}
            />
          </label>
        </div>
      );
    });
    return (
      <div className="quiz-ct" key={ans.id}>
        <p>{ans.questions} </p>
        <section>{answers}</section>
        <div className="quiz-borders"></div>
      </div>
    );
  });

  return (
    <div>
      <Link to="/quiz" className="return-home-link">
        {" "}
        &larr; back to Quizzical
      </Link>
      <div> {quizElement} </div>
      {loadbtn ? (
        <div className="quiz-answers-scores">
          {isTrue && (
            <p className="ct-score">You scored {score}/5 correct answers</p>
          )}
          <button onClick={isTrue ? playAgain : checkAnswer}>
            {isTrue ? "Play again" : "Check Answer"}
          </button>
        </div>
      ) : (
        <div className="loader">
          <InfinitySpin className="icon" width="200" color="#293264" />
        </div>
      )}
    </div>
  );
}
