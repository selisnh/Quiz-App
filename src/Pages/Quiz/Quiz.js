import { useEffect, useState } from 'react';

const Quiz = ({name, questions, score, setScore, setQuestions}) => {
  const [options, setOptions] = useState();
  const [currentQuest, setCurrentQuest] = useState(0);

  useEffect(() => {
    console.log(questions);

    setOptions(questions &&
      handleShuffle([
        questions[currentQuest]?.correct_answer,
        ...questions[currentQuest]?.incorrect_answer,
      ])
    );
  }, [questions]);

  console.log(options);

  const handleShuffle=(option)=>{
    return option.sort(()=> Math.random()-0.5);
  };

  return <div>Quiz Page</div>;
};

export default Quiz;
