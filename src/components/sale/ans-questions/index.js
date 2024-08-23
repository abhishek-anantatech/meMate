import React, { useState } from "react";
import "./style.css";
import AddIcon from "@mui/icons-material/Add";
import { Box } from "@mui/material";

const QuestionAnswer = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(2);

  const questions = [
    { question: "What features does memate offer as a Sales Management Software?", key: 0 },
    { question: "How does memate enhance efficiency with its Sales Pipeline Management Tool?", key: 1 },
    { question: "What advantages does memate’s CRM Sales Tool offer for Small Businesses?", key: 2 },
    { question: "What advantages does memate’s CRM Sales Tool offer for Small Businesses?", key: 3 },
    { question: "Can memate be used for Sales Tracking in various industries?", key: 4 },
    { question: "What makes memate a reliable Lead Management Solution?", key: 5 },
    { question: "How does memate optimise business operations with its Sales Process Optimisation Software?", key: 6 },
    { question: "What is unique about memate’s Pipeline Management Software?", key: 7 },
    { question: "How can memate’s Sales Funnel for Small Business help in growth?", key: 8 },
    { question: "What features does memate include in its Sales Pipeline Software?", key: 9 },
    { question: "Why choose memate for Lead Management Software?", key: 10 },
  ];

  return (
    <div className="question-answer-wrapper">
      <div className="question-answer-content">
        <div className="question-answer-heading-wrapper">
          <p className="question-answer-heading">We answer your questions</p>
        </div>
        <div className="questions-wrapper">
          {questions.map((ques, index) => (
            <div
              key={index}
              className={`question-answer-ques ${selectedQuestion === index ? "selected" : ""}`}
              onClick={() => setSelectedQuestion(index)}
            >
              <p className="question-answer-ques-info">{ques.question}</p>
              <Box
                className="add-icon-wrapper"
                sx={{
                  height: "24px",
                  width: "24px",
                  color: selectedQuestion === index ? "linear-gradient(to right, #1AB2FF 33.15%, #FFB258 62%)" : "#000",
                }}
              >
                <AddIcon
                  sx={{
                    height: "100%",
                    width: "100%",
                  }}
                  htmlColor={selectedQuestion===index?"inherit":"black"}
                />
              </Box>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionAnswer;
