import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    Intial_investment: 10000,
    Annual_investment: 1200,
    Expected_Return: 6,
    Duration: 10,
  });

  const inputIsValid = userInput.Duration >= 1;

  function handleChange(inputIdentifier, newvalue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newvalue,
      };
    });
  }
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please enter a valid duration</p>}
      {inputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;
