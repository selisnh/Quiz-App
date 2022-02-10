import { useEffect } from "react";
import { useHistory } from "react-router";
import {Button} from "@material-ui/core";
import './Result.css';

const Result = ({name, score}) => {

  const history = useHistory();

  useEffect(() => {
    if(!name){
      history.push("/")
    }
  }, [name, history])
  
  return <div className="result">
    <span className="score">
      Final Score : {score}
      </span>
      {
        score> 5?
        <div className="win">
            Yay!!!🎉<br />
            <img src="./celebrate.gif" alt="celebrating gif" width="50%"/>
        </div>:
        <div className="lost">
          Oops!! Better luck next time☹️ 
        </div>
      }
    <Button
        variant="contained"
        color= "secondary"
        size="large"
        style={{ alignSelf: "center", marginTop:20}}
        href="/" >
          Go to Homepage
        </Button>

  </div>;
};

export default Result;
