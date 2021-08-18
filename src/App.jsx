import './App.css';
import Trivia from "./Components/Trivia";
import Timer from "./Components/Timer";
import Start from "./Components/Start";
import { useState, useEffect } from 'react';

function App() {
  const [ questionNumber, setQuestionNumber ] = useState(1);
  const [ timeOut, setTimeOut ] = useState(false);
  const [ username, setUserName ] = useState(null);
  const [ stop, setStop ] = useState(false);
  const [ earned, setEarned ] = useState("R 0");

  const moneyPyramid = [
    { id : 1, amount : "R 100" },
    { id : 2, amount : "R 200" },
    { id : 3, amount : "R 300" },
    { id : 4, amount : "R 400" },
    { id : 5, amount : "R 1 500" },
    { id : 6, amount : "R 1 600" },
    { id : 7, amount : "R 20 000" },
    { id : 8, amount : "R 22 000" },
    { id : 9, amount : "R 25 000"},
    { id : 10, amount : "R 30 000" },
    { id : 11, amount : "R 35 000" },
    { id : 12, amount : "R 64 000" },
    { id : 13, amount : "R 70 000" },
    { id : 14, amount : "R 25 0000" },
    { id : 15, amount : "R 1 000 000" },
  ].reverse();

  useEffect(()=>{
    questionNumber > 1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount);
  }, [moneyPyramid, questionNumber]);

  const data = [
    { 
      id: 1,
      question: "How many languages is recognised in South Africa?",
      answer : [
        { text: "9",
          correct: false
        },
        { text: "8",
          correct: false
        },
        { text: "11",
          correct: true
        },
        { text: "14",
          correct: false
        }
      ]
    },
    { 
      id: 2,
      question: "How many state capitals are there in South Africa?",
      answer : [
        { text: "4",
          correct: false
        },
        { text: "6",
          correct: false
        },
        { text: "3",
          correct: true
        },
        { text: "2",
          correct: false
        }
      ]
    },
    { 
      id: 3,
      question: "Which famous explorer visited Durban in 1497?",
      answer : [
        { text: "David Livingstone",
          correct: false
        },
        { text: "David Rockerfeller",
          correct: false
        },
        { text: "Vasco Da Gama",
          correct: true
        },
        { text: "Leonardo Da Vinci",
          correct: false
        }
      ]
    },
    { 
      id: 4,
      question: "Do you know what Soweto stands for?",
      answer : [
        { text: "South West Town",
          correct: false
        },
        { text: "South African Western Town",
          correct: false
        },
        { text: "Soggy Western Town",
          correct: false
        },
        { text: "South Western Townships",
          correct: true
        }
      ]
    },
    { 
      id: 5,
      question: "How many provinces is in South Africa?",
      answer : [
        { text: "9",
          correct: true
        },
        { text: "3",
          correct: false
        },
        { text: "8",
          correct: false
        },
        { text: "5",
          correct: false
        }
      ]
    },
    { 
      id: 6,
      question: "What slang is used when there is elecricity restriction in South Africa?",
      answer : [
        { text: "Eskom",
          correct: true
        },
        { text: "Cut Off",
          correct: false
        },
        { text: "Darkness",
          correct: false
        },
        { text: "Loadshedding",
          correct: false
        }
      ]
    },
    { 
      id: 7,
      question: "What is  Bokkoms?",
      answer : [
        { text: "Biltong",
          correct: false
        },
        { text: "dry chicken meat",
          correct: false
        },
        { text: "dry salted fish",
          correct: true
        },
        { text: "Raisins",
          correct: false
        }
      ]
    },
    { 
      id: 8,
      question: "Everybody loves a lekker potjie. What is a potjie?",
      answer : [
        { text: "A type of stew",
          correct: true
        },
        { text: "A pot",
          correct: false
        },
        { text: "A barberque",
          correct: false
        },
        { text: "Any meat",
          correct: false
        }
      ]
    }
  ];

  
  return (
    <div className="app">
      <div className="main">
        {stop? <h1 className="endText">You earned: {earned}</h1> : (
        <>
          <div className="top">
            <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber} /></div>
          </div>
          <div className="bottom">
          <Trivia data={data} 
          setTimeOut={setTimeOut} 
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
          </div>
        </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList"> 
          {moneyPyramid.map((moneylist) => (
            <li className={questionNumber === moneylist.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{moneylist.id}</span> 
            <span className="moneyListItemAmount">{moneylist.amount}</span>          
          </li>
        ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
