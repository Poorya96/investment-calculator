// This function expects a JS object as an argument
// The object should contain the following properties
// - Intial_investment: The initial investment amount
// - Annual_investment: The amount invested every year
// - Expected_Return: The expected (annual) rate of return
// - Duration: The investment Duration (time frame)
export function calculateInvestmentResults({
  Intial_investment,
  Annual_investment,
  Expected_Return,
  Duration,
}) {
  const annualData = [];
  let investmentValue = Intial_investment;

  for (let i = 0; i < Duration; i++) {
    const interestEarnedInYear = investmentValue * (Expected_Return / 100);
    investmentValue += interestEarnedInYear + Annual_investment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      Annual_investment: Annual_investment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
