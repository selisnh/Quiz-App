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
  return (
    <BrowserRouter>
    <div className="app" >
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home name={name} setName={setName}/>
        </Route>
        <Route path="/Quiz" exact>
          <Quiz/>
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
