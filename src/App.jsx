import { useState } from "react";
import "./App.css";
import CalculatorDisplay from "./components/CalculatorDisplay";

function App() {
  const [num, setNum] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  function handleButtonClick(value) {
    if (value === "C") {
      setNum("0");
      setOperator(null);
      setFirstOperand(null);
    } else if (value === "D") {
      setNum(num.slice(0, -1) || "0");
    } else if (value === "%") {
      if (num !== "0") {
        setNum(String(parseFloat(num) / 100));
      }
    } else if (value === "," || value === ".") {
      if (!num.includes(".")) {
        setNum(num + ".");
      }
    } else if (value === "=") {
      if (firstOperand !== null && operator) {
        const secondOperand = parseFloat(num);
        let result;
        switch (operator) {
          case "+":
            result = firstOperand + secondOperand;
            break;
          case "-":
            result = firstOperand - secondOperand;
            break;
          case "×":
            result = firstOperand * secondOperand;
            break;
          case "÷":
            result = firstOperand / secondOperand;
            break;

          default:
        }
        setNum(String(result));
        setOperator(null);
        setFirstOperand(null);
      }
    } else if (["+", "-", "×", "÷"].includes(value)) {
      setFirstOperand(parseFloat(num));
      setOperator(value);
      setNum("0");
    } else {
      setNum(num === "0" ? value : num + value);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-500 p-6">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-4xl text-center text-white font-mono font-bold drop-shadow-lg mb-4">
          Calculator
        </h1>
        <CalculatorDisplay handleButtonClick={handleButtonClick} num={num} />
      </div>
    </div>
  );
}

export default App;
