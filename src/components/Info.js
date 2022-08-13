import React from "react";
import "../Styles/Info/info.css";
export default function Info() {
  const myQuizs = [
    {
      title: "Logical",
      played: 3,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Math",
      played: 6,
      questions: 22,
      author: "Islom",
    },
    {
      title: "Logos",
      played: 2,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Cars",
      played: 13,
      questions: 23,
      author: "Islom",
    },
    {
      title: "Computers",
      played: 3,
      questions: 12,
      author: "Islom",
    },
    {
      title: "English",
      played: 34,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Animals",
      played: 7,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Pubg",
      played: 8,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Minecraft",
      played: 3,
      questions: 12,
      author: "Islom",
    },
    {
      title: "Logical",
      played: 3,
      questions: 12,
      author: "Islom",
    },
  ];
  return (
    <div className="infoWrapper">
      <h2>My Quizs</h2>
      <div className="blueLine"></div>
      {myQuizs.map((quiz) => (
        <div className="quizBox">
          <div className="quizCountBox">
            <h5>{quiz.questions} </h5>
            <h5>Question</h5>
          </div>
          <div>
            <h4>{quiz.title}</h4>
            <div className="quizFooter">
              <p>{quiz.author}</p>
              <p>{quiz.played}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
