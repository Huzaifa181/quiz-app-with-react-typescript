import React from 'react';
import {Wrapper, ButtonWrapper} from './QuestionCard.styles'
type Props={
    question:string;
    answers:string[];
    callback:any;
    userAnswer:any;
    questionNumber:number;
    totalQuestions:number
}

export const QuestionCard:React.FC<Props>=({question, answers, callback, userAnswer, questionNumber, totalQuestions})=>{
  return (
    <Wrapper className="QuestionCard">
     <p>Question: {questionNumber} / {totalQuestions}</p>
     <p dangerouslySetInnerHTML={{__html: question}}/>
     <div>
       {answers.map(answer=>{
         return(
           <ButtonWrapper
            correct={userAnswer?.correctAnswer===answer}
            userClicked={userAnswer?.answer===answer}
           >
             <button disabled={userAnswer} value={answer} onClick={callback}>
               <span dangerouslySetInnerHTML={{__html:answer}}/>
             </button>
           </ButtonWrapper>
         )
       })}
     </div>
    </Wrapper>
  );
}
