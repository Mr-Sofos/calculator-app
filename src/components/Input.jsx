import React from 'react';
import { useCalc } from '../Context/Context';

const Input = () => {
  const { calc, result } = useCalc();
  return (
    <div className='input'>
      <span className='preResultInput'>({result || 0})</span>&nbsp;
      {calc || 0}
    </div>
  );
};

export default Input;
