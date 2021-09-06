import React, { useContext, useState } from 'react';

const MyContext = React.createContext();

export const useCalc = () => {
  return useContext(MyContext);
};

export const ContextProvider = ({ children }) => {
  const [calc, setCalc] = useState('');
  const [result, setResult] = useState('');

  const ops = ['+', '-', '*', '/', '.'];

  const updateCalc = (value) => {
    if (
      (ops.includes(value) && calc === '') ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  };

  const solution = () => {
    if (calc === '') return;
    setCalc(eval(calc).toString());
  };

  const inputClear = () => {
    setCalc('');
  };

  return (
    <MyContext.Provider
      value={{
        calc: calc,
        result: result,
        updateCalc: updateCalc,
        solution: solution,
        inputClear: inputClear,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
