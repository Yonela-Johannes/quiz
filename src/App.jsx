import './App.css';
import Trivia from "./Components/Trivia";
import { useState } from 'react';

function App() {
  const [ questionNumber, setQuestionNumber ] = useState(1);
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

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer"> 30 </div>
        </div>
        <div className="bottom">
        <Trivia />
        </div>
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
