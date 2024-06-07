import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function handleChange(inputIdentifier, newvalue) {
  setUserInput((prevUserInput) => {
    return {
      ...prevUserInput,
      [inputIdentifier]: +newvalue,
    };
  });
}

function App() {
  const [userInput, setUserInput] = useState({
    Intial_investment: 10000,
    Annual_investment: 1200,
    Expected_Return: 6,
    Duration: 10,
  });
  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results userInput={userInput} />
    </>
  );
}

export default App;
