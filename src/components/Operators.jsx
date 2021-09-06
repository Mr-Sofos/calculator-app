import React from 'react';
import { useCalc } from '../Context/Context';

const Operators = () => {
  const { updateCalc } = useCalc();
  return (
    <div className='operators'>
      <div onClick={() => updateCalc('+')}>+</div>
      <div onClick={() => updateCalc('-')}>-</div>
      <div onClick={() => updateCalc('*')}>*</div>
      <div onClick={() => updateCalc('/')}>/</div>
    </div>
  );
};

export default Operators;
