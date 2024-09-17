import React, { ChangeEvent } from 'react';
import { useStore } from '../Hooks/store';

const CalculatorPage : React.FC = () => {

    const { num1, num2, result, setNum1, setNum2, calculateSum,calculateSubtract } = useStore();

      const handleOperand1Change = (e: ChangeEvent<HTMLInputElement>) => {
        setNum1(Number(e.target.value));
      };

      const handleOperand2Change = (e: ChangeEvent<HTMLInputElement>) => {
        setNum2(Number(e.target.value));

      };



  return (
    <div>
      <input
        type="number"
        value={num1}
        onChange={handleOperand1Change}
      />
      
      <input
        type="number"
        value={num2}
        onChange={handleOperand2Change}
      />
      <button onClick={calculateSum}>+</button>
      <button onClick={calculateSubtract}>-</button>
      <div>Result: {result}</div>
    </div>
  )
}

export default CalculatorPage
