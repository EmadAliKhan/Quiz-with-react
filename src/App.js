// import {useState} from 'react'
// const App = ()=>{
  //   const [count,setCount] = useState(0)
  //   let questionData = [{
    //     question : "What is the Full Form of HTML?",
    //     options : ['Hyper Text Makeup Language','Hyper Text Markup Language','Hyper Text Markup Lame','HyperTate Markup Language'],
//     answer : "Hyper Text Markup Language"
// },
// {
  //     question : "What does CSS stands for?",
  //     options : ['Common Style Sheet','Colorful Style Sheet','Computer Style Sheet','Cascading Style Sheet'],
  //     answer : "Cascading Style Sheet"
  // },
  // {
//     question : "What does PHP stands for?",
//     options : ['Hypertext preprocessor','Hypertext programming','Hypertext popup','Hypertact preprocessor'],
//     answer : "Hypertext preprocessor"
// },
// {
  //     question : "What does SQL stands for?",
//     options : ['Stylish Question Language','Stylesheet Query Language','Statement Question Language','Structured Query Language'],
//     answer : "Structured Query Language"
// },
// {
  //     question : "What was JavaScript launched?",
  //     options : ['1996','1995','1994','None of the above'],
  //     answer : "1995"
  // },
  // ];
  // let score = 0
  // const nextQuestonHandler = ()=>{
//   if (count < questionData.length - 1) {
//     setCount((count)=>count+1)
//   }else{
  //     console.log("score is...",score);
  //     alert("score is..."+score)
  //   }
  // }
  // const checkAns = (userSelectedAns)=>{
    // // console.log("answer");
    
    //   if(userSelectedAns === questionData[count].answer){
      //       setCount((score)=>score+1)
      //   }
      //   nextQuestonHandler()
      // }
      // return(
        //   <div>
        // <h1>Quiz App</h1>
// <h2>Question Count</h2>
//   <h1>{questionData[count].question}</h1>
//   <button style={{backgroundColor:"red"}} onClick={(e)=>checkAns(e)}>{questionData[count].options}</button>
//   <button onClick={nextQuestonHandler}>Next</button>  


//   </div>
// )
// }

// export default App;

import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const questionData = [
    {
      question: "1. What is the Full Form of HTML?",
      options: ['Hyper Text Makeup Language', 'Hyper Text Markup Language', 'Hyper Text Markup Lame', 'HyperTate Markup Language'],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "2. What does CSS stand for?",
      options: ['Common Style Sheet', 'Colorful Style Sheet', 'Computer Style Sheet', 'Cascading Style Sheet'],
      answer: "Cascading Style Sheet"
    },
    {
      question: "3. What does PHP stand for?",
      options: ['Hypertext preprocessor', 'Hypertext programming', 'Hypertext popup', 'Hypertact preprocessor'],
      answer: "Hypertext preprocessor"
    },
    {
      question: "4. What does SQL stand for?",
      options: ['Stylish Question Language', 'Stylesheet Query Language', 'Statement Question Language', 'Structured Query Language'],
      answer: "Structured Query Language"
    },
    {
      question: "5. When was JavaScript launched?",
      options: ['1996', '1995', '1994', 'None of the above'],
      answer: "1995"
    },
  ];

  const nextQuestionHandler = () => {
    if (count < questionData.length - 1) {
      setCount(count + 1);
    } else {
      alert("your score is===>"+ score)
    }
  };

  const checkAnswer = (userSelectedAns) => {
    if (userSelectedAns === questionData[count].answer) {
      setScore(score + 1);
    }
    nextQuestionHandler();
  };
  
  return (
    <div>
        <div>
          <div className='QuizApp'>
      <h1>Quiz App</h1>
          </div>       
        </div>
        <div className='fatherCount'>
          <div className='questionCount'>
      <h2>Question Count: {count + 1} / {questionData.length}</h2>
          </div>
          <hr/>
          <div className='question'>
      <h1>{questionData[count].question}</h1>
    </div>
        </div><br/>
        <div className='fatherOptions'>
      {questionData[count].options.map((option, index) => (
        <button className='options' key={index} onClick={() => checkAnswer(option)}>
          {option}
        </button>
      ))}
        </div>
        <div  className='NextBtn'>
      <button onClick={nextQuestionHandler} className='next'>Next</button>
        </div>
      </div>
    
  );
};

export default App;
