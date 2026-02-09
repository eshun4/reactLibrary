import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [useInput, setInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
  });

  const inputIsValid = useInput.duration >= 1;
  
   const onChangeHandler = (inputIdentifier, newValue) => {
        setInput((prevInput) => {
            return {
                ...prevInput,
                [inputIdentifier]: +newValue
            }
        });
   }
  
  return (
    <>
    <Header />
      <UserInput onChangeInput={onChangeHandler} userInput={useInput} />
      {!inputIsValid && <p className="center"> Please enter duration greater than zero.</p>}
      {inputIsValid && <Results input={useInput} /> }
      
    </>
    
  );
}

export default App
