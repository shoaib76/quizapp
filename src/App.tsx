import React, { useEffect } from 'react';
import { getQuaiDetails } from './services/Quiz_service';
import { Quiz, QuestionType } from './Types/quiz_types';
import './App.css';
import { useState } from 'react';
import { QuestionCard } from './Components/QuestionCard';

function App() {
  let [quiz, setQuiz] = useState<QuestionType[]>([]);
  let [currentStep, setCurrentStep] = useState(0);


  useEffect(() => {


    async function featchData() {

      const questions: QuestionType[] = await getQuaiDetails(5, 'easy');
      setQuiz(questions);
    }
    featchData();

  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (currentStep !== quiz.length - 1)
      setCurrentStep(++currentStep);
    else {
      alert("quiz complated")
      setCurrentStep(0)
    }

  }
  if (!quiz.length)
    return <h3>Loading...</h3>
  return (
    <div className="App">
      <QuestionCard
        options={quiz[currentStep].option}
        question={quiz[currentStep].question}
        callback={handleSubmit}
      />
    </div>
  );
}

export default App;
