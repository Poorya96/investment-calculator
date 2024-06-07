export default function UserInput({ onChange, userInput }) {
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
            value={userInput.Intial_investment}
            onChange={(event) =>
              onChange("Intial_investment", event.target.value)
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
            value={userInput.Annual_investment}
            onChange={(event) =>
              onChange("Annual_investment", event.target.value)
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
            value={userInput.Expected_Return}
            onChange={(event) =>
              onChange("Expected_Return", event.target.value)
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
            value={userInput.Duration}
            onChange={(event) => onChange("Duration", event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  );
}
