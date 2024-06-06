import { useState } from "react";

export default function UserInput() {
  const [UserInput, setUserInput] = useState({
    Intial_investment: 10000,
    Annual_investment: 1200,
    Expected_Return: 6,
    Duration: 10,
  });

  function handleChange(inputIdentifier, newvalue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newvalue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label for="Intial_investment">Intial Investment</label>
          <input
            type="number"
            required
            id="Intial_investment"
            name="Intial Investment"
            value={UserInput.Intial_investment}
            onChange={(event) =>
              handleChange("Intial_investment", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label for="Annual_investment">Annual Investment</label>
          <input
            type="number"
            required
            id="Annual_investment"
            name="Annual Investment"
            value={UserInput.Annual_investment}
            onChange={(event) =>
              handleChange("Annual_investment", event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label for="Expected_Return">Expected Return</label>
          <input
            type="number"
            required
            id="Expected_Return"
            name="Expected Return"
            value={UserInput.Expected_Return}
            onChange={(event) =>
              handleChange("Expected_Return", event.target.value)
            }
          ></input>
        </p>
        <p>
          <label for="Duration">Duration</label>
          <input
            type="number"
            required
            id="Duration"
            name="Duration"
            value={UserInput.Duration}
            onChange={(event) => handleChange("Duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
