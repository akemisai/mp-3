import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

// useCalculator hook
const useCalculator = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState<number | string | null>(null);

  const calculate = (operation: string) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    let res;

    switch (operation) {
      case 'add':
        res = num1 + num2;
        break;
      case 'subtract':
        res = num1 - num2;
        break;
      case 'multiply':
        res = num1 * num2;
        break;
      case 'divide':
        res = num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        break;
      case 'power':
        res = Math.pow(num1, num2);
        break;
      default:
        res = null;
    }

    setResult(res);
  };

  const clear = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
  };

  return {
    firstNumber,
    setFirstNumber,
    secondNumber,
    setSecondNumber,
    result,
    calculate,
    clear,
  };
};

// Calculator component
export default function Calculator() {
  const { firstNumber, setFirstNumber, secondNumber, setSecondNumber, result, calculate, clear } = useCalculator();

  return (
      <div className="content">
      <Helmet>
        <title>Projects | Resume</title>
      </Helmet>
        <section>
                <h2>Project</h2>
                <p>Here is a calculator project</p>
            </section>
        <div className="calculator-container">
          <input
            type="text"
            value={firstNumber}
            onChange={(e) => setFirstNumber(e.target.value)}
            placeholder="First number"
          />
          <input
            type="text"
            value={secondNumber}
            onChange={(e) => setSecondNumber(e.target.value)}
            placeholder="Second number"
          />
          <div className="buttons">
            <button onClick={() => calculate('add')}>+</button>
            <button onClick={() => calculate('subtract')}>-</button>
            <button onClick={() => calculate('multiply')}>*</button>
            <button onClick={() => calculate('divide')}>/</button>
            <button onClick={() => calculate('power')}>**</button>
            <button onClick={clear}>Clear</button>
          </div>
          <h3>{result}</h3>
        </div>
      </div>
  );
}
