// ChatBot.js
import React, { useState } from "react";
import "./Chat.scss";
import Ai from "../../assets/icons/chat-blue.svg";

const Chat = () => {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const toggleWidget = () => {
    setWidgetVisible((prevState) => !prevState);
  };
  const handleClose = () => {
    setWidgetVisible(false);
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (index) => {
    setSelectedQuestion(index);
  };

  const questions = [
    {
      question: "Can I stream unlimited Movies?",
      answer: "Yes you can! You can stream from anywhere at any time",
    },
    {
      question: "Can I watch on any device?",
      answer:
        "Yes you can! Simply select your movie /tvshow on any device and start streaming",
    },
    {
      question: "How much does Afroflix cost?",
      answer: "Plans range from $5.99 to $9.99 per month",
    },
    {
      question: "Have questions about your account?",
      answer: "Email info@afroflix.com",
    },
    {
      question: "Can I upgrade my account?",
      answer: "Accounts can be upgraded in your profile dashboard.",
    },
    {
      question: "Refunds.",
      answer: "Refunds are only available if contacted prior billing date.",
    },
  ];

  return (
    <div className={`chat-widget ${widgetVisible ? "visible" : ""}`}>
      {widgetVisible ? (
        <div className="chat-container">
          <div className="chat-history">
            <div className="close-icon" onClick={handleClose}>
              X
            </div>
            {questions.map((question, index) => (
              <div
                key={index}
                className={`message question ${
                  selectedQuestion === index ? "selected" : ""
                }`}
                onClick={() => handleQuestionClick(index)}
              >
                {question.question}
              </div>
            ))}
          </div>
          {selectedQuestion !== null && (
            <div className="message answer">
              {questions[selectedQuestion].answer}
            </div>
          )}
        </div>
      ) : (
        <div className="widget-icon" onClick={toggleWidget}>
          <img src={Ai} alt="AI Widget" />
        </div>
      )}
    </div>
  );
};

export default Chat;
