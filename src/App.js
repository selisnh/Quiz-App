import axios from 'axios';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import Quiz from './Pages/Quiz/Quiz';
import Result from './Pages/Result/Result';

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    )
    
    setQuestions(data.results);
  };

  return (
    <BrowserRouter>
    <div className="app" >
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
        </Route>
        <Route path="/Quiz" exact>
          <Quiz
            name={name}
            questions={questions}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
            />
        </Route>
        <Route path="/Result" exact>
          <Result/>
        </Route>
      </Switch>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
