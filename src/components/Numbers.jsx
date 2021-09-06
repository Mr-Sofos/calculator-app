import React from 'react';
import { useCalc } from '../Context/Context';

const Numbers = () => {
  const { updateCalc, inputClear } = useCalc();

  return (
    <div className='leftPanel'>
      <div className='numbers'>
        <div onClick={() => updateCalc('7')}>7</div>
        <div onClick={() => updateCalc('8')}>8</div>
        <div onClick={() => updateCalc('9')}>9</div>
      </div>
      <div className='numbers'>
        <div onClick={() => updateCalc('4')}>4</div>
        <div onClick={() => updateCalc('5')}>5</div>
        <div onClick={() => updateCalc('6')}>6</div>
      </div>
      <div className='numbers'>
        <div onClick={() => updateCalc('1')}>1</div>
        <div onClick={() => updateCalc('2')}>2</div>
        <div onClick={() => updateCalc('3')}>3</div>
      </div>
      <div className='numbers'>
        <div onClick={() => updateCalc('0')}>0</div>
        <div onClick={() => updateCalc('.')}>.</div>
        <div onClick={inputClear}>AC</div>
      </div>
    </div>
  );
};

export default Numbers;
